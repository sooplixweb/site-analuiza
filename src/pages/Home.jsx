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

export default function Home() {
  const [recantoOpen, setRecantoOpen] = useState(false);
  const [recantoAnswers, setRecantoAnswers] = useState(null);

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero onRecanto={() => setRecantoOpen(true)} />
        <About />
        <HowCanHelp />
        <Concept />
        <Caminhos />
        <Authority />
        <Story />
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