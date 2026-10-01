import { useState } from 'react';
import { ArrowRight, Clock3, Coins, Copy, Gift, LockKeyhole, Share2, Sparkles, UsersRound } from 'lucide-react';
import bannerStyles from '../../styles/Banners.module.css';
import styles from './ReferEarnBanner.module.css';

function ReferEarnBanner() {
  const [notice, setNotice] = useState('');

  async function copyValue(value, successMessage, fallbackMessage) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      setNotice(successMessage);
    } catch {
      setNotice(fallbackMessage);
    }
  }

  async function handleInvite() {
    const inviteUrl = `${window.location.origin}/?ref=VELOOP123`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join VELOOP Rewards',
          text: 'Join VELOOP Rewards and earn together.',
          url: inviteUrl,
        });
        setNotice('Invite shared.');
      } catch (error) {
        if (error.name !== 'AbortError') setNotice('Your referral code is VELOOP123.');
      }
      return;
    }

    await copyValue(inviteUrl, 'Invite link copied.', 'Your referral code is VELOOP123.');
  }

  return (
    <article className={`container-fluid ${bannerStyles.frame} ${styles.banner}`}>
      <div className={`${bannerStyles.layout} ${styles.layout}`}>
        <div className={`${bannerStyles.content} ${styles.copyColumn}`}>
          <p className={`${bannerStyles.kicker} ${styles.kicker}`}><Gift size={14} aria-hidden="true" /> GROW TOGETHER</p>
          <h2 className={`${bannerStyles.heading} ${styles.heading}`}>Refer Friends,<br />Earn Rewards</h2>
          <p className={`${bannerStyles.description} ${styles.description}`}>
            Invite your friends to VELOOP Rewards and earn exciting rewards together.
          </p>

          <div className={styles.rewardRow} aria-label="Referral rewards">
            <div className={styles.rewardCard}>
              <span className={styles.rewardAmount}>500 <small>VEs</small></span>
              <span className={styles.rewardLabel}>FOR YOU</span>
            </div>
            <span className={styles.rewardDivider} aria-hidden="true">+</span>
            <div className={styles.rewardCard}>
              <span className={styles.rewardAmount}>200 <small>VEs</small></span>
              <span className={styles.rewardLabel}>FOR YOUR FRIEND</span>
            </div>
          </div>

          <div className={styles.actionRow}>
            <button className={`btn ${bannerStyles.cta} ${styles.inviteButton}`} type="button" onClick={handleInvite}>
              Invite Now <ArrowRight size={16} aria-hidden="true" />
            </button>
            <div className={styles.codeBox}>
              <span className={styles.codeLabel}>YOUR CODE</span>
              <strong>VELOOP123</strong>
              <button
                className={styles.copyButton}
                type="button"
                aria-label="Copy referral code"
                onClick={() => copyValue('VELOOP123', 'Referral code copied.', 'Your code is VELOOP123.')}
              >
                <Copy size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
          <p className={styles.notice} role="status" aria-live="polite">{notice}</p>
        </div>

        <div className={`${bannerStyles.visual} ${styles.visualColumn}`}>
          <div className={styles.artboard} role="img" aria-label="Gift boxes, reward coins, and a shared invitation">
            <span className={`${styles.coin} ${styles.coinOne}`} aria-hidden="true"><Coins size={18} /></span>
            <span className={`${styles.coin} ${styles.coinTwo}`} aria-hidden="true"><Coins size={15} /></span>
            <span className={`${styles.coin} ${styles.coinThree}`} aria-hidden="true"><Coins size={13} /></span>
            <div className={styles.shareTag}><Share2 size={14} aria-hidden="true" /> SHARE THE JOY</div>
            <div className={`${styles.gift} ${styles.giftLarge}`} aria-hidden="true">
              <span className={styles.giftLid} />
              <span className={styles.giftRibbon} />
              <span className={styles.giftBow} />
            </div>
            <div className={`${styles.gift} ${styles.giftSmall}`} aria-hidden="true">
              <span className={styles.giftLid} />
              <span className={styles.giftRibbon} />
              <span className={styles.giftBow} />
            </div>
            <Sparkles className={styles.sparkleOne} size={16} aria-hidden="true" />
            <Sparkles className={styles.sparkleTwo} size={20} aria-hidden="true" />
            <span className={styles.orbit} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className={styles.benefits} aria-label="Referral benefits">
        <div className={styles.benefit}><span aria-hidden="true"><Share2 /></span>Easy to Share</div>
        <div className={styles.benefit}><span aria-hidden="true"><Clock3 /></span>Instant Rewards</div>
        <div className={styles.benefit}><span aria-hidden="true"><LockKeyhole /></span>100% Secure</div>
        <div className={styles.benefit}><span aria-hidden="true"><UsersRound /></span>Unlimited Earning</div>
      </div>
    </article>
  );
}

export default ReferEarnBanner;