import { useState } from 'react';
import Header from '@/components/amagus/Header';
import Hero from '@/components/amagus/Hero';
import About from '@/components/amagus/About';
import HowCanHelp from '@/components/amagus/HowCanHelp';
import Concept from '@/components/amagus/Concept';
import Caminhos from '@/components/amagus/Caminhos';
import Authority from '@/components/amagus/Authority';
import Story from '@/components/amagus/Story';
import ScheduleCTA from '@/components/amagus/ScheduleCTA';
import Footer from '@/components/amagus/Footer';
import RecantoModal from '@/components/amagus/RecantoModal';
import NarrativeDivider from '@/components/amagus/NarrativeDivider';

export default function Home() {
  const [recantoOpen, setRecantoOpen] = useState(false);
  const [recantoAnswers, setRecantoAnswers] = useState(null);

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero onRecanto={() => setRecantoOpen(true)} />
        <About />
        <NarrativeDivider>Antes de qualquer comportamento, existe uma história.</NarrativeDivider>
        <HowCanHelp />
        <NarrativeDivider tone="dark">Aquilo que hoje dói também fez você sobreviver um dia.</NarrativeDivider>
        <Concept />
        <Caminhos />
        <NarrativeDivider tone="dark">Toda história merece ser escutada antes de ser julgada.</NarrativeDivider>
        <Authority />
        <Story />
        <NarrativeDivider>A terapia não muda quem você é; ela aproxima você de quem sempre foi.</NarrativeDivider>
        <ScheduleCTA onRecanto={() => setRecantoOpen(true)} recantoAnswers={recantoAnswers} />
      </main>
      <Footer />
      <RecantoModal
        isOpen={recantoOpen}
        onClose={() => setRecantoOpen(false)}
        onComplete={setRecantoAnswers}
      />
    </div>
  );
}
