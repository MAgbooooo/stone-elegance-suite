import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, MessageCircle, Star, Sparkles, Award, Clock, Ruler, Gem } from "lucide-react";
import logo from "@/assets/logo.jpg";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/portfolio-1.webp";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.webp";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.webp";
import p8 from "@/assets/portfolio-8.jpg";

const WHATSAPP = "https://wa.me/5575988645653?text=Olá+vim+do+Google,+e+gostaria+de+solicitar+um+orçamento";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "L3 Rocha Marmoraria — Mármores e Granitos de Alto Padrão" },
      { name: "description", content: "Projetos exclusivos em mármore, granito, quartzo e quartzito. Acabamento impecável para clientes que valorizam sofisticação. Solicite seu orçamento." },
      { property: "og:title", content: "L3 Rocha Marmoraria — Sofisticação em Cada Centímetro" },
      { property: "og:description", content: "Transformamos mármores e granitos em ambientes que impressionam. Atendimento residencial e comercial." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Index,
});

const portfolio = [p1, p2, p3, p4, p5, p6, p7, p8];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Trust />
      <Authority />
      <Portfolio />
      <Materials />
      <Differentials />
      <Emotional />
      <Process />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="L3 Rocha Marmoraria" className="h-11 w-11 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-wide">L3 Rocha</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Marmoraria</div>
          </div>
        </div>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary-foreground hidden sm:inline-flex">
            Solicitar Orçamento
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={hero} alt="Cozinha de luxo em mármore" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-gold/40 text-gold text-xs uppercase tracking-[0.3em]">
          <Sparkles className="h-3 w-3" /> Alto Padrão
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
          Transformamos Mármores e Granitos<br />
          <span className="text-gradient-gold italic">em Ambientes que Impressionam</span>
        </h1>
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
          Projetos exclusivos para clientes que valorizam sofisticação, acabamento impecável e materiais de alto padrão.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gradient-gold text-primary-foreground font-semibold px-10 py-7 text-base hover:opacity-90 transition-all">
            <MessageCircle className="mr-2 h-5 w-5" /> Solicitar Orçamento
          </Button>
        </a>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-sm text-muted-foreground">
          {["Atendimento rápido no WhatsApp", "Orçamento sem compromisso", "Atendimento residencial e comercial"].map((t) => (
            <div key={t} className="flex items-center gap-2 justify-center">
              <Check className="h-4 w-4 text-gold" /> {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-20 border-y border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-serif text-3xl md:text-4xl mb-3">
          Mais de <span className="text-gradient-gold">500 projetos</span> entregues com excelência
        </p>
        <p className="text-muted-foreground mb-10">Cozinhas · Banheiros · Áreas Gourmet · Escadas · Bancadas · Fachadas</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { n: "500+", l: "Projetos" },
            { n: "12+", l: "Anos de mercado" },
            { n: "100%", l: "Materiais nobres" },
            { n: "5.0", l: "Avaliação clientes" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-3xl md:text-4xl text-gradient-gold">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold uppercase text-xs tracking-[0.3em] mb-4">Autoridade</p>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
          Sua Casa Merece Mais do Que Pedra.<br />
          <span className="italic text-gradient-gold">Merece Exclusividade.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Trabalhamos com materiais selecionados das melhores pedreiras, cortes precisos a milímetros e acabamentos que elevam qualquer ambiente a outro patamar. Cada peça é tratada como uma obra de arte funcional — pensada para durar décadas e impressionar a cada olhar.
        </p>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Portfólio</p>
          <h2 className="font-serif text-3xl md:text-5xl">Projetos que falam por si</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {portfolio.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-md aspect-square border border-border">
              <img
                src={src}
                alt={`Projeto L3 Rocha ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Materials() {
  const items = [
    { name: "Mármore", desc: "Veios únicos e elegância atemporal para projetos sofisticados." },
    { name: "Granito", desc: "Resistência e nobreza em uma das pedras mais versáteis do mundo." },
    { name: "Quartzo", desc: "Tecnologia e beleza em superfícies não porosas de alta performance." },
    { name: "Quartzito", desc: "A força do granito com a sofisticação visual do mármore." },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Materiais Premium</p>
          <h2 className="font-serif text-3xl md:text-5xl">Pedras nobres, escolhidas a dedo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((m) => (
            <Card key={m.name} className="bg-card border-border p-8 hover:border-gold/50 transition-all duration-500 group">
              <Gem className="h-8 w-8 text-gold mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl mb-3">{m.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { i: Ruler, t: "Precisão milimétrica", d: "Tecnologia de corte que garante encaixes perfeitos." },
    { i: Clock, t: "Prazos cumpridos", d: "Compromisso total com cronogramas de obra." },
    { i: Sparkles, t: "Personalização total", d: "Cada projeto é único — assim como você." },
    { i: Award, t: "Acabamento premium", d: "Detalhes que diferenciam um ambiente comum de uma obra-prima." },
  ];
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Diferenciais</p>
          <h2 className="font-serif text-3xl md:text-5xl">Excelência em cada detalhe</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="flex gap-4">
              <div className="shrink-0 h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center">
                <it.i className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-1">{it.t}</h3>
                <p className="text-sm text-muted-foreground">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Emotional() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <img src={p4} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
          Seu projeto merece <span className="italic text-gradient-gold">sofisticação em cada centímetro</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Mais do que uma reforma. É a transformação de um espaço em status, conforto e identidade. Quem entra, percebe. Quem mora, sente todos os dias.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Solicite um orçamento", d: "Conversamos pelo WhatsApp e entendemos seu projeto." },
    { n: "02", t: "Escolha os materiais", d: "Selecionamos juntos as pedras ideais para seu ambiente." },
    { n: "03", t: "Produção personalizada", d: "Cortes precisos sob medida, com acompanhamento total." },
    { n: "04", t: "Instalação profissional", d: "Equipe especializada finaliza com perfeição em sua obra." },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Processo</p>
          <h2 className="font-serif text-3xl md:text-5xl">Simples. Refinado. Impecável.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="font-serif text-5xl text-gradient-gold mb-3">{s.n}</div>
              <h3 className="font-serif text-xl mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { n: "Mariana A.", t: "Arquiteta", q: "Acabamento perfeito e prazo cumprido. A L3 elevou o padrão dos meus projetos." },
    { n: "Ricardo M.", t: "Cliente residencial", q: "Minha cozinha virou o ambiente preferido da casa. Pedra impecável." },
    { n: "Camila S.", t: "Designer de interiores", q: "Atenção aos detalhes que faz toda a diferença. Recomendo de olhos fechados." },
  ];
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Depoimentos</p>
          <h2 className="font-serif text-3xl md:text-5xl">Quem confia, recomenda</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.n} className="bg-card border-border p-8">
              <div className="flex gap-1 mb-4 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-muted-foreground italic leading-relaxed mb-6">"{it.q}"</p>
              <div>
                <div className="font-serif text-lg">{it.n}</div>
                <div className="text-xs uppercase tracking-widest text-gold">{it.t}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-gold uppercase text-xs tracking-[0.3em] mb-4">Vagas limitadas para o mês</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
          Solicite seu orçamento e <span className="italic text-gradient-gold">transforme seu ambiente</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Resposta rápida, atendimento personalizado e materiais selecionados para o seu projeto.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gradient-gold text-primary-foreground font-semibold px-10 py-7 text-base">
            <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Quanto tempo leva para receber o orçamento?", a: "Respondemos no WhatsApp em poucos minutos durante o horário comercial e enviamos o orçamento detalhado em até 24h." },
    { q: "Vocês atendem qual região?", a: "Atendemos toda a região e cidades vizinhas, com possibilidade de projetos especiais sob consulta." },
    { q: "Posso ver os materiais antes de fechar?", a: "Sim. Você pode visitar nosso showroom ou receber amostras e referências para escolher com tranquilidade." },
    { q: "Vocês fazem instalação?", a: "Sim. Equipe própria especializada cuida do corte, transporte e instalação com acabamento impecável." },
    { q: "Trabalham com projetos comerciais?", a: "Sim, atendemos residências, lojas, escritórios, restaurantes e empreendimentos de alto padrão." },
    { q: "Como funciona o pagamento?", a: "Trabalhamos com condições flexíveis. Conversamos diretamente para encontrar o melhor formato para você." },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Dúvidas Frequentes</p>
          <h2 className="font-serif text-3xl md:text-5xl">Tire suas dúvidas</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border-border">
              <AccordionTrigger className="font-serif text-lg text-left hover:text-gold">{it.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex items-center gap-3">
          <img src={logo} alt="L3 Rocha Marmoraria" className="h-14 w-14 rounded-full object-cover" />
          <div>
            <div className="font-serif text-xl">L3 Rocha</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Marmoraria</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p><span className="text-foreground">WhatsApp:</span> (75) 98864-5653</p>
          <p><span className="text-foreground">Atendimento:</span> Residencial e comercial</p>
          <p><a href="https://instagram.com" className="hover:text-gold">@l3rochamarmoraria</a></p>
        </div>
        <div className="md:text-right">
          <p className="font-serif italic text-gold text-lg">"Sofisticação, Exclusividade e Acabamento Impecável."</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} L3 Rocha Marmoraria. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full gradient-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </a>
  );
}
