import {
  Activity,
  BadgeCheck,
  BarChart3,
  CreditCard,
  Gauge,
  LockKeyhole,
  QrCode,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Ticket,
  WalletCards,
  Zap
} from 'lucide-react';

const features = [
  { icon: WalletCards, title: 'Wristband Wallets', text: 'Issue NFC wristbands linked to secure guest balances for fast tap-to-pay purchases.' },
  { icon: QrCode, title: 'QR Payments', text: 'Use QR wallets as a flexible alternative for attendees, students, vendors, or guests.' },
  { icon: CreditCard, title: 'Fast POS Checkout', text: 'A clean cashier screen built for concessions, food stands, merchandise, and event sales.' },
  { icon: RadioTower, title: 'Live Terminal Monitoring', text: 'See which stations are active, idle, offline, or require attention in real time.' },
  { icon: BarChart3, title: 'Sales Dashboard', text: 'Track transactions, average sale, top stations, wallet loads, refunds, and activity.' },
  { icon: ShieldCheck, title: 'Admin Controls', text: 'Role-based access, user management, audit-friendly records, and secure operations.' }
];

const useCases = ['Festivals', 'Schools', 'Church retreats', 'City events', 'Venues', 'Corporate events'];

const statuses = [
  { label: 'North Concession', terminal: 'TERM-01', status: 'Active', value: '$3,840', tx: '186' },
  { label: 'Food Court', terminal: 'TERM-04', status: 'Idle', value: '$1,290', tx: '74' },
  { label: 'Merch Stand', terminal: 'TERM-07', status: 'Warning', value: '$940', tx: '48' },
  { label: 'East Gate', terminal: 'TERM-09', status: 'Offline', value: '$0', tx: '0' }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="TapOne home">
          <span className="brandMark">T1</span>
          <span>TapOne</span>
        </a>
        <div className="navLinks">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#monitor">Dashboard</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="mailto:demo@txtapone.com">Request demo</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="heroContent">
          <div className="eyebrow"><Zap size={16} /> Cashless payments for modern events</div>
          <h1>The smart way to run cashless events.</h1>
          <p className="heroText">
            TapOne helps organizations manage wristband payments, QR wallets, POS sales, and real-time terminal monitoring from one secure platform.
          </p>
          <div className="heroActions">
            <a className="button primary" href="mailto:demo@txtapone.com">Request a Demo</a>
            <a className="button secondary" href="#how">See how it works</a>
          </div>
          <div className="trustRow">
            <span><BadgeCheck size={18} /> Fast lines</span>
            <span><BadgeCheck size={18} /> Less cash handling</span>
            <span><BadgeCheck size={18} /> Real-time control</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="TapOne dashboard mockup">
          <div className="phoneCard floating">
            <div className="phoneTop" />
            <QrCode size={88} />
            <p>Guest Wallet</p>
            <strong>$48.75</strong>
          </div>
          <div className="dashboardCard">
            <div className="dashboardHeader">
              <div>
                <span className="smallLabel">Live Sales</span>
                <h3>$12,480.50</h3>
              </div>
              <span className="livePill"><Activity size={14} /> Live</span>
            </div>
            <div className="metricGrid">
              <div><span>Transactions</span><strong>842</strong></div>
              <div><span>Avg Sale</span><strong>$14.82</strong></div>
              <div><span>Active Terms</span><strong>18</strong></div>
              <div><span>Wallet Loads</span><strong>$25.2k</strong></div>
            </div>
            <div className="chartMock">
              <span style={{height: '35%'}} />
              <span style={{height: '58%'}} />
              <span style={{height: '44%'}} />
              <span style={{height: '76%'}} />
              <span style={{height: '68%'}} />
              <span style={{height: '92%'}} />
              <span style={{height: '72%'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="problem">
        <div>
          <span className="sectionTag">The problem</span>
          <h2>Cash slows everything down.</h2>
        </div>
        <p>
          Long lines, manual reconciliation, lost tickets, unclear balances, and no real-time visibility make event operations harder than they need to be. TapOne turns payments into a fast digital experience.
        </p>
      </section>

      <section className="how" id="how">
        <span className="sectionTag">How it works</span>
        <h2>Simple for guests. Powerful for organizers.</h2>
        <div className="steps">
          <div className="step"><span>01</span><h3>Load Funds</h3><p>Guests receive a wristband or QR wallet linked to a secure balance.</p></div>
          <div className="step"><span>02</span><h3>Tap or Scan</h3><p>Cashiers scan the QR code or tap the wristband to complete the sale.</p></div>
          <div className="step"><span>03</span><h3>Monitor Live</h3><p>Admins see stations, terminals, sales, balances, and activity in real time.</p></div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="sectionHeader">
          <span className="sectionTag">Platform</span>
          <h2>Everything needed to run a cashless event.</h2>
        </div>
        <div className="featureGrid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="featureCard" key={feature.title}>
                <div className="iconBubble"><Icon size={24} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="posSection">
        <div className="posMock">
          <div className="posHeader"><Smartphone size={20} /> TapOne POS</div>
          <div className="productGrid">
            {['Tacos', 'Burger', 'Water', 'Soda', 'Nachos', 'Shirt'].map((item, idx) => <button key={item}>{item}<span>${[8,11,3,4,7,25][idx]}</span></button>)}
          </div>
          <div className="cartMock">
            <div><span>2 × Tacos</span><strong>$16.00</strong></div>
            <div><span>1 × Water</span><strong>$3.00</strong></div>
            <div className="total"><span>Total</span><strong>$19.00</strong></div>
            <button className="payButton">Tap wristband or scan QR</button>
          </div>
        </div>
        <div>
          <span className="sectionTag">POS checkout</span>
          <h2>A point of sale built for speed.</h2>
          <p>Large product buttons, fast cart handling, balance validation, cashier sessions, and clear confirmations help staff move lines quickly with less training.</p>
        </div>
      </section>

      <section className="monitor" id="monitor">
        <div className="sectionHeader centered">
          <span className="sectionTag">Operations command center</span>
          <h2>Monitor every stand and terminal live.</h2>
          <p>Know what is online, what is selling, and what needs attention before it becomes a problem.</p>
        </div>
        <div className="terminalGrid">
          {statuses.map((item) => (
            <article className={`terminalCard ${item.status.toLowerCase()}`} key={item.terminal}>
              <div className="terminalTop">
                <Gauge size={21} />
                <span>{item.status}</span>
              </div>
              <h3>{item.label}</h3>
              <p>{item.terminal}</p>
              <div className="terminalStats"><strong>{item.value}</strong><span>{item.tx} tx</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="useCases">
        <span className="sectionTag">Use cases</span>
        <h2>Made for high-volume event environments.</h2>
        <div className="chips">
          {useCases.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="security">
        <div className="securityIcon"><LockKeyhole size={34} /></div>
        <h2>Built with control and accountability.</h2>
        <p>Role-based access, user authentication, transaction history, wallet validation, locked account support, and audit-friendly records.</p>
      </section>

      <section className="cta" id="contact">
        <Ticket size={38} />
        <h2>Ready to modernize your event payments?</h2>
        <p>Launch a faster, cleaner, cashless payment experience with TapOne.</p>
        <a className="button primary" href="mailto:demo@txtapone.com">Request a Demo</a>
      </section>

      <footer>
        <div className="brand"><span className="brandMark">T1</span><span>TapOne</span></div>
        <p>Tap. Pay. Enjoy.</p>
      </footer>
    </main>
  );
}
