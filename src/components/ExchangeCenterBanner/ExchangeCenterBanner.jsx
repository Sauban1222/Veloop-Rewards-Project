import { ArrowDownToLine, ArrowRight, CheckCircle2, Gem, Sparkles, WalletCards } from 'lucide-react';
import bannerStyles from '../../styles/Banners.module.css';
import styles from './ExchangeCenterBanner.module.css';

function ExchangeCenterBanner() {
  return (
    <article className={`container-fluid ${bannerStyles.frame} ${styles.banner}`}>
      <div className={`${bannerStyles.layout} ${styles.layout}`}>
        <div className={`${bannerStyles.content} ${styles.content}`}>
          <p className={`${bannerStyles.kicker} ${styles.kicker}`}>REWARD REDEMPTION</p>
          <h2 className={`${bannerStyles.heading} ${styles.heading}`}>Convert Gems to VEs</h2>
          <p className={`${bannerStyles.description} ${styles.description}`}>
            Exchange eligible Gems into VEs and grow your VE balance.
          </p>
          <button className={`btn ${bannerStyles.cta} ${styles.cta}`} type="button">
            Open Exchange Center <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className={`${bannerStyles.visual} ${styles.visual}`} role="img" aria-label="Gems redeemed into a VE payout">
          <div className={`${styles.assetCard} ${styles.gemCard}`}>
            <div className={styles.cardTop}><span>REWARD ASSET</span><span className={styles.step}>01</span></div>
            <div className={styles.gemPile} aria-hidden="true">
              <span className={`${styles.gem} ${styles.gemOne}`}><Gem size={20} aria-hidden="true" /></span>
              <span className={`${styles.gem} ${styles.gemTwo}`}><Gem size={16} aria-hidden="true" /></span>
              <span className={`${styles.gem} ${styles.gemThree}`}><Gem size={15} aria-hidden="true" /></span>
            </div>
            <strong className={styles.assetName}>Gems</strong>
            <span className={styles.assetMeta}>ELIGIBLE BALANCE</span>
          </div>

          <div className={styles.redeemStep}>
            <ArrowRight className={styles.flowArrow} aria-hidden="true" />
            <span className={styles.redeemIcon} aria-hidden="true"><ArrowDownToLine size={18} /></span>
            <span className={styles.redeemLabel}>REDEEM</span>
          </div>

          <div className={`${styles.assetCard} ${styles.payoutCard}`}>
            <div className={styles.cardTop}><span>VE PAYOUT</span><span className={styles.step}>02</span></div>
            <div className={styles.payoutCoin} aria-hidden="true"><WalletCards size={19} /></div>
            <strong className={styles.assetName}>VEs</strong>
            <span className={styles.assetMeta}>CREDITED TO BALANCE</span>
          </div>

          <div className={styles.flowTrack} aria-hidden="true"><span /></div>
          <div className={styles.receiptTag}><CheckCircle2 size={15} aria-hidden="true" /> REDEMPTION COMPLETE</div>
          <Sparkles className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true" />
          <Sparkles className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true" />
          <span className={styles.sceneGlow} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

export default ExchangeCenterBanner;