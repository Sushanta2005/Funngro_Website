import React, { useEffect, useState } from "react";
import "./App.css";

const companyFeatures = [
  {
    icon: "🚀",
    title: "Discover Young Talent",
    description:
      "Connect with motivated teenagers who bring fresh ideas, creativity, and enthusiasm to your business.",
  },
  {
    icon: "💡",
    title: "Get Projects Done",
    description:
      "Share suitable micro-projects and find young people interested in learning through real-world experience.",
  },
  {
    icon: "📈",
    title: "Build the Future",
    description:
      "Support young talent while exploring new perspectives, innovative ideas, and digital skills.",
  },
];

const teenFeatures = [
  {
    icon: "🎯",
    title: "Real-World Projects",
    description:
      "Explore project opportunities that help you apply classroom knowledge to practical challenges.",
  },
  {
    icon: "💻",
    title: "Learn New Skills",
    description:
      "Discover areas like design, coding, content creation, marketing, and business.",
  },
  {
    icon: "🌟",
    title: "Build Your Portfolio",
    description:
      "Showcase your work, develop confidence, and prepare for your future career.",
  },
];

const projects = [
  {
    icon: "🎨",
    category: "DESIGN",
    title: "Social Media Design",
    description:
      "Create engaging social media graphics and explore visual storytelling.",
  },
  {
    icon: "💻",
    category: "TECHNOLOGY",
    title: "Website Development",
    description:
      "Practice your coding skills by building attractive and responsive websites.",
  },
  {
    icon: "✍️",
    category: "CONTENT",
    title: "Content Creation",
    description:
      "Write creative content and develop your communication skills.",
  },
];

function App() {
  const [page, setPage] = useState("company");
  const [formStatus, setFormStatus] = useState("");

  const isCompany = page === "company";
  const features = isCompany ? companyFeatures : teenFeatures;

  useEffect(() => {
    document.title = isCompany
      ? "Funngro for Companies | Discover Young Talent"
      : "Funngro for Teens | Learn, Create and Grow";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content = isCompany
      ? "Explore a Funngro-inspired platform concept for companies to discover young talent, share projects, and support skill development."
      : "Explore a Funngro-inspired platform concept for teens to discover projects, develop digital skills, and build a portfolio.";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isCompany]);

  const changePage = (nextPage) => {
    setPage(nextPage);
    setFormStatus("");
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setFormStatus(
      "Thanks for your interest! This demo form is ready to be connected to a backend."
    );
    event.currentTarget.reset();
  };

  return (
    <>
      {/* Navigation */}
      <header className="navbar">
        <button
          className="logo"
          onClick={() => changePage("company")}
          aria-label="Funngro home"
        >
          funngro<span>.</span>
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          <button
            className={isCompany ? "active" : ""}
            onClick={() => changePage("company")}
            aria-current={isCompany ? "page" : undefined}
          >
            Company
          </button>

          <button
            className={!isCompany ? "active" : ""}
            onClick={() => changePage("teen")}
            aria-current={!isCompany ? "page" : undefined}
          >
            Teen
          </button>

          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Us ↗
          </button>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              {isCompany
                ? "✨ A NEW WAY TO FIND YOUNG TALENT"
                : "🌈 YOUR SKILLS. YOUR FUTURE."}
            </span>

            {isCompany ? (
              <h1>
                Great ideas start with <span>young minds.</span>
              </h1>
            ) : (
              <h1>
                Learn skills. Work on projects. <span>Dream bigger.</span>
              </h1>
            )}

            <p>
              {isCompany
                ? "Discover fresh perspectives, explore creative talent, and connect with the next generation of innovators through meaningful projects."
                : "Turn your curiosity into creativity. Explore real-world project ideas, learn in-demand skills, and start building your professional portfolio."}
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document
                    .getElementById(isCompany ? "features" : "projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {isCompany ? "Explore Opportunities" : "Explore Projects"} →
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => changePage(isCompany ? "teen" : "company")}
              >
                {isCompany ? "I'm a Teen" : "For Companies"} ↗
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-image"
              src={
                isCompany
                  ? "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
                  : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
              }
              alt={
                isCompany
                  ? "A team collaborating on creative ideas"
                  : "Students learning and working together"
              }
            />

            <div className="floating-card one">
              <div className="floating-icon">
                {isCompany ? "🤝" : "🎯"}
              </div>
              <div>
                <strong>{isCompany ? "Fresh Perspectives" : "Dream. Learn. Grow."}</strong>
                <small>
                  {isCompany ? "Ideas meet opportunity" : "Your journey starts here"}
                </small>
              </div>
            </div>

            <div className="floating-card two">
              <div className="floating-icon">
                {isCompany ? "💡" : "🚀"}
              </div>
              <div>
                <strong>{isCompany ? "Creative Thinking" : "Skills in Action"}</strong>
                <small>
                  {isCompany ? "Discover new possibilities" : "Build your future"}
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats" aria-label="Platform highlights">
          <div className="stat">
            <h3>01</h3>
            <p>{isCompany ? "Discover Talent" : "Discover Skills"}</p>
          </div>

          <div className="stat">
            <h3>02</h3>
            <p>{isCompany ? "Share Projects" : "Explore Projects"}</p>
          </div>

          <div className="stat">
            <h3>03</h3>
            <p>{isCompany ? "Create Impact" : "Grow Your Portfolio"}</p>
          </div>
        </section>

        {/* Features */}
        <section className="section" id="features">
          <div className="section-heading">
            <span className="eyebrow">
              {isCompany ? "FOR BUSINESSES" : "FOR YOUNG CREATORS"}
            </span>

            <h2>
              {isCompany ? (
                <>
                  Bring fresh ideas into <span>your business.</span>
                </>
              ) : (
                <>
                  Your next big opportunity <span>starts here.</span>
                </>
              )}
            </h2>

            <p>
              {isCompany
                ? "Explore ways to collaborate with young talent and give new ideas the opportunity to grow."
                : "Discover new interests, practice your skills, and take small steps toward your ambitions."}
            </p>
          </div>

          <div className="cards">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <div className="card-icon" aria-hidden="true">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Teen project ideas */}
        {!isCompany && (
          <section className="section" id="projects">
            <div className="section-heading">
              <span className="eyebrow">PROJECT IDEAS</span>
              <h2>
                Find something <span>you love.</span>
              </h2>
              <p>
                Get inspired by these example project categories and explore
                the skills you can develop.
              </p>
            </div>

            <div className="cards">
              {projects.map((project) => (
                <article className="card" key={project.title}>
                  <div className="card-icon" aria-hidden="true">
                    {project.icon}
                  </div>

                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Call to action */}
        <section className="promo">
          <h2>
            {isCompany
              ? "Ready to discover fresh talent?"
              : "Your potential deserves a chance."}
          </h2>

          <p>
            {isCompany
              ? "Explore new possibilities and create opportunities for young minds to contribute and grow."
              : "Start exploring your interests, strengthen your skills, and take the next step in your learning journey."}
          </p>

          <button
            className="btn"
            onClick={() => changePage(isCompany ? "teen" : "company")}
          >
            {isCompany ? "Discover the Teen Experience" : "Explore the Company Page"} →
          </button>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <div>
            <span className="eyebrow">LET'S CONNECT</span>

            <h2>
              Have an idea? <br />
              <span>Let's talk.</span>
            </h2>

            <p>
              {isCompany
                ? "Interested in exploring this platform concept for your business? Send a message using the form."
                : "Have questions about projects or learning opportunities? Leave a message using the form."}
            </p>
          </div>

          <form onSubmit={handleContactSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              aria-label="Your full name"
              autoComplete="name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              aria-label="Your email address"
              autoComplete="email"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us what you have in mind..."
              aria-label="Your message"
              required
            />

            <button className="btn btn-primary" type="submit">
              Send Message →
            </button>

            {formStatus && <p role="status">{formStatus}</p>}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <button
            className="logo"
            onClick={() => changePage("company")}
          >
            funngro<span>.</span>
          </button>

          <p>
            Inspiring young minds. <br />
            Connecting ideas with opportunities.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="#features"
            onClick={() => setPage("company")}
          >
            Company
          </a>

          <a
            href="#features"
            onClick={() => setPage("teen")}
          >
            Teen
          </a>

          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Funngro-inspired demo. Built for learning.
        </p>
      </footer>
    </>
  );
}

export default App;
