export default function Home() {
  return (
    <main className="unet-app">
      {/* SIDEBAR */}

      <aside className="unet-sidebar">
        <div className="unet-brand">
          <div className="unet-logo">U</div>

          <div>
            <h2>Unity Network</h2>
            <p>Connected License Ops</p>
          </div>
        </div>

        <nav className="unet-nav">
          <button className="active">Overview</button>
          <button>Wallet</button>
          <button>Licenses</button>
          <button>Nodes</button>
          <button>Marketplace</button>
          <button>Rewards</button>
          <button>Transactions</button>
          <button>Settings</button>
        </nav>

        <div className="sidebar-card">
          <div className="orb"></div>

          <h3>UNITY NODE</h3>

          <p>
            EDGE INFRASTRUCTURE
            <br />
            POWERED BY UNETWORK
          </p>
        </div>
      </aside>

      {/* MAIN */}

      <section className="unet-main">
        {/* TOPBAR */}

        <header className="topbar">
          <input
            className="search"
            placeholder="Search by license id, node id, wallet, device..."
          />

          <div className="top-actions">
            <button className="ghost-btn">
              Sync Licenses
            </button>

            <button className="primary-btn">
              Connect Wallet
            </button>
          </div>
        </header>

        {/* HERO */}

        <section className="hero">
          <span className="hero-kicker">
            UNITY NETWORK • CONNECTED LICENSE MANAGEMENT
          </span>

          <h1>
            The infrastructure cockpit is now rebuilt
            for licenses, nodes, rewards and marketplace
            operations.
          </h1>

          <p>
            Clean Next.js foundation optimized for
            Hostinger deployment stability and future
            UnityEdge integrations.
          </p>

          <div className="hero-tags">
            <button className="tag active">
              All
            </button>

            <button className="tag">
              Online
            </button>

            <button className="tag">
              Offline
            </button>

            <button className="tag">
              Rewards
            </button>

            <button className="tag">
              Marketplace
            </button>
          </div>
        </section>

        {/* STATS */}

        <section className="stats-grid">
          <div className="stat-card">
            <span>Total Licenses</span>

            <h2>1199</h2>

            <p>Connected infrastructure licenses</p>
          </div>

          <div className="stat-card">
            <span>Loaded Online</span>

            <h2>875</h2>

            <p>Operational infrastructure nodes</p>
          </div>

          <div className="stat-card">
            <span>Rewards</span>

            <h2>45,789</h2>

            <p>Pending reward distribution</p>
          </div>

          <div className="stat-card">
            <span>Network Status</span>

            <h2>99.98%</h2>

            <p>World Mobile operational uptime</p>
          </div>
        </section>

        {/* LARGE GRID */}

        <section className="dashboard-grid">
          <div className="panel large">
            <h3>Rewards Overview</h3>

            <div className="fake-chart"></div>
          </div>

          <div className="panel">
            <h3>Activity Feed</h3>

            <ul className="activity-list">
              <li>New node activated</li>
              <li>Rewards distributed</li>
              <li>Marketplace sync completed</li>
              <li>Infrastructure update deployed</li>
            </ul>
          </div>

          <div className="panel">
            <h3>Connected Regions</h3>

            <div className="region-grid">
              <div>Europe</div>
              <div>North America</div>
              <div>Asia</div>
              <div>Africa</div>
            </div>
          </div>

          <div className="panel">
            <h3>Recent Messaging</h3>

            <ul className="activity-list">
              <li>Maintenance scheduled</li>
              <li>Validator update completed</li>
              <li>License reassignment executed</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}