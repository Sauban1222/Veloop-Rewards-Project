import { ArrowLeftRight, ArrowRight, Landmark, WalletCards } from 'lucide-react';
import bannerStyles from '../../styles/Banners.module.css';
import styles from './SwapCenterBanner.module.css';

function SwapCenterBanner() {
  return (
    <article className={`container-fluid ${bannerStyles.frame} ${styles.banner}`}>
      <div className={`${bannerStyles.layout} ${styles.layout}`}>
        <div className={`${bannerStyles.content} ${styles.content}`}>
          <p className={`${bannerStyles.kicker} ${styles.kicker}`}>ELIGIBLE BALANCE CONVERSION</p>
          <h2 className={`${bannerStyles.heading} ${styles.heading}`}>Swap Center</h2>
          <p className={`${bannerStyles.description} ${styles.description}`}>
            Convert eligible reward balances between supported currencies.
          </p>
          <button className={`btn ${bannerStyles.cta} ${styles.cta}`} type="button">
            Open Swap Center <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className={`${bannerStyles.visual} ${styles.visual}`} role="img" aria-label="VE and SVE reward balances connected by a swap flow">
          <ArrowRight className={`${styles.flowArrow} ${styles.flowArrowTop}`} aria-hidden="true" />
          <ArrowRight className={`${styles.flowArrow} ${styles.flowArrowBottom}`} aria-hidden="true" />
          <div className={`${styles.currencyCard} ${styles.veCard}`}>
            <div className={styles.cardTop}>
              <span className={`${styles.currencyMark} ${styles.veMark}`}><WalletCards size={18} aria-hidden="true" /></span>
              <span className={styles.cardLabel}>FROM</span>
            </div>
            <strong className={styles.currencyCode}>VE</strong>
            <span className={styles.currencyName}>VELOOP REWARDS</span>
            <span className={styles.balance}>Eligible balance</span>
          </div>

          <div className={styles.swapNode} aria-hidden="true">
            <ArrowLeftRight size={22} aria-hidden="true" />
          </div>

          <div className={`${styles.currencyCard} ${styles.sveCard}`}>
            <div className={styles.cardTop}>
              <span className={`${styles.currencyMark} ${styles.sveMark}`}><Landmark size={18} aria-hidden="true" /></span>
              <span className={styles.cardLabel}>TO</span>
            </div>
            <strong className={styles.currencyCode}>SVE</strong>
            <span className={styles.currencyName}>STAKED VE</span>
            <span className={styles.balance}>Supported balance</span>
          </div>

          <span className={styles.flowCaption}>CONVERT · NOT REDEEM</span>
          <span className={`${styles.orbitDot} ${styles.orbitDotOne}`} aria-hidden="true" />
          <span className={`${styles.orbitDot} ${styles.orbitDotTwo}`} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

export default SwapCenterBanner;