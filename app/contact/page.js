'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { PageShell, PageHero, wa } from '../site';
import { CONTACT } from '../config';

export default function Contact() {
  return (
    <PageShell>
      <PageHero
        kicker="CONTACT"
        title="Tell us what you"
        accent="want to build."
      >
        Start with a short description of your requirement. Reach us through
        WhatsApp for a quick discussion or email us when you want to send a
        more detailed requirement, drawings or documents.
      </PageHero>

      <section className="contactCards contactCardsThree">
        <a href={wa()} target="_blank" rel="noreferrer">
          <MessageCircle />
          <div>
            <small>FASTEST WAY TO REACH US</small>
            <h3>WhatsApp Business</h3>
            <p>Discuss projects, services, components and availability directly with us.</p>
          </div>
        </a>

        <a href={`mailto:${CONTACT.email}`}>
          <Mail />
          <div>
            <small>EMAIL</small>
            <h3>{CONTACT.email}</h3>
            <p>Send project briefs, drawings, BOMs, specifications and other detailed enquiries.</p>
          </div>
        </a>

        <div>
          <div>
            <small>WHAT TO INCLUDE</small>
            <h3>Help us understand the requirement</h3>
            <p>
              Tell us what you want to build or improve, the expected quantity
              or application, and any useful drawings, photos or part numbers.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
