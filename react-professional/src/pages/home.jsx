import { Link } from "react-router";
import "./home.css";

const equipmentTypes = [
  "Land preparation",
  "Sowing and planting",
  "Crop care",
  "Harvesting",
  "Transport",
];

export default function Home() {
  return (
    <main className="home-page">
      <header className="home-header">
        <Link className="home-wordmark" to="/" aria-label="Kissan Markaz home">
          Kissan <span>Markaz</span>
        </Link>

        <nav className="home-nav" aria-label="Main navigation">
          <a href="#equipment">Equipment</a>
          <a href="#for-farmers">For farmers</a>
          <a href="#for-owners">For owners</a>
        </nav>

        <div className="home-account-links">
          <Link className="home-login-link" to="/login">
            Log in
          </Link>
          <Link className="home-signup-link" to="/signup">
            Create account
          </Link>
        </div>
      </header>

      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero-copy">
          <h1 id="home-heading">
            Good farming needs the <span>right machine.</span>
          </h1>
          <p>
            Find agricultural equipment to rent, or connect with farmers looking
            for the machinery you have.
          </p>
          <div className="home-hero-actions">
            <a className="home-primary-button" href="#equipment">
              Explore equipment
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
              </svg>
            </a>
            <Link className="home-secondary-link" to="/signup">
              Join Kissan Markaz
            </Link>
          </div>
          <p className="home-hero-note">
            For farmers, equipment owners, and operators.
          </p>
        </div>
        <div className="home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85"
            alt="Green farmland stretching toward the horizon"
          />
          <p className="home-image-caption">
            <span aria-hidden="true" />
            Made for the work of the land
          </p>
        </div>
      </section>

      <section
        className="home-equipment-section"
        id="equipment"
        aria-labelledby="equipment-heading"
      >
        <div className="home-section-heading">
          <div>
            <h2 id="equipment-heading">What does your field need?</h2>
            <p>
              Start with the work at hand. Kissan Markaz brings farmers and
              equipment providers together.
            </p>
          </div>
          <Link className="home-text-link" to="/signup">
            Get started
            <svg aria-hidden="true" viewBox="0 0 20 20">
              <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
            </svg>
          </Link>
        </div>

        <ul className="home-equipment-list">
          {equipmentTypes.map((type) => (
            <li key={type}>
              <span>{type}</span>
            </li>
          ))}
        </ul>
        <p className="home-inventory-note">
          Equipment types shown as a starting point. Listings depend on
          participating providers.
        </p>
      </section>

      <section className="home-join-section" id="join">
        <div className="home-join-intro">
          <h2>A marketplace for both sides of the field.</h2>
          <p>
            Whether you need a machine for your farm or have equipment to offer,
            there’s a place for you at Kissan Markaz.
          </p>
        </div>
        <div className="home-join-options">
          <article id="for-farmers">
            <h3>Looking for equipment?</h3>
            <p>
              Create a farmer account to get started finding machinery for
              your work.
            </p>
            <Link to="/signup?role=farmer">
              Join as a farmer
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
              </svg>
            </Link>
          </article>
          <article id="for-owners">
            <h3>Have equipment to offer?</h3>
            <p>
              Sign up as an owner or operator and connect with farmers seeking
              machinery.
            </p>
            <Link to="/signup?role=owner">
              Join as a provider
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
              </svg>
            </Link>
          </article>
        </div>
      </section>

      <footer className="home-footer">
        <Link className="home-wordmark" to="/">
          Kissan <span>Markaz</span>
        </Link>
        <p>Connecting farmers with the equipment they need.</p>
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Create account</Link>
        </div>
      </footer>
    </main>
  );
}
