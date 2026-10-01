import { WalletCards } from 'lucide-react';
import styles from '../styles/App.module.css';
import ReferEarnBanner from '../components/ReferEarnBanner/ReferEarnBanner.jsx';
import SwapCenterBanner from '../components/SwapCenterBanner/SwapCenterBanner.jsx';
import BonusVEsBanner from '../components/BonusVEsBanner/BonusVEsBanner.jsx';
import CaptchaTasksBanner from '../components/CaptchaTasksBanner/CaptchaTasksBanner.jsx';
import ExchangeCenterBanner from '../components/ExchangeCenterBanner/ExchangeCenterBanner.jsx';

function RewardsDashboard() {
  return (
    <main className={`container-fluid ${styles.page}`}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#home" aria-label="VELOOP Rewards home">
          <span className={styles.mark} aria-hidden="true"><WalletCards size={18} strokeWidth={2} /></span>
          <span>VELOOP<span className={styles.wordmarkLight}> REWARDS</span></span>
        </a>
        <div className={styles.network}><span /> Rewards hub</div>
      </header>

      <section className={styles.intro} id="home">
        <p className={styles.eyebrow}>YOUR NEXT MOVE PAYS</p>
        <h1>Make every move <span>count.</span></h1>
        <p className={styles.description}>Explore new ways to earn across the VELOOP ecosystem.</p>
      </section>

      <section className={`container-fluid px-0 ${styles.rewardGrid}`} aria-label="Ways to earn rewards">
        <ReferEarnBanner />
        <SwapCenterBanner />
        <BonusVEsBanner />
        <CaptchaTasksBanner />
        <ExchangeCenterBanner />
      </section>

      <footer className={styles.footer}>VELOOP REWARDS <span>·</span> THE ECOSYSTEM, IN MOTION</footer>
    </main>
  );
}

export default RewardsDashboard;