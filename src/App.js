import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-light text-dark" style={{ minHeight: "100vh", fontFamily: "sans-serif" }}>

      {/* Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed-top w-100 z-3"
      >
        <nav
          className="navbar navbar-expand-lg shadow-sm"
          style={{
            background: "rgba(37, 99, 235, 0.9)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="container">
            {/* Brand */}
            <a
              className="navbar-brand d-flex align-items-center text-white fw-bold fs-5"
              href="#home"
            >
              <img
                src="/github profile.jpg"
                alt="Dhanurmathy P"
                className="rounded-circle border border-white shadow me-2"
                style={{ width: 40, height: 40 }}
              />
              <span className="d-none d-md-inline">DHANURMATHY P</span>
            </a>

            {/* Toggle */}
            <button
              className="navbar-toggler border-0 text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                {["About", "Projects", "Experience", "Education", "Skills", "Contact"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      className="nav-item"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        className="nav-link fw-semibold text-white px-3 rounded"
                        href={`#${item.toLowerCase()}`}
                        style={{
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.background = "rgba(255,255,255,0.15)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "transparent")
                        }
                      >
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center text-center vh-100 position-relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.7)" }}></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="position-relative z-1 w-100"
          style={{ maxWidth: 700 }}
        >
          <h1 className="display-4 fw-bold text-white text-shadow">
            Software Developer | Full-Stack | Innovator | Problem Solver
          </h1>
          <p className="mt-4 fs-4 text-light">
            Passionate about building smart solutions with AI, databases, and full-stack applications. Skilled in Python, Java, React, SQL, and modern frameworks.
          </p>
          <div className="mt-5">
            <a href="#projects" className="btn btn-primary btn-lg me-3 shadow">View Projects</a>
            <a href="/resume.pdf" download className="btn btn-success btn-lg shadow">Download Resume</a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="position-relative py-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))" }}></div>
        <div className="position-relative z-1 container text-center text-white">
          <h2 className="display-6 fw-bold mb-4">About Me</h2>
          <p className="fs-5">
            From academic projects to real-world internships, I’ve learned to turn ideas into impactful solutions. I thrive on problem-solving, collaboration, and adapting to new challenges. My focus is on building software that blends efficiency with innovation, delivering real value to people.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-gradient" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)" }}>
        <div className="container">
          <h2 className="display-6 fw-bold mb-5 text-center text-primary">Projects</h2>
          <div className="row g-4 justify-content-center">
            {/* NLP to SQL */}
            <motion.div whileHover={{ scale: 1.05 }} className="col-md-6">
              <div className="card border-primary shadow h-100">
                <div className="card-body">
                  <h3 className="card-title fw-semibold">NLP to SQL Query Execution</h3>
                  <p className="card-text mt-2 text-secondary">
                    Built a smart system that converts natural language into SQL queries using ML & NLP. Designed a web interface for real-time query execution.
                  </p>
                  <p className="mt-2 text-muted">
                    <strong>Tech Stack:</strong> Python, ML, NLP, MySQL, React
                  </p>
                  <a href="https://github.com/DhanurMathy" target="_blank" rel="noreferrer" className="btn btn-primary mt-3">View on GitHub</a>
                </div>
              </div>
            </motion.div>
            {/* Online Voting System */}
            <motion.div whileHover={{ scale: 1.05 }} className="col-md-6">
              <div className="card border-success shadow h-100">
                <div className="card-body">
                  <h3 className="card-title fw-semibold">Online Voting System</h3>
                  <p className="card-text mt-2 text-secondary">
                    Developed a secure and user-friendly online voting platform with admin and voter modules to ensure transparency and accessibility.
                  </p>
                  <p className="mt-2 text-muted">
                    <strong>Tech Stack:</strong> HTML, CSS, JavaScript, PHP, MySQL
                  </p>
                  <a href="https://github.com/DhanurMathy" target="_blank" rel="noreferrer" className="btn btn-success mt-3">View on GitHub</a>
                </div>
              </div>
            </motion.div>
            {/* Grocery Web App */}
            <motion.div whileHover={{ scale: 1.05 }} className="col-md-6">
              <div className="card border-warning shadow h-100">
                <div className="card-body">
                  <h3 className="card-title fw-semibold">Grocery Web App</h3>
                  <p className="card-text mt-2 text-secondary">
                    Designed and implemented an e-commerce grocery platform with shopping cart, product listings, and checkout functionality.
                  </p>
                  <p className="mt-2 text-muted">
                    <strong>Tech Stack:</strong> React, Node.js, MongoDB, Express
                  </p>
                  <a href="https://github.com/DhanurMathy" target="_blank" rel="noreferrer" className="btn btn-warning mt-3 text-white">View on GitHub</a>
                </div>
              </div>
            </motion.div>
            {/* IAS Academy Website */}
            <motion.div whileHover={{ scale: 1.05 }} className="col-md-6">
              <div className="card border-purple shadow h-100" style={{ borderLeft: "4px solid #9333ea" }}>
                <div className="card-body">
                  <h3 className="card-title fw-semibold">IAS Academy Website</h3>
                  <p className="card-text mt-2 text-secondary">
                    Built a responsive web platform for IAS Academy to manage courses, faculty, and student interaction.
                  </p>
                  <p className="mt-2 text-muted">
                    <strong>Tech Stack:</strong> HTML, CSS, JavaScript, PHP
                  </p>
                  <a href="https://github.com/DhanurMathy" target="_blank" rel="noreferrer" className="btn btn-secondary mt-3">View on GitHub</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="bg-white bg-opacity-90 rounded-4 p-5 shadow-lg mx-auto" style={{ maxWidth: "900px" }}>
            <h2 className="display-6 fw-bold mb-5 text-primary text-center">Experience</h2>
            <div className="row gy-4">
              <motion.div whileHover={{ scale: 1.02 }} className="col-12">
                <div className="p-4 border rounded-3 shadow bg-light">
                  <h3 className="fw-semibold">Virtual Tech Services | Full Stack Intern</h3>
                  <p className="text-muted small">07/2024 - 08/2024 | Chennai</p>
                  <p className="mt-2">
                    Improved UI/UX and optimized backend systems. Built features for an Online Voting System (HTML, CSS, JS, PHP).
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="col-12">
                <div className="p-4 border rounded-3 shadow bg-light">
                  <h3 className="fw-semibold">8Queens Software Technology | Full Stack Intern</h3>
                  <p className="text-muted small">07/2023 | Chennai</p>
                  <p className="mt-2">
                    Developed and tested web apps using HTML, CSS, JS. Assisted backend tasks with SQLite DBMS.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="position-relative py-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(255,255,255,0.7)" }}></div>
        <div className="position-relative z-1 container">
          <h2 className="display-6 fw-bold mb-5 text-primary text-center">Education</h2>
          <div className="row gy-4 justify-content-center">
            <div className="col-md-6">
              <div className="bg-white bg-opacity-90 p-4 rounded-3 shadow border-start border-primary border-4">
                <h3 className="fw-semibold">B.Tech Information Technology</h3>
                <p className="text-secondary">Jaya Engineering College | CGPA: 9.1 (7th Sem)</p>
                <p className="text-muted small">2021 - 2025</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white bg-opacity-90 p-4 rounded-3 shadow border-start border-success border-4">
                <h3 className="fw-semibold">Higher Secondary</h3>
                <p className="text-secondary">Peace On Green Earth Public School | 2021</p>
                <p className="text-muted small">2019 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="bg-white bg-opacity-90 rounded-4 p-5 shadow-lg mx-auto" style={{ maxWidth: "900px" }}>
            <h2 className="display-6 fw-bold mb-5 text-primary text-center">Skills</h2>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              {[
                "Java",
                "Python",
                "React",
                "HTML/CSS/JS",
                "Streamlit",
                "PHP",
                "SQL",
                "MongoDB",
                "Git/GitHub",
                "J2EE",
                "MySQL",
                "Flask / FastAPI",
              ].map((skill) => (
                <motion.div whileHover={{ scale: 1.1 }} key={skill} className="col">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-3 text-center fw-medium shadow">{skill}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-5 text-white"
        style={{ background: "linear-gradient(90deg, #2563eb, #4f46e5)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            {/* Left: Info */}
            <div className="col-lg-5 mb-4">
              <h2 className="display-6 fw-bold mb-4 text-center text-lg-start">
                Let’s Connect
              </h2>
              <p className="mb-4 text-center text-lg-start">
                I’d love to hear about your projects, ideas, or opportunities.
                Reach me directly or use the form.
              </p>

              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-envelope-fill me-3 fs-5"></i>
                  <span>dhanurmathy2322@gmail.com</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-telephone-fill me-3 fs-5"></i>
                  <span>+91 7904029364</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill me-3 fs-5"></i>
                  <span>Chennai, TN</span>
                </li>
              </ul>

              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/dhanur-mathy"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light text-primary fw-semibold me-2 mb-2"
                >
                  <i className="bi bi-linkedin me-2"></i> LinkedIn
                </a>
                <a
                  href="https://github.com/DhanurMathy"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light text-dark fw-semibold me-2 mb-2"
                >
                  <i className="bi bi-github me-2"></i> GitHub
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="btn btn-success text-white fw-semibold mb-2"
                >
                  <i className="bi bi-download me-2"></i> Resume
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="col-lg-6">
              <div className="card shadow border-0">
                <div className="card-body p-4 p-md-5">
                  <h4 className="fw-bold mb-4 text-primary">Send a Message</h4>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control form-control-lg"
                        rows="5"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(90deg, #2563eb, #4f46e5, #9333ea)",
        }}
      >
        <div className="container">
          <h5 className="fw-bold mb-3">Let’s stay connected 🚀</h5>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a
              href="https://www.linkedin.com/in/dhanur-mathy"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-4"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/DhanurMathy"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-4"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="mailto:dhanurmathy2322@gmail.com"
              className="text-white fs-4"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
          <p className="mb-0 small">
            © {new Date().getFullYear()} Dhanurmathy P 
          </p>
        </div>
      </footer>
    </div>
  );
}
