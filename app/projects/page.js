'use client';

import { PageShell, PageHero, WhatsAppCTA } from '../site';

// ============================================================
// YOUR PROJECTS
// ============================================================
// To add a new project:
// 1. Copy one {...} block.
// 2. Change the title, category, description, image and technologies.
// 3. Put the project image inside: public/projects/
// ============================================================

const projects = [
  {
    title: 'Bottle Quality Inspection System',

    category: 'Industrial Automation',

    description:
      'An automated quality control system designed to detect defective bottles on high-speed beverage production lines. This system was developed for the Ceylon Cold Stores PLC, Ranala Factory under there customized requirements.',

    image: '/projects/bottle-inspection.png',

    technologies: [
      'Computer Vision',
      'STM32',
      'Raspberry Pi',
      'Industrial Sensors',
    ],
  },

  {
    title: 'Solar-Powered Elephant Fence Monitoring System',

    category: 'IoT & Embedded Systems',

    description:
      'A remote monitoring solution designed to monitor electric elephant fences and report system conditions remotely. Uses two distinct communication methods (mobile app + SMS + voice calls) to ensure reliability.',

    image: '/projects/elephant-fence.jpg',

    technologies: [
      'ESP32',
      'GSM',
      'Solar Power',
      'IoT',
    ],
  },

  {
    title: 'Autonomous Floor Cleaning Robot',

    category: 'Robotics',

    description:
      'An autonomous robotic system combined with robotics, embedded systems, and autonomous navigation for floor cleaning. This system integrates LiDAR-based mapping, STM32 control, Raspberry Pi processing, sensor fusion, and custom PCBs for complete real-world operational autonomy.',

    image: '/projects/robo.png',

    technologies: [
      'STM32',
      'LiDAR',
      'ROS',
      'Raspberry Pi ',
    ],
  },

  {
    title: 'Smart Desktop Assistant',

    category: 'SMART DESKTOP & IOT',

    description:
      'An integrated, cloud-connected smart desktop monitoring and management network designed to provide real-time environmental tracking, customizable alarm functions, and remote device management. Built on a distributed IoT architecture, the system seamlessly pairs a physical ESP32-S3 desktop unit with software-simulated end-devices, enabling multi-device telemetry visualization, status monitoring, and remote configuration through a centralized web dashboard.',

    image: '/projects/desktop.png',

    technologies: [
      'ESP32',
      'MQTT',
      'Cloud Backend',
      'Environmental Sensors ',
    ],
  },
];


// ============================================================
// PAGE CODE
// You normally DO NOT need to change anything below this line.
// ============================================================

export default function Projects() {
  return (
    <PageShell>

      <PageHero
        kicker="PROJECTS"
        title="Engineering proven by"
        accent="real projects."
      >
        A growing portfolio across industrial automation, embedded electronics,
        IoT, robotics and intelligent systems Here are some projects we have completed.
      </PageHero>


      <section className="projects pageSection">

        <div className="projectGrid">

          {projects.map((project) => (

            <article className="project" key={project.title}>

              <div className="projectImage">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>


              <div className="projectCopy">

                <small>{project.category}</small>

                <h3>{project.title}</h3>

                <p>{project.description}</p>


                <div className="projectTechnologies">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      <WhatsAppCTA title="Have a similar challenge?" />

    </PageShell>
  );
}