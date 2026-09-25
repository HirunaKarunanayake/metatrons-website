'use client';
import Link from 'next/link';
import {ArrowRight,MessageCircle,CircuitBoard} from 'lucide-react';
import {PageShell,wa} from './site';
import {services,projects} from './data';

const capabilityImages = [
  { src: 'https://images.unsplash.com/photo-1769149068959-b11392164add?auto=format&fit=crop&q=82&w=900', alt: 'Engineer working on PCB design' },
  { src: 'https://images.unsplash.com/photo-1743056586194-837401d75e0a?auto=format&fit=crop&q=82&w=900', alt: '3D printer producing an enclosure prototype' },
  { src: 'https://images.unsplash.com/photo-1775457480933-a9ca6953ef69?auto=format&fit=crop&q=82&w=900', alt: 'Electronics product prototype on a breadboard' },
  { src: 'https://images.unsplash.com/photo-1780034766295-43db0f2a0fb7?auto=format&fit=crop&q=82&w=900', alt: 'Industrial automation control panel' },
  { src: 'https://images.unsplash.com/photo-1752614671052-92e18f534db1?auto=format&fit=crop&q=82&w=900', alt: 'Industrial robotic arm in a factory' },
];
export default function Home(){return <PageShell>
<section className="hero"><div className="glow one"/><div className="glow two"/><div className="homeHeroGraphic" aria-hidden="true"><CircuitBoard/><span>PCB · EMBEDDED · AI</span></div><div className="eyebrow">ELECTRONICS · AUTOMATION · ROBOTICS</div><h1>Engineering ideas into<br/><span>real-world systems.</span></h1><p>Metatrons designs electronics, intelligent machines and complete products — from the first schematic to the finished system.</p><div className="actions"><a className="primary" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Discuss your project</a><Link className="secondary" href="/projects">Explore our work <ArrowRight size={18}/></Link></div><div className="heroGrid"><div><b>PCB</b><small>Hardware design</small></div><div><b>CAD</b><small>Enclosures</small></div><div><b>AI</b><small>Machine vision</small></div><div><b>IoT</b><small>Connected systems</small></div><div><b>Automation</b><small>Industrial systems</small></div><div><b>Robotics</b><small>Intelligent machines</small></div></div></section>
<section><div className="sectionHead"><div><span>CAPABILITIES</span><h2>Engineering across<br/>the full product.</h2></div><div><p>Explore our PCB, enclosure, product development, automation and robotics capabilities.</p><Link className="textLink" href="/services">View all services <ArrowRight size={16}/></Link></div></div><div className="homeCapabilities">{services.map(([t,d,I],i)=><Link href="/services" className="homeCapabilityCard" key={t}><div className="homeCapabilityImage"><img src={capabilityImages[i].src} alt={capabilityImages[i].alt}/><span>0{i+1}</span></div><div className="homeCapabilityCopy"><h3>{t}</h3><p>{d}</p><span className="homeCapabilityLink">Explore service <ArrowRight size={15}/></span></div></Link>)}</div></section>


</PageShell>}