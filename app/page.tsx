import {
  BarChart3,
  CalendarDays,
  ChevronRight,
  LockKeyhole,
  Monitor,
  QrCode,
  Radio,
  ShieldCheck,
  Smartphone,
  WalletCards,
  Wifi
} from 'lucide-react';

const navItems = ['Home', 'How It Works', 'Features', 'Use Cases', 'POS & Wristbands', 'Dashboard', 'Pricing'];

const features = [
  { icon: Radio, title: 'Cashless Wristbands', text: 'Fast tap payments with NFC wristbands.' },
  { icon: QrCode, title: 'QR Wallet Payments', text: 'QR codes act as digital wallets for quick scan-to-pay.' },
  { icon: Smartphone, title: 'POS Terminal', text: 'Intuitive POS for fast transactions and happier guests.' },
  { icon: Monitor, title: 'Real-Time Monitoring', text: 'Monitor every terminal and station in real time.' },
  { icon: WalletCards, title: 'Wallet Management', text: 'Load funds, check balances, and view transaction history.' },
  { icon: ShieldCheck, title: 'Admin Controls', text: 'Manage users, roles, terminals, stations, and permissions.' },
  { icon: BarChart3, title: 'Reporting Dashboard', text: 'Detailed reports on sales, stations, products, and performance.' },
  { icon: LockKeyhole, title: 'Secure Access', text: 'Role-based access with full activity tracking.' }
];

const useCases = [
  { title: 'Festivals & Events', className: 'festival' },
  { title: 'Schools', className: 'school' },
  { title: 'Churches & Retreats', className: 'church' },
  { title: 'Stadiums & Venues', className: 'stadium' },
  { title: 'Corporate Events', className: 'corporate' },
  { title: 'Municipal Events', className: 'city' }
];

export default function Home() {
  return (
    <main id="top">
      <nav className="topNav">
        <a className="logo" href="#top" aria-label="TapOne home">
          <span className="logoIcon"><Wifi size={28} /></span>
          <span><strong>TapOne</strong><small>Tap. Pay. Enjoy.</small></span>
        </a>

        <div className="navMenu">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}`}>
              {item}
            </a>
          ))}
        </div>

        <a className="demoBtn" href="mailto:demo@txtapone.com">Request a Demo</a>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <div className="eyebrow"><span /> Cashless payments made simple</div>
          <h1>The smart way to run <em>cashless</em> events.</h1>
          <p>
            TapOne helps organizations manage wristband payments, QR wallets, concession sales,
            and real-time terminal monitoring from one secure platform.
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href="mailto:demo@txtapone.com">Request a Demo <ChevronRight size={18} /></a>
            <a className="outlineBtn" href="#how-it-works">See How It Works <span>▶</span></a>
          </div>

          <div className="quickCards">
            <div><Radio size={24} /> Wristband<br />Payments</div>
            <div><QrCode size={24} /> QR<br />Wallets</div>
            <div><BarChart3 size={24} /> Real-Time<br />Sales</div>
            <div><Monitor size={24} /> Admin<br />Dashboard</div>
            <div><Smartphone size={24} /> POS<br />Terminals</div>
          </div>
        </div>

        <div className="heroImageWrap" aria-label="TapOne product mockup">
          <img
            src="/images/tapone-devices.png"
            alt="TapOne wristband wallet dashboard and POS terminal mockup"
            className="heroImage"
          />
        </div>
      </section>

      <section className="how" id="how-it-works">
        <div className="sectionTitle centered">
          <h2>How <span>TapOne</span> Works</h2>
          <p>Simple for guests. Powerful for organizers.</p>
        </div>

        <div className="stepsRow">
          <div className="stepIcon"><WalletCards size={28} /></div>
          <article><b>1. Load Funds</b><p>Guests, students, or attendees receive a wristband or QR wallet linked to their account balance.</p></article>
          <div className="arrow">→</div>
          <div className="stepIcon"><Radio size={28} /></div>
          <article><b>2. Tap or Scan</b><p>At the concession stand, the cashier scans the QR code or taps the wristband to complete the purchase.</p></article>
          <div className="arrow">→</div>
          <div className="stepIcon"><BarChart3 size={28} /></div>
          <article><b>3. Monitor Everything</b><p>Admins see transactions, terminal activity, wallet balances, sales, and station performance in real time.</p></article>
          <div className="secureCard"><LockKeyhole size={48} /><div><b>Secure. Reliable. Trusted.</b><p>Built with security and control at the core.</p></div></div>
        </div>
      </section>

      <section className="featuresDashboard" id="features">
        <div className="featureBlock">
          <div className="sectionTitle"><h2>Powerful <span>Features</span></h2><p>Everything you need to run smooth, cashless events.</p></div>
          <div className="featureGrid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="featureCard" key={feature.title}>
                  <Icon size={30} />
                  <div><b>{feature.title}</b><p>{feature.text}</p></div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="dashboardBlock" id="dashboard">
          <div className="sectionTitle"><h2>Real-Time <span>Dashboard</span></h2><p>Know what is happening at every station.</p></div>
          <div className="whiteDashboard">
            <aside><b>TapOne</b>{['Dashboard', 'Transactions', 'Terminals', 'Stations', 'Users', 'Reports', 'Products', 'Settings'].map(x => <i key={x}>{x}</i>)}</aside>
            <section>
              <div className="whiteKpis">
                <div><small>Total Sales</small><b>$12,456.75</b></div>
                <div><small>Transactions</small><b>1,258</b></div>
                <div><small>Active Terminals</small><b>18</b></div>
                <div><small>Wallets Loaded</small><b>$8,430.00</b></div>
              </div>
              <div className="statusPanel"><b>Terminal Status</b><div><span className="ok">9<br /><small>Active</small></span><span className="idle">6<br /><small>Idle</small></span><span className="warn">2<br /><small>Warning</small></span><span className="off">1<br /><small>Offline</small></span></div></div>
              <div className="salesPanel"><b>Sales Over Time</b><div className="miniLine" /></div>
            </section>
          </div>
        </div>
      </section>

      <section className="useCases" id="use-cases">
        <div className="sectionTitle centered"><h2>Built for <span>Every Environment</span></h2></div>
        <div className="useCaseGrid">
          {useCases.map(x => <article className={x.className} key={x.title}><span>{x.title}</span></article>)}
        </div>
      </section>

      <section className="bottomCta">
        <div className="ctaIcon"><CalendarDays size={30} /></div>
        <div><h2>Ready to modernize your event payments?</h2><p>Launch a faster, cleaner, cashless payment experience with TapOne.</p></div>
        <a className="primaryBtn" href="mailto:demo@txtapone.com">Request a Demo</a>
        <a className="outlineBtn" href="mailto:demo@txtapone.com">Contact Us</a>
      </section>
    </main>
  );
}
