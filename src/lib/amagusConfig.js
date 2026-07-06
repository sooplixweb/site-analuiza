export const INTENSITY_LABELS = ['Leve', 'Incômoda', 'Frequente', 'Intensa', 'Muito difícil de lidar'];

export const AMAGUS = {
  whatsappNumber: '5531984839249',
  instagram: '@analuizarigueira_psi',
  instagramUrl: 'https://instagram.com/analuizarigueira_psi',
  crp: '16/11155',
  name: 'Ana Luiza Rigueira',
  shortName: 'Ana Luiza',
  yearsExperience: 16,
  university: 'UFSJ',
  address: 'Rua Parísio José Gonçalves, 97 — Jardim das Oliveiras — Anchieta/ES',
  images: {
    hero: '/assets/amagus/fotohome.jpeg',
    about: '/assets/amagus/anaquemsou.jpeg',
    family: '/assets/amagus/familia.png',
    stone: '/assets/amagus/pedra.png',
  },
  navItems: [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem sou', href: '#quem-sou' },
    { label: 'Como posso ajudar', href: '#como-posso-ajudar' },
    { label: 'Âmagus Lapidar', href: '#amagus-lapidar' },
    { label: 'História', href: '#historia' },
    { label: 'Contato', href: '#contato' },
  ],
};

export function whatsappLink(message) {
  return `https://wa.me/${AMAGUS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá, Ana. Cheguei até o Âmagus Lapidar e senti que talvez este seja o lugar para recomeçar a me escutar. Gostaria de conversar sobre os próximos passos.';

export function formatRecantoWhatsAppMessage(answers) {
  const intensity = answers.intensidade
    ? `${answers.intensidade}/5 — ${INTENSITY_LABELS[answers.intensidade - 1]}`
    : '—';
  return `Olá, Ana. Cheguei até o Âmagus Lapidar e resolvi compartilhar um pouco do meu momento antes de conversarmos.

— Recanto Âmagus —
Tema: ${answers.tema || '—'}
Como aparece: ${answers.comoApareceu || '—'}
Intensidade: ${intensity}
Terapia anterior: ${answers.terapiaAntes || '—'}
Busca: ${answers.busca || '—'}
Formato: ${answers.formato || '—'}

Gostaria de entender os próximos passos.`;
}
