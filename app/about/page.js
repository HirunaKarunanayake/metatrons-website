import { PageShell, PageHero, WhatsAppCTA } from '../site';
import { Linkedin } from 'lucide-react';

// ============================================================
// TEAM — EASY TO EDIT
// Replace the placeholder names/roles and add photos later.
// Put photos in public/team/ and use e.g. '/team/name.jpg'.
// ============================================================
const team = [
  {
    name: 'Pawara Piyumal',
    role: 'Electronics & PCB Design',
    bio: 'Undergraduate, Electronics and Telecommunications Engineering, University of Moratuwa.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/pawara-piyumal-55ab28334/'
  },
  {
    name: 'Hiruna Karunanayake',
    role: 'Embedded Systems & Firmware',
    bio: 'Undergraduate, Electronics and Telecommunications Engineering, University of Moratuwa.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/hiruna-karunanayake/'
  },
  {
    name: 'Dulen Withanage',
    role: 'AI & Software Development',
    bio: 'Undergraduate, Electronics and Telecommunications Engineering, University of Moratuwa.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/dulen-withanage-a218281aa/'
  },
  {
    name: 'Nusaif Shehan',
    role: 'Mechanical & Product Design',
    bio: 'Undergraduate, Electronics and Telecommunications Engineering, University of Moratuwa.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/nusaif-shehan-147322218/'
  },
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        kicker="ABOUT METATRONS"
        title="Practical engineering,"
        accent="without the black box."
      >
        We work at the intersection of electronics, embedded systems, product
        development, automation and robotics.
      </PageHero>

      <section className="about pageAbout">
        <div>
          <span>HOW WE WORK</span>
          <h2>Understand. Design.<br /><em>Prototype. Refine.</em></h2>
        </div>
        <div>
          <p>
            Our approach starts with the real requirement and its constraints.
            We then design the electronics, mechanics, firmware and control
            around the problem instead of forcing a generic solution.
          </p>
          <p>
            Whether you are developing a new electronic product or solving a
            production-floor problem, the aim is the same: a system that is
            practical, testable and maintainable.
          </p>
        </div>
      </section>

    

      {/* <WhatsAppCTA /> */}
    </PageShell>
  );
}
