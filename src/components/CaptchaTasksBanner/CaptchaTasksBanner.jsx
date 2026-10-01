import { ArrowRight, BadgeCheck, Check, Gem, WalletCards } from 'lucide-react';
import bannerStyles from '../../styles/Banners.module.css';
import styles from './CaptchaTasksBanner.module.css';

function CaptchaTasksBanner() {
  return (
    <article className={`container-fluid ${bannerStyles.frame} ${styles.banner}`}>
      <div className={`${bannerStyles.layout} ${styles.layout}`}>
        <div className={`${bannerStyles.content} ${styles.content}`}>
          <p className={`${bannerStyles.kicker} ${styles.kicker}`}>VERIFIED MICRO-TASKS</p>
          <h2 className={`${bannerStyles.heading} ${styles.heading}`}>Solve Captchas. Earn Gems.</h2>
          <p className={`${bannerStyles.description} ${styles.description}`}>
            Complete simple captcha tasks accurately and earn eligible Gem rewards.
          </p>
          <button className={`btn ${bannerStyles.cta} ${styles.cta}`} type="button">
            Start Task <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className={`${bannerStyles.visual} ${styles.visual}`} role="img" aria-label="Captcha verification interface, secure checkmark, and Gem rewards">
          <div className={styles.verificationPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelMark} aria-hidden="true"><WalletCards size={15} /></span>
              <span>VELOOP VERIFY</span>
              <span className={styles.secureLabel}>SECURE</span>
            </div>
            <p className={styles.prompt}>Enter the characters shown</p>
            <div className={styles.captchaCode} aria-label="Captcha code K7M4">K7M4</div>
            <div className={styles.answerField}>
              <span>Type your answer</span>
              <span className={styles.verifyButton} aria-hidden="true"><Check size={16} /></span>
            </div>
            <div className={styles.panelFooter}><span /> Accurate response earns Gems</div>
          </div>

          <div className={styles.shield} aria-hidden="true">
            <BadgeCheck className={styles.shieldCheck} size={30} strokeWidth={1.8} />
          </div>
          <span className={`${styles.gem} ${styles.gemOne}`} aria-hidden="true"><Gem size={18} /></span>
          <span className={`${styles.gem} ${styles.gemTwo}`} aria-hidden="true"><Gem size={15} /></span>
          <span className={`${styles.gem} ${styles.gemThree}`} aria-hidden="true"><Gem size={12} /></span>
          <div className={styles.rewardTag}><Gem size={15} aria-hidden="true" /> GEM REWARD</div>
          <span className={styles.sceneGlow} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

export default CaptchaTasksBanner;