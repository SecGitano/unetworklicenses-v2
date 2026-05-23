export default function Home() {
  return (
    <main className="landing-shell">
      <header className="landing-nav">
        <div className="brand">
          <div className="brand-mark">U</div>
          <div>
            <strong>UNETOPS</strong>
            <span>Infrastructure Operations</span>
          </div>
        </div>

        <nav>
          <a href="#uno">UNO</a>
          <a href="#ulo">ULO</a>
          <a href="#whitelabel">White-label</a>
          <a href="#roadmap">Roadmap</a>
          <a href="mailto:info@unetops.io">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">DECENTRALIZED INFRASTRUCTURE OPERATIONS</p>

          <h1>
            Lease, manage and monetize network licenses through branded
            operator portals.
          </h1>

          <p className="hero-text">
            UNETOPS connects UNO operators and ULO license holders with
            white-label storefronts, crypto payments, rewards analytics and
            future marketplace tools.
          </p>

          <div className="hero-actions">
            <a href="mailto:info@unetops.io" className="primary-link">
              Join Early Access
            </a>

            <a href="#whitelabel" className="secondary-link">
              Explore Platform
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/unetops-placeholder.png"
            alt="UNETOPS platform preview"
          />
        </div>
      </section>

      <section className="feature-grid">
        <div className="feature-card" id="uno">
          <span>01</span>
          <h2>UNO Operator Portal</h2>
          <p>
            Node operators can create offers, manage licenses, track rewards,
            configure payout wallets and launch custom branded storefronts.
          </p>
        </div>

        <div className="feature-card" id="ulo">
          <span>02</span>
          <h2>ULO Holder Portal</h2>
          <p>
            License holders can log in with wallet or OTP, lease licenses,
            monitor rewards, view uptime and communicate with operators.
          </p>
        </div>

        <div className="feature-card" id="whitelabel">
          <span>03</span>
          <h2>White-label Storefronts</h2>
          <p>
            Every UNO can share a custom referral link with their logo, colors,
            branding and available license offers.
          </p>
        </div>

        <div className="feature-card">
          <span>04</span>
          <h2>World Mobile Chain Payments</h2>
          <p>
            Payment invoices will be verified on-chain before lease pickup,
            activation and payout records are logged in the database.
          </p>
        </div>
      </section>

      <section className="offer-section">
        <div>
          <p className="eyebrow">AVAILABLE LICENSE FLOWS</p>
          <h2>Built for leasing today and marketplace sales tomorrow.</h2>
        </div>

        <div className="offer-grid">
          <div className="offer-card">
            <h3>Lease License</h3>
            <strong>25 / 75%</strong>
            <p>Reward split between operator and holder.</p>
          </div>

          <div className="offer-card">
            <h3>Buy 1 License</h3>
            <strong>1000 $MNTx / $WMTx</strong>
            <p>Single license purchase flow for future marketplace expansion.</p>
          </div>

          <div className="offer-card">
            <h3>Buy 10 + 1 Free</h3>
            <strong>Volume Offer</strong>
            <p>Operator-controlled promotional bundle support.</p>
          </div>
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <p className="eyebrow">ROADMAP</p>

        <div className="timeline">
          <div>
            <span>Phase 1</span>
            <h3>UNO / ULO Leasing</h3>
            <p>Wallet auth, OTP login, storefronts, offers and WMC payments.</p>
          </div>

          <div>
            <span>Phase 2</span>
            <h3>Marketplace</h3>
            <p>ULO resale, node sales, ownership transfers and settlement.</p>
          </div>

          <div>
            <span>Phase 3</span>
            <h3>Automation</h3>
            <p>AI analytics, telemetry intelligence and multi-chain support.</p>
          </div>
        </div>
      </section>
    </main>
  );
}