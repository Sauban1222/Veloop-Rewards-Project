import { ArrowRight, CalendarCheck2, CheckCircle2, Coins, UsersRound } from 'lucide-react';
import bannerStyles from '../../styles/Banners.module.css';
import styles from './BonusVEsBanner.module.css';

function BonusVEsBanner() {
  return (
    <article className={`container-fluid ${bannerStyles.frame} ${styles.banner}`}>
      <div className={`${bannerStyles.layout} ${styles.layout}`}>
        <div className={`${bannerStyles.content} ${styles.content}`}>
          <p className={`${bannerStyles.kicker} ${styles.kicker}`}>MORE WAYS TO GROW</p>
          <h2 className={`${bannerStyles.heading} ${styles.heading}`}>Boost Your VE Balance</h2>
          <p className={`${bannerStyles.description} ${styles.description}`}>
            Complete eligible activities and unlock additional VEs through special bonus opportunities.
          </p>
          <button className={`btn ${bannerStyles.cta} ${styles.cta}`} type="button">
            Explore Bonuses <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className={`${bannerStyles.visual} ${styles.visual}`} role="img" aria-label="A VE vault with bonus coins, a progress meter, and earning tasks">
          <span className={`${styles.coin} ${styles.coinOne}`} aria-hidden="true"><Coins size={18} /></span>
          <span className={`${styles.coin} ${styles.coinTwo}`} aria-hidden="true"><Coins size={15} /></span>
          <span className={`${styles.coin} ${styles.coinThree}`} aria-hidden="true"><Coins size={14} /></span>
          <span className={`${styles.coin} ${styles.coinFour}`} aria-hidden="true"><Coins size={13} /></span>

          <div className={styles.vault} aria-hidden="true">
            <span className={`${styles.hinge} ${styles.hingeTop}`} />
            <span className={`${styles.hinge} ${styles.hingeBottom}`} />
            <div className={styles.vaultDoor}>
              <span className={styles.vaultRing} />
              <span className={styles.vaultDial} />
              <span className={styles.vaultHandle} />
            </div>
            <span className={styles.vaultBase} />
          </div>

          <div className={styles.taskList}>
            <div className={styles.task}><span className={styles.taskIcon}><CalendarCheck2 size={15} /></span><span>Daily Check-in</span><span className={styles.taskValue}>+ VE</span></div>
            <div className={styles.task}><span className={styles.taskIcon}><UsersRound size={15} /></span><span>Invite Friends</span><span className={styles.taskValue}>+ VE</span></div>
            <div className={styles.task}><span className={styles.taskIcon}><CheckCircle2 size={15} /></span><span>Complete Tasks</span><span className={styles.taskValue}>+ VE</span></div>
          </div>

          <div className={styles.bonusMeter}>
            <div className={styles.meterHeading}><span>BONUS METER</span><strong>68%</strong></div>
            <div className={styles.meterTrack}><span /></div>
          </div>
          <span className={styles.sceneGlow} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

export default BonusVEsBanner;