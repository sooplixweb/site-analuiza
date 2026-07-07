import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { whatsappLink, formatRecantoWhatsAppMessage, INTENSITY_LABELS } from '@/lib/amagusConfig';
import OfficialLogo from './OfficialLogo';

const STEPS = [
  {
    key: 'tema',
    question: 'Qual tema mais te trouxe até aqui?',
    options: [
      'Relações',
      'Trauma',
      'Luto',
      'Autoestima',
      'Ansiedade',
      'Ainda não sei explicar',
    ],
  },
  {
    key: 'comoApareceu',
    question: 'Como isso tem aparecido na sua vida?',
    options: [
      'Tento ser suficiente para todo mundo',
      'Repito relações parecidas',
      'Carrego culpas difíceis de explicar',
      'Perdi alguém ou algo importante',
      'Não sei por onde começar',
      'Sinto que estou apenas sobrevivendo',
    ],
  },
  {
    key: 'intensidade',
    question: 'Hoje, essa dor está em qual intensidade?',
    type: 'scale',
  },
  {
    key: 'terapiaAntes',
    question: 'Você já fez terapia antes?',
    options: [
      'Sim, já fiz',
      'Sim, estou em pausa',
      'Não, seria minha primeira vez',
      'Prefiro falar sobre isso depois',
    ],
  },
  {
    key: 'formato',
    question: 'Qual formato faria mais sentido?',
    options: [
      'Online',
      'Presencial',
      'Quero entender as opções',
    ],
  },
];

const TOTAL_STEPS = STEPS.length + 1; // +1 for summary

export default function RecantoModal({ isOpen, onClose, onComplete }) {
  const [step, setStep] = useState(0); // 0=intro, 1-6=questions, 7=summary
  const [answers, setAnswers] = useState({
    tema: null,
    comoApareceu: null,
    intensidade: null,
    terapiaAntes: null,
    formato: null,
  });
  const [showReview, setShowReview] = useState(false);

  const reset = () => {
    setStep(0);
    setAnswers({
      tema: null,
      comoApareceu: null,
      intensidade: null,
      terapiaAntes: null,
      formato: null,
    });
    setShowReview(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const selectAnswer = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (step === STEPS.length) onComplete?.(updated);
    setTimeout(() => setStep((s) => s + 1), 300);
  };

  const selectIntensity = (level) => {
    setAnswers((prev) => ({ ...prev, intensidade: level }));
  };

  const currentStep = step > 0 && step <= STEPS.length ? STEPS[step - 1] : null;
  const isSummary = step === STEPS.length + 1;
  const progress = Math.min(step / TOTAL_STEPS, 1);
  const isHighIntensity = answers.intensidade === 5;

  const buildSummary = () => {
    const tema = answers.tema || 'não definido';
    const nivel = answers.intensidade ? `${answers.intensidade} — ${INTENSITY_LABELS[answers.intensidade - 1]}` : 'não definida';
    return `Pelo que você compartilhou, ${tema} pode ser uma porta de entrada para a conversa, com intensidade ${nivel}. Este resumo não é um diagnóstico; ele apenas ajuda a iniciar o contato com mais contexto.`;
  };

  const canProceed = () => {
    if (step === 0) return true;
    if (currentStep) return answers[currentStep.key] !== null;
    return true;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="amagus-pattern-dark relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden border border-primary/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-primary/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <OfficialLogo className="w-[138px]" />
              </div>
              <button
                onClick={handleClose}
                className="text-background/50 transition-colors hover:text-primary"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Progress bar */}
            {step > 0 && (
              <div className="h-px bg-primary/10">
                <motion.div
                  className="h-full bg-primary/50"
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
              <AnimatePresence mode="wait">
                {/* Intro */}
                {step === 0 && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center text-center"
                  >
                    <OfficialLogo className="mb-8 w-[220px]" />
                    <p className="font-heading italic text-xl text-background/70 leading-relaxed">
                      Antes de qualquer direção, existe uma escuta. Você pode compartilhar um pouco do seu momento, no seu tempo.
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 bg-primary/10 border border-primary/30 text-primary text-sm tracking-wide transition-all duration-300 hover:bg-primary/20 hover:border-primary/50"
                    >
                      Responder com calma
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}

                {/* Question steps */}
                {currentStep && (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-primary/60">
                      Etapa {step} de {STEPS.length}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-background mt-3 leading-snug">
                      {currentStep.question}
                    </h3>

                    {/* Scale (intensity) */}
                    {currentStep.type === 'scale' ? (
                      <div className="mt-10">
                        <div className="flex justify-between gap-2 sm:gap-3">
                          {[1, 2, 3, 4, 5].map((level) => {
                            const active = answers.intensidade >= level;
                            return (
                              <button
                                key={level}
                                onClick={() => selectIntensity(level)}
                                className="group flex-1 flex flex-col items-center gap-3"
                              >
                                <div className="relative flex h-14 w-14 items-center justify-center">
                                  <svg viewBox="0 0 40 40" className="h-full w-full transition-all duration-300">
                                    <path
                                      d="M20 3 L37 20 L20 37 L3 20 Z"
                                      fill={active ? '#A68A73' : 'none'}
                                      stroke={active ? '#A68A73' : '#DCCFC2'}
                                      strokeWidth={active ? '1.5' : '1'}
                                      opacity={active ? '1' : '0.4'}
                                      className="transition-all duration-300"
                                    />
                                    {active && (
                                      <path
                                        d="M20 12 L28 20 L20 28 L12 20 Z"
                                        fill="#FFFFFF"
                                        opacity="0.25"
                                      />
                                    )}
                                  </svg>
                                </div>
                                <div className="text-center">
                                  <div className={`text-sm font-medium transition-colors duration-300 ${active ? 'text-primary' : 'text-background/50'}`}>
                                    {level}
                                  </div>
                                  <div className={`text-[10px] sm:text-xs mt-0.5 transition-colors duration-300 ${active ? 'text-background/70' : 'text-background/40'}`}>
                                    {INTENSITY_LABELS[level - 1]}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Emergency message for intensity 5 */}
                        <AnimatePresence>
                          {isHighIntensity && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-8 border border-primary/20 bg-primary/5 px-5 py-4">
                                <p className="text-sm text-background/70 leading-relaxed">
                                  Se você estiver em risco ou em situação de emergência, procure imediatamente um serviço de urgência da sua região ou alguém de confiança.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Proceed button */}
                        {answers.intensidade && (
                          <div className="mt-8 flex justify-end">
                            <button
                              onClick={() => setStep(step + 1)}
                              className="inline-flex items-center gap-2 text-primary text-sm transition-colors hover:text-background/70"
                            >
                              Continuar
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Regular options */
                      <div className="mt-8 flex flex-col gap-2.5">
                        {currentStep.options.map((option) => {
                          const selected = answers[currentStep.key] === option;
                          return (
                            <button
                              key={option}
                              onClick={() => selectAnswer(currentStep.key, option)}
                              className={`group flex items-center justify-between px-5 py-3.5 border text-left transition-all duration-300 ${
                                selected
                                  ? 'border-primary/50 bg-primary/10 text-primary'
                                  : 'border-primary/10 text-background/70 hover:border-primary/30 hover:bg-primary/5'
                              }`}
                            >
                              <span className="text-sm">{option}</span>
                              <span className={`flex h-4 w-4 items-center justify-center transition-all duration-300 ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`}>
                                <div className="h-2 w-2 rotate-45 bg-primary" />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Summary */}
                {isSummary && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="flex flex-col items-center text-center mb-6">
                      <OfficialLogo className="mb-6 w-[190px]" />
                      <span className="font-body text-xs tracking-[0.2em] uppercase text-primary/60">
                        Seu resumo
                      </span>
                    </div>

                    <p className="font-heading italic text-lg text-background/70 leading-relaxed text-center">
                      {buildSummary()}
                    </p>

                    {/* Emergency message if intensity 5 */}
                    {isHighIntensity && (
                      <div className="mt-6 border border-primary/20 bg-primary/5 px-5 py-4">
                        <p className="text-sm text-background/70 leading-relaxed">
                          Se você estiver em risco ou em situação de emergência, procure imediatamente um serviço de urgência da sua região ou alguém de confiança.
                        </p>
                      </div>
                    )}

                    {/* Review toggle */}
                    <div className="mt-8">
                      <button
                        onClick={() => setShowReview(!showReview)}
                        className="text-xs text-primary/70 underline-offset-4 hover:underline transition-all"
                      >
                        {showReview ? 'Ocultar respostas' : 'Revisar respostas'}
                      </button>

                      <AnimatePresence>
                        {showReview && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-2 border-l border-primary/20 pl-4">
                              {STEPS.map((s) => (
                                <div key={s.key} className="flex flex-col gap-0.5">
                                  <span className="text-[10px] uppercase tracking-wide text-primary/50">
                                    {s.question}
                                  </span>
                                  <span className="text-sm text-background/70">
                                    {s.type === 'scale' && answers[s.key]
                                      ? `${answers[s.key]} — ${INTENSITY_LABELS[answers[s.key] - 1]}`
                                      : answers[s.key] || '—'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-3">
                      <a
                        href={whatsappLink(formatRecantoWhatsAppMessage(answers))}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onComplete?.(answers)}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-4 text-sm tracking-wide transition-all duration-300 ${
                          isHighIntensity
                            ? 'bg-primary text-foreground animate-glow-pulse hover:bg-primary/90'
                            : 'bg-primary/90 text-foreground hover:bg-primary'
                        }`}
                      >
                        Conversar com a Ana pelo WhatsApp
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setShowReview(!showReview)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-primary/15 text-background/70 text-xs tracking-wide transition-all duration-300 hover:border-primary/30"
                        >
                          <Check className="h-3.5 w-3.5" />
                          Revisar
                        </button>
                        <button
                          onClick={handleClose}
                          className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-primary/15 text-background/50 text-xs tracking-wide transition-all duration-300 hover:text-background/70 hover:border-primary/20"
                        >
                          Agora não
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Back button + Ethics disclaimer */}
            <div className="border-t border-primary/10 px-6 py-4">
              {step > 0 && !isSummary && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mb-3 inline-flex items-center gap-1.5 text-xs text-background/50 transition-colors hover:text-primary"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Voltar
                </button>
              )}
              <p className="text-[10px] leading-relaxed text-background/40">
                Este recurso não realiza diagnóstico e não substitui atendimento psicológico. Ele serve apenas para facilitar o primeiro contato.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
