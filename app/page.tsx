import Image from "next/image";
import { Instagram } from "lucide-react";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.stage}>
      {/* Atmosphere */}
      <div className={styles.radial} aria-hidden="true" />
      <div className={styles.conic} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orbRose}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orbGold}`} aria-hidden="true" />

      <section className={styles.content}>
        <div className={`${styles.logoWrap} ${styles.revealLogo}`}>
          <Image
            src="/betterLogo.png"
            alt="Effira Decor Logo"
            width={200}
            height={200}
            sizes="(max-width: 480px) 150px, (max-width: 768px) 180px, 200px"
            priority
            className={styles.logo}
          />
        </div>

        <span
          className={`${styles.hairline} ${styles.revealHairline}`}
          aria-hidden="true"
        />

        <h1 className={`${styles.headline} ${styles.revealHeadline}`}>
          გილოცავთ ქუთაისქალაქობას!
        </h1>

        <div
          className={`${styles.ornament} ${styles.revealOrnament}`}
          aria-hidden="true"
        >
          <span className={styles.ornamentLine} />
          <svg viewBox="0 0 32 32" className={styles.ornamentMark}>
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinejoin="round"
            >
              <path d="M16 3 L28 16 L16 29 L4 16 Z" />
              <path d="M16 9 L23 16 L16 23 L9 16 Z" />
            </g>
            <circle cx="16" cy="16" r="1.2" fill="currentColor" />
          </svg>
          <span className={styles.ornamentLine} />
        </div>

        <p className={`${styles.credit} ${styles.revealCredit}`}>
          <span className={styles.creditDash} aria-hidden="true">—</span>
          <span>დიზაინზე იმუშავა ადგილობრივმა დიზაინერმა,</span>
          <span className={styles.designerName}>თეკლა ჭოლაძემ</span>
          <span className={styles.creditDash} aria-hidden="true">—</span>
        </p>

        <div className={`${styles.gratitudeBlock} ${styles.revealGratitude}`}>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.gratitude}>
            გვსურს გულწრფელი მადლობა გადავუხადოთ
            <br />
            ქუთაისის მუნიციპალიტეტის მერიის კულტურის სამსახურს
            <br />
            გაწეული შრომისა და მხარდაჭერისთვის.
          </p>
          <span className={styles.rule} aria-hidden="true" />
        </div>

        <p className={`${styles.sub} ${styles.revealSub}`}>
          თქვენი საქმიანობა მნიშვნელოვნად უწყობს ხელს კულტურული ცხოვრების
          განვითარებას ჩვენს ქალაქში.
        </p>

        <div className={`${styles.igWrap} ${styles.revealIg}`}>
          <a
            href="https://www.instagram.com/effira_decor?igsh=YzNpbThyNmhiczU0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Effira Decor on Instagram"
            className={styles.igLink}
          >
            <Instagram className={styles.igIcon} strokeWidth={1.2} />
          </a>
          <span className={styles.igHandle}>@effira_decor</span>
        </div>
      </section>
    </main>
  );
}
