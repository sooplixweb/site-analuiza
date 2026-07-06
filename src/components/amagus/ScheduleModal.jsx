import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Check, Copy, Calendar, Clock, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import AmagusLogo from './AmagusLogo';

const MONTHS_PT = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const WEEKDAYS_PT = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const MONTHS_PT_LOWER = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const WEEKDAYS_PT_LOWER = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

const TIME_SLOTS = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
const SESSION_PRICE = 'R$ 200,00';
const PIX_CODE = '00020126580014BR.GOV.BCB.PIX0136amagus-lapidar-agendamento5204000053039865802BR5913ANALUIZARIGUEIRA6009SAOPAULO62070503***6304A1B2C3';

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getAvailabilityForDate(date) {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  return TIME_SLOTS.map((time, i) => ({
    time,
    available: seededRandom(seed + i * 7 + 3) > 0.35,
  }));
}

function formatDatePt(date) {
  return `${WEEKDAYS_PT_LOWER[date.getDay()]}, ${date.getDate()} de ${MONTHS_PT_LOWER[date.getMonth()]}`;
}

function FakeQRCode() {
  const SIZE = 25;
  const CELL = 6;
  const cells = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const inTopLeft = r < 7 && c < 7;
      const inTopRight = r < 7 && c >= SIZE - 7;
      const inBottomLeft = r >= SIZE - 7 && c < 7;
      let filled = false;
      if (inTopLeft || inTopRight || inBottomLeft) {
        let lr, lc;
        if (inTopLeft) { lr = r; lc = c; }
        else if (inTopRight) { lr = r; lc = c - (SIZE - 7); }
        else { lr = r - (SIZE - 7); lc = c; }
        filled = lr === 0 || lr === 6 || lc === 0 || lc === 6 || (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4);
      } else {
        filled = ((r * 31 + c * 17 + r * c + 7) % 5) < 2;
      }
      if (filled) {
        cells.push(<rect key={`${r}-${c}`} x={c * CELL} y={r * CELL} width={CELL} height={CELL} fill="#2E2824" />);
      }
    }
  }
  return (
    <svg viewBox={`0 0 ${SIZE * CELL} ${SIZE * CELL}`} className="w-44 h-44 mx-auto">
      <rect width="100%" height="100%" fill="#FFFFFF" />
      {cells}
    </svg>
  );
}

export default function ScheduleModal({ isOpen, onClose }) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const maxDate = useMemo(() => {
    const m = new Date(today);
    m.setMonth(m.getMonth() + 2);
    return m;
  }, [today]);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState('calendar');
  const [pixCopied, setPixCopied] = useState(false);
  const [processing, setProcessing] = useState(false);

  const canGoBack = viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth());
  const canGoForward = viewYear < maxDate.getFullYear() || (viewYear === maxDate.getFullYear() && viewMonth < maxDate.getMonth());

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();

  const goPrevMonth = () => {
    if (!canGoBack) return;
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const goNextMonth = () => {
    if (!canGoForward) return;
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isDayDisabled = (day) => {
    const date = new Date(viewYear, viewMonth, day);
    return date < today || date > maxDate;
  };

  const isDaySelected = (day) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === viewMonth && selectedDate.getFullYear() === viewYear;
  };

  const handleSelectDate = (day) => {
    if (isDayDisabled(day)) return;
    setSelectedDate(new Date(viewYear, viewMonth, day));
    setSelectedTime(null);
  };

  const availability = selectedDate ? getAvailabilityForDate(selectedDate) : [];

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(PIX_CODE);
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 3000);
  };

  const handleConfirmPayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep('success');
    }, 2500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('calendar');
      setSelectedDate(null);
      setSelectedTime(null);
      setViewYear(today.getFullYear());
      setViewMonth(today.getMonth());
    }, 300);
  };

  const calendarDays = [];
  for (let i = 0; i < firstWeekday; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

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
            className="amagus-pattern-light relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden border border-primary/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-primary/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <AmagusLogo className="h-5 w-5 text-primary" showInner={false} />
                <span className="font-display text-base text-foreground tracking-wide">
                  {step === 'calendar' && 'Agendar horário'}
                  {step === 'pix' && 'Garantir sua vaga'}
                  {step === 'success' && 'Tudo certo'}
                </span>
              </div>
              <button onClick={handleClose} className="text-foreground/40 transition-colors hover:text-primary" aria-label="Fechar">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8">
              <AnimatePresence mode="wait">
                {/* STEP: Calendar + Time */}
                {step === 'calendar' && (
                  <motion.div key="calendar" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    {/* Calendar */}
                    <div className="mb-8">
                      <div className="mb-4 flex items-center justify-between">
                        <button onClick={goPrevMonth} disabled={!canGoBack} className={`p-2 transition-colors ${canGoBack ? 'text-primary hover:text-foreground' : 'cursor-not-allowed text-foreground/20'}`}>
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <span className="font-display text-lg text-foreground">
                          {MONTHS_PT[viewMonth]} {viewYear}
                        </span>
                        <button onClick={goNextMonth} disabled={!canGoForward} className={`p-2 transition-colors ${canGoForward ? 'text-primary hover:text-foreground' : 'cursor-not-allowed text-foreground/20'}`}>
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Weekday headers */}
                      <div className="mb-2 grid grid-cols-7 gap-1">
                        {WEEKDAYS_PT.map((wd, i) => (
                          <div key={i} className="text-center text-[10px] font-medium uppercase tracking-wide text-foreground/40">
                            {wd}
                          </div>
                        ))}
                      </div>

                      {/* Days grid */}
                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, i) => {
                          if (day === null) return <div key={i} />;
                          const disabled = isDayDisabled(day);
                          const selected = isDaySelected(day);
                          return (
                            <button
                              key={i}
                              onClick={() => handleSelectDate(day)}
                              disabled={disabled}
                              className={`aspect-square flex items-center justify-center text-sm transition-all duration-200 ${
                                disabled
                                  ? 'cursor-not-allowed text-foreground/20'
                                  : selected
                                  ? 'bg-primary font-medium text-background'
                                  : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slots */}
                    {selectedDate && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="border-t border-primary/10 pt-6">
                          <div className="mb-4 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="font-body text-sm text-foreground/70">
                              Horários para {formatDatePt(selectedDate)}
                            </span>
                          </div>

                          {/* Time slot grid with availability icons */}
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {availability.map((slot) => (
                              <button
                                key={slot.time}
                                onClick={() => slot.available && setSelectedTime(slot.time)}
                                disabled={!slot.available}
                                className={`flex items-center justify-center gap-2 border px-3 py-2.5 text-sm transition-all duration-200 ${
                                  !slot.available
                                    ? 'cursor-not-allowed border-primary/5 bg-muted/30 text-foreground/25'
                                    : selectedTime === slot.time
                                    ? 'border-primary bg-primary/10 font-medium text-primary'
                                    : 'border-primary/15 text-foreground/70 hover:border-primary/40 hover:text-primary'
                                }`}
                              >
                                <span className={`h-2 w-2 rounded-full ${slot.available ? 'bg-green-500' : 'bg-foreground/15'}`} />
                                {slot.time}
                              </button>
                            ))}
                          </div>

                          {/* Legend */}
                          <div className="mt-4 flex items-center gap-4 text-xs text-foreground/40">
                            <span className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-green-500" />
                              Disponível
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-foreground/15" />
                              Indisponível
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Finalizar button */}
                    {selectedDate && selectedTime && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-6">
                        <button
                          onClick={() => setStep('pix')}
                          className="group inline-flex w-full items-center justify-center gap-2 bg-foreground px-6 py-4 text-sm tracking-wide text-background transition-all duration-300 hover:bg-foreground/80"
                        >
                          Finalizar agendamento
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* STEP: Pix */}
                {step === 'pix' && (
                  <motion.div key="pix" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    {/* Summary */}
                    <div className="mb-6 flex items-center gap-3 border border-primary/15 bg-primary/5 px-4 py-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-foreground">{formatDatePt(selectedDate)}</p>
                        <p className="text-xs text-foreground/50">às {selectedTime}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6 text-center">
                      <p className="text-xs uppercase tracking-wide text-foreground/40">Taxa de agendamento</p>
                      <p className="mt-1 font-display text-3xl text-foreground">{SESSION_PRICE}</p>
                    </div>

                    {/* QR Code */}
                    <div className="mb-6 flex flex-col items-center">
                      <div className="border border-primary/15 bg-background p-4">
                        <FakeQRCode />
                      </div>
                      <p className="mt-3 text-xs text-foreground/40">Escaneie o QR Code com seu banco</p>
                    </div>

                    {/* Copy & Paste */}
                    <div className="mb-6">
                      <label className="mb-2 block text-xs uppercase tracking-wide text-foreground/40">Pix copia e cola</label>
                      <div className="flex items-stretch gap-2">
                        <input
                          readOnly
                          value={PIX_CODE}
                          className="flex-1 truncate border border-primary/15 bg-muted/30 px-3 py-2.5 text-xs text-foreground/60"
                        />
                        <button
                          onClick={handleCopyPix}
                          className="inline-flex items-center gap-1.5 border border-primary/20 px-4 text-xs text-primary transition-colors hover:bg-primary/5"
                        >
                          {pixCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                          {pixCopied ? 'Copiado' : 'Copiar'}
                        </button>
                      </div>
                    </div>

                    {/* Confirm payment */}
                    <button
                      onClick={handleConfirmPayment}
                      disabled={processing}
                      className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm tracking-wide text-background transition-all duration-300 hover:bg-primary/90 disabled:opacity-60"
                    >
                      {processing ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processando pagamento...
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4" />
                          Já fiz o pagamento
                        </>
                      )}
                    </button>

                    <button onClick={() => setStep('calendar')} className="mt-3 inline-flex w-full items-center justify-center gap-1.5 py-2 text-xs text-foreground/40 transition-colors hover:text-primary">
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Voltar ao calendário
                    </button>
                  </motion.div>
                )}

                {/* STEP: Success */}
                {step === 'success' && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="flex flex-col items-center py-8 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                      <Check className="h-8 w-8 text-green-500" />
                    </motion.div>
                    <h3 className="font-display text-2xl text-foreground">Vaga garantida!</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/60">
                      Seu agendamento para {formatDatePt(selectedDate)} às {selectedTime} foi confirmado. A Ana Luiza entrará em contato em breve.
                    </p>
                    <button onClick={handleClose} className="mt-8 inline-flex items-center gap-2 bg-foreground px-8 py-3.5 text-sm tracking-wide text-background transition-all duration-300 hover:bg-foreground/80">
                      Concluir
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="border-t border-primary/10 px-6 py-4">
              <p className="text-[10px] leading-relaxed text-foreground/40">
                Esta é uma simulação de agendamento. O pagamento via Pix é ilustrativo e não efetiva cobrança real.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}