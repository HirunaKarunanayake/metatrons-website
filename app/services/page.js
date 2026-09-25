'use client';

import { ArrowRight, CheckCircle2, Lightbulb, PenTool, Wrench, Rocket } from 'lucide-react';
import { PageShell, PageHero, WhatsAppCTA, wa } from '../site';
import { services } from '../data';

const serviceDetails = [
  ['Schematic capture', 'PCB layout', 'Design for manufacturing', 'Prototype support'],
  ['3D CAD modelling', 'Electronics-fit enclosures', 'Assembly planning', 'Manufacturing-ready design'],
  ['Hardware + firmware', 'Rapid prototyping', 'System integration', 'Design refinement'],
  ['Sensors & control', 'Machine vision', 'Monitoring systems', 'Industrial integration'],
  ['Custom electronics', 'Perception & sensing', 'Motion and control', 'Intelligent integration'],
];


const serviceImages = [
  {
    src: 'https://images.unsplash.com/photo-1769149068959-b11392164add?auto=format&fit=crop&q=82&w=1200',
    alt: 'Engineer working on a PCB design on a computer',
  },
  {
    src: 'https://images.unsplash.com/photo-1743056586194-837401d75e0a?auto=format&fit=crop&q=82&w=1200',
    alt: '3D printer producing a physical prototype',
  },
  {
    src: 'https://images.unsplash.com/photo-1775457480933-a9ca6953ef69?auto=format&fit=crop&q=82&w=1200',
    alt: 'Electronics prototype built on a breadboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1780034766295-43db0f2a0fb7?auto=format&fit=crop&q=82&w=1200',
    alt: 'Industrial automation electrical control panel',
  },
  {
    src: 'https://images.unsplash.com/photo-1752614671052-92e18f534db1?auto=format&fit=crop&q=82&w=1200',
    alt: 'Industrial robotic arm operating in a factory',
  },
];

const process = [
  [Lightbulb, '01', 'Understand', 'We start with the real requirement, operating environment and constraints.'],
  [PenTool, '02', 'Design', 'Electronics, mechanics, firmware and software are designed as one system.'],
  [Wrench, '03', 'Prototype', 'We build, integrate and test the design against the actual requirement.'],
  [Rocket, '04', 'Refine', 'Results feed back into the design until it is practical and ready for the next stage.'],
];

export default function Services() {
  return (
    <PageShell>
      <PageHero kicker="SERVICES" title="From circuit to" accent="complete system.">
        Engineering support across the product lifecycle — from a focused design task to an integrated solution.
      </PageHero>

      <section className="servicesShowcase pageSection">
        <div className="sectionHead">
          <div><span>WHAT WE DO</span><h2>Specialists where you need us.<br/>Integrated when you need more.</h2></div>
          <p>Choose a focused engineering service or bring us a complete problem. Our capabilities are designed to work together.</p>
        </div>

        <div className="serviceShowcaseGrid">
          {services.map(([title, description, Icon], i) => (
            <article className="serviceShowcaseCard" key={title}>
              <div className="serviceVisual servicePhoto">
                <img src={serviceImages[i].src} alt={serviceImages[i].alt} />
                <span>0{i + 1}</span>
                <div className="servicePhotoShade" />
              </div>
              <div className="serviceShowcaseCopy">
                <small>ENGINEERING SERVICE</small>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="servicePoints">
                  {serviceDetails[i].map(item => <span key={item}><CheckCircle2 size={15}/>{item}</span>)}
                </div>
                <a href={wa(`Hello Metatrons, I'm interested in your ${title} service.`)} target="_blank" rel="noreferrer">
                  Discuss this service <ArrowRight size={16}/>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="processSection">
        <div className="sectionHead">
          <div><span>OUR PROCESS</span><h2>A practical path from<br/>requirement to reality.</h2></div>
          <p>A clear engineering workflow keeps decisions traceable and reduces surprises during integration.</p>
        </div>
        <div className="processGrid">
          {process.map(([Icon, num, title, text]) => (
            <div className="processCard" key={title}><div><Icon/><span>{num}</span></div><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>

      <WhatsAppCTA title="Need engineering support?" />
    </PageShell>
  );
}
