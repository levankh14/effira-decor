import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Page() {
  return (
    <main className="page">
      {/* Animated atmospheric layers */}
      <div className="mesh" aria-hidden="true" />
      <div className="floral-pattern" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* Drifting rose petals */}
      <div className="petals" aria-hidden="true">
        <span className="petal petal-1" />
        <span className="petal petal-2" />
        <span className="petal petal-3" />
        <span className="petal petal-4" />
        <span className="petal petal-5" />
      </div>

      {/* Content card */}
      <article className="card">
        <div className="logo-wrap reveal-logo">
          <Image
            src="/betterLogo.png"
            alt="Effira Decor Logo"
            width={220}
            height={220}
            priority
            className="logo"
          />
        </div>

        <Ornament />

        <h1 className="headline reveal-headline">
          გილოცავთ ქუთაისქალაქობას!
        </h1>

        <p className="designer reveal-designer">
          დიზაინზე იმუშავა ადგილობრივმა დიზაინერმა —{" "}
          <span className="designer-name">თეკლა ჭოლაძემ</span>
        </p>

        <p className="gratitude reveal-gratitude">
          გვსურს გულწრფელი მადლობა გადავუხადოთ ქუთაისის მუნიციპალიტეტის მერიის
          კულტურის სამსახურს გაწეული შრომისა და მხარდაჭერისთვის. თქვენი
          საქმიანობა მნიშვნელოვნად უწყობს ხელს კულტურული ცხოვრების განვითარებას
          ჩვენს ქალაქში.
        </p>

        <Ornament />

        <div className="instagram reveal-instagram">
          <a
            href="https://www.instagram.com/effira_decor?igsh=YzNpbThyNmhiczU0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Effira Decor on Instagram"
            className="ig-link"
          >
            <Instagram className="ig-icon" strokeWidth={1.4} />
          </a>
          <span className="ig-handle">@effira_decor</span>
        </div>
      </article>
    </main>
  );
}

function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <span className="ornament-line" />
      <svg
        viewBox="0 0 24 24"
        className="ornament-diamond"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 2 L22 12 L12 22 L2 12 Z" />
        <path d="M12 6 L18 12 L12 18 L6 12 Z" />
        <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
      </svg>
      <span className="ornament-line" />
    </div>
  );
}
