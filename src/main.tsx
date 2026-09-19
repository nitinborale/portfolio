import { useEffect, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Check,
  Download,
  ExternalLink,
  GitBranch,
  Contact,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';

import './styles.css';

type Project = {
  title: string;
  kind: string;
  description: string;
  tech: string[];
  icon: string;
  featured?: boolean;
};

const navItems = [
  'About',
  'Skills',
  'Projects',
  'Education',
  'Achievements',
  'Certifications',
  'Resume',
  'Contact',
];
const skillGroups = [
  ['Programming', 'C', 'Python', 'Java'],
  ['Web Development', 'HTML', 'CSS', 'JavaScript', 'React'],
  [
    'Data & AI',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Data Analysis',
    'Machine Learning',
  ],
  [
    'Tools & Databases',
    'SQL',
    'MySQL',
    'Git',
    'GitHub',
    'VS Code',
    'Jupyter Notebook',
  ],
];

const learning = [
  'C Programming',
  'Data Structures & Algorithms',
  'Python',
  'Java',
  'Database Management Systems',
  'Git & GitHub',
  'Data Analysis',
  'AI / ML',
  'Software Development',
];
const projects: Project[] = [
  {
    title: 'Water Quality Detector',
    kind: 'IoT / Embedded Project',
    description:
      'An Arduino UNO based water quality monitoring project using a turbidity sensor and a 16x2 I2C LCD. The system reads the sensor value and displays the water quality status.',
    tech: ['Arduino UNO', 'Turbidity Sensor', '16x2 I2C LCD'],
    icon: '≋',
    featured: true,
  },

  {
    title: 'C Programming Projects',
    kind: 'Programming',
    description:
      'A collection of academic C programming projects and exercises covering arrays, pointers, structures, functions, dynamic memory allocation, and file handling.',
    tech: ['C', 'Pointers', 'Arrays', 'File Handling'],
    icon: 'C',
  },

  {
    title: 'College Admission Management System',
    kind: 'Software Engineering',
    description:
      'A UML-based academic system designed to manage college admission activities including application processing, student registration, document verification, fee payment, merit list generation, and notifications.',
    tech: ['UML', 'System Design', 'Software Engineering'],
    icon: '⌘',
  },

  {
    title: 'ATM Management System',
    kind: 'Python Project',
    description:
      'A Python-based academic project that demonstrates basic ATM operations and programming concepts such as functions, conditions, loops, and user interaction.',
    tech: ['Python', 'Functions', 'Control Flow'],
    icon: '$',
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">n/</span>
            <span>Nitin</span>
          </a>

          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}

            <button
              className="icon-button"
              onClick={() => setDark(!dark)}
              aria-label={
                dark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                <span className="status-dot" />
                COMPUTER SCIENCE ENGINEERING STUDENT
              </p>

              <h1>
                Hi, I'm <span className="accent-text">Nitin.</span>
                <br />
                <span className="outline-text">
                  I love building with code.
                </span>
              </h1>

              <p className="hero-role">
                B.Tech Computer Science Engineering Student
              </p>

              <p className="hero-description">
                I'm a CSE student at REVA University, Bengaluru, interested in
                software development, AI/ML, and data science.
              </p>

              <div className="button-row">
                <a className="button primary" href="#projects">
                  View projects <ArrowUpRight size={16} />
                </a>

                <a className="button secondary" href="#contact">
                  Contact me <Contact size={16} />
                </a>
              </div>

              <div className="hero-meta">
                <span>REVA University</span>
                <span>Bengaluru, India</span>
                <span>2nd Year B.Tech CSE</span>
              </div>
            </div>

            <div className="hero-visual reveal delay-1">
              <div className="code-window">
                <div className="window-bar">
                  <i />
                  <i />
                  <i />
                  <code>student_profile.py</code>
                </div>

                <pre>
                  <span>01</span> <b>student</b> = {'{'}
                  {'\n'}
                  <span>02</span> {'  '}
                  <em>"name"</em>: <em>"Nitin"</em>,
                  {'\n'}
                  <span>03</span> {'  '}
                  <em>"field"</em>: <em>"CSE"</em>,
                  {'\n'}
                  <span>04</span> {'  '}
                  <em>"university"</em>: <em>"REVA University"</em>,
                  {'\n'}
                  <span>05</span> {'  '}
                  <em>"interests"</em>: [
                  {'\n'}
                  <span>06</span> {'    '}
                  <em>"AI/ML"</em>, <em>"Data Science"</em>
                  {'\n'}
                  <span>07</span> {'  '}]
                  {'\n'}
                  <span>08</span> <b>keep_learning</b> ={' '}
                  <strong>True</strong>
                  {'\n'}
                  <span>09</span> <b>keep_building</b> ={' '}
                  <strong>True</strong>
                  {'\n'}
                  <span>10</span> <span className="cursor">_</span>
                </pre>
              </div>

              <div className="float-note top-note">
                <small>currently learning</small>
                <strong>CSE + AI/ML</strong>
              </div>

              <div className="float-note bottom-note">
                <small>my mindset</small>
                <strong>Learn • Build • Improve</strong>
              </div>
            </div>
          </div>

          <div className="scroll-cue">
            Scroll to explore <span>↓</span>
          </div>
        </section>

        {/* ABOUT */}
       <SectionIntro
  number="01"
  label="about"
  title={
    <>
      A CSE student with a
      <br />
      <em>curious mindset.</em>
    </>
  }
>
  <p className="large-copy">
    I'm Nitin Borale, a 2nd-year B.Tech Computer Science
    Engineering student at REVA University, Bengaluru.
    I enjoy programming, building projects, and learning
    how technology can solve real-world problems.
  </p>

  <p>
    I'm currently strengthening my skills in C, Python, Java,
    SQL, data analysis, and web development. I'm also exploring
    Artificial Intelligence, Machine Learning, and Data Science
    as areas I would like to pursue in the future.
  </p>

  <div className="learning-strip">
    <span>Currently learning</span>
    <strong>
      Data Structures + Python + AI/ML fundamentals
    </strong>
    <ArrowUpRight size={18} />
  </div>
</SectionIntro>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="container">
            <Heading
              number="02"
              label="toolkit"
              title={
                <>
                  Tools I use to
                  <br />
                  <em>learn & build.</em>
                </>
              }
              note={
                <>
                  Skills I'm building.
                  <br />
                  Always learning.
                </>
              }
            />

            <div className="skill-grid">
              {skillGroups.map(([title, ...items], index) => (
                <article
                  className="skill-card reveal"
                  key={title}
                >
                  <span className="card-number">
                    0{index + 1}
                  </span>

                  <h3>{title}</h3>

                  <p>
                    Foundations for building clear and reliable work.
                  </p>

                  <div className="tag-list">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          className="section projects-section"
          id="projects"
        >
          <div className="container">
            <Heading
              number="03"
              label="selected work"
              title={
                <>
                  Projects that turn
                  <br />
                  <em>learning into code.</em>
                </>
              }
              note={
                <>
                  Academic projects
                  <br />
                  and future builds.
                </>
              }
            />

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  className={`project-card reveal ${
                    project.featured ? 'featured' : ''
                  }`}
                  key={project.title}
                >
                  <div className="project-visual">
                    <span className="project-icon">
                      {project.icon}
                    </span>

                    <span className="visual-label">
                      {project.kind}
                    </span>

                    <div className="visual-lines" />
                  </div>

                  <div className="project-content">
                    <div className="project-topline">
                      <span>0{index + 1}</span>
                      <span>
                        {project.featured
                          ? 'Academic project'
                          : 'Student project'}
                      </span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tech.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href="#contact">
                        GitHub placeholder{' '}
                        <ExternalLink size={14} />
                      </a>

                      {project.featured && (
                        <span>Demo not available</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section
          className="section journey-section"
          id="education"
        >
          <div className="container two-col">
            <div>
              <Heading
                number="04"
                label="education & journey"
                title={
                  <>
                    Learning is the
                    <br />
                    <em>long game.</em>
                  </>
                }
              />

              <div className="education-card">
                <span className="edu-icon">◎</span>

                <div>
                  <h3>
                    B.Tech — Computer Science Engineering
                  </h3>

                  <p>
                    REVA University · Bengaluru, India
                  </p>
                </div>

                <strong>
                  2025 — Present
                  <br />
                  <small>Currently 2nd Year</small>
                </strong>
              </div>
            </div>

            <div className="timeline">
              {learning.map((item, index) => (
                <div
                  className={`timeline-item ${
                    index === learning.length - 1
                      ? 'current'
                      : ''
                  }`}
                  key={item}
                >
                  <span className="timeline-marker" />

                  <div>
                    <small>
                      {index === learning.length - 1
                        ? 'Current focus'
                        : `Stage 0${index + 1}`}
                    </small>

                    <h3>{item}</h3>

                    <p>
                      Building understanding through coursework,
                      practice, and small projects.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section
          className="section"
          id="achievements"
        >
          <div className="container">
            <Heading
              number="05"
              label="achievements"
              title={
                <>
                  Your next
                  <br />
                  <em>milestones.</em>
                </>
              }
              note="Add verified accomplishments here."
            />

            <div className="editable-grid">
              {[
                'Academic achievements',
                'Coding achievements',
                'Hackathons & competitions',
                'Projects & other accomplishments',
              ].map((item) => (
                <div
                  className="editable-row"
                  key={item}
                >
                  <span>+</span>

                  <div>
                    <strong>{item}</strong>
                    <small>Add details when ready</small>
                  </div>

                  <span className="placeholder-label">
                    OPEN SLOT
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          className="section"
          id="certifications"
        >
          <div className="container two-col">
            <Heading
              number="06"
              label="certifications"
              title={
                <>
                  Room for the
                  <br />
                  <em>next milestone.</em>
                </>
              }
            />

            <div className="cert-placeholder">
              <div className="plus-circle">+</div>

              <div>
                <h3>Certificates will live here.</h3>

                <p>
                  Add certificates and learning milestones
                  here when available.
                </p>
              </div>

              <span className="placeholder-label">
                OPEN SLOT
              </span>
            </div>
          </div>
        </section>

        {/* GITHUB */}
        <section className="section github-section">
          <div className="container github-panel">
            <div>
              <p className="kicker">
                07 / github & coding
              </p>

              <h2>
                Building in public,
                <br />
                <em>one repo at a time.</em>
              </h2>

              <p>
                My GitHub profile will showcase programming
                projects and future work.
              </p>

              <a
                className="button light"
                href="https://github.com/nitinborale"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={17} />
                Visit GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="activity">
              <div className="activity-head">
                <span>CODING ACTIVITY</span>
                <span>Less ▪ ▪ ▪ ▪ More</span>
              </div>

              <div className="contribution-grid">
                {Array.from({ length: 84 }, (_, i) => (
                  <i
                    key={i}
                    style={{
                      opacity:
                        (i * 7) % 5 === 0
                          ? 0.9
                          : 0.2 + ((i * 3) % 4) / 10,
                    }}
                  />
                ))}
              </div>

              <div className="activity-foot">
                <span>GitHub profile</span>
                <span>Contribution area</span>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section
          className="section resume-section"
          id="resume"
        >
          <div className="container resume-layout">
            <div>
              <p className="kicker">08 / resume</p>

              <h2>
                A snapshot of
                <br />
                <em>where I'm headed.</em>
              </h2>

              <p>
                Education, technical skills, projects,
                certifications, achievements, and contact
                information in one place.
              </p>

             <a
  className="button primary"
  href="/resume.pdf"
  download="Nitin_Borale_Resume.pdf"
>
  <Download size={16} />
  Download resume
</a>
            </div>

            <div className="resume-list">
              {[
                [
                  'Education',
                  'B.Tech CSE · REVA University',
                ],
                [
                  'Technical skills',
                  'C · Python · Java · SQL · Data',
                ],
                [
                  'Projects',
                  'IoT · C · Python · System Design',
                ],
                [
                  'Certifications',
                  'Available to add',
                ],
                [
                  'Achievements',
                  'Available to add',
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="section contact-section"
          id="contact"
        >
          <div className="container contact-layout">
            <div>
              <p className="kicker">09 / say hello</p>

              <h2>
                Let's <em>connect.</em>
              </h2>

              <p>
                Have a project idea, learning resource, or
                internship opportunity to share? My inbox is
                open.
              </p>

              <div className="contact-details">
                <a href="mailto:YOUR_EMAIL@gmail.com">
                  <Mail size={15} />
                  Your Email
                </a>

                <a
                  href="https://github.com/nitinborale"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={15} />
                  GitHub
                </a>

                <a href="#">
                  <Contact size={15} />
                  LinkedIn
                </a>

                <span>Bengaluru, India</span>
              </div>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setMessageSent(true);
                event.currentTarget.reset();
              }}
            >
              <label>
                Your name
                <input
                  required
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me a little about it..."
                />
              </label>

              <button
                className="button primary"
                type="submit"
              >
                Send message
                <ArrowUpRight size={16} />
              </button>

              {messageSent && (
                <p className="success">
                  <Check size={15} />
                  Thanks. The form is ready to connect
                  once an email service is added.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">n/</span>
            <span>Nitin</span>
          </a>

          <p>
            Computer Science Engineering Student
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/nitinborale"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="#contact">
              LinkedIn
            </a>

            <a href="mailto:YOUR_EMAIL@gmail.com">
              Email
            </a>
          </div>

          <small>
            Learning • Building • Improving
          </small>
        </div>
      </footer>
    </>
  );
}

function Heading({
  number,
  label,
  title,
  note,
}: {
  number: string;
  label: string;
  title: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="kicker">
          {number} / {label}
        </p>

        <h2>{title}</h2>
      </div>

      {note && (
        <p className="heading-note">
          {note}
        </p>
      )}
    </div>
  );
}

function SectionIntro({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="section" id="about">
      <div className="container two-col">
        <Heading
          number={number}
          label={label}
          title={title}
        />

        <div className="about-content reveal delay-1">
          {children}
        </div>
      </div>
    </section>
  );
}

createRoot(
  document.getElementById('root')!
).render(<App />);