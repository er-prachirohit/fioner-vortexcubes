import type { CSSProperties } from "react";
import Link from "next/link";

function CartIcon() {
  return (
    <svg
      className="buy__cart"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 3h2.2l2.5 11.3h11.1" />
      <path d="M6.6 6.4h14.4l-1.9 6.9H8.1" />
      <circle cx="9.4" cy="19.4" r="1.7" />
      <circle cx="18.2" cy="19.4" r="1.7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__arc" />
        <span className="hero__warm" />
      </div>

      <div className="hero__product-image" aria-hidden="true" />

      <div className="hero__copy">
        <h1 className="hero__title">
          <span className="hero__line">
            <span className="hero__word-wrap">
              <span className="hero__word" style={{ "--i": 0 } as CSSProperties}>Connect</span>
            </span>{" "}
            <span className="hero__word-wrap">
              <span className="hero__word" style={{ "--i": 1 } as CSSProperties}>your</span>
            </span>{" "}
            <span className="hero__word-wrap">
              <span className="hero__word" style={{ "--i": 2 } as CSSProperties}>vehicle</span>
            </span>
          </span>
          <span className="hero__line">
            <span className="hero__word-wrap">
              <span className="hero__word" style={{ "--i": 3 } as CSSProperties}>protect</span>
            </span>{" "}
            <span className="hero__word-wrap">
              <span className="hero__word" style={{ "--i": 4 } as CSSProperties}>every</span>
            </span>
          </span>
          <span className="hero__line">
            <span className="hero__word-wrap">
              <span className="hero__word" style={{ "--i": 5 } as CSSProperties}>journey</span>
            </span>
          </span>
        </h1>

        <p className="hero__lede">
          Monitor your vehicle, stay connected on every trip, and enable safer
          public interaction through smart QR, GPS tracking, and intelligent
          mobility technology.
        </p>

        <Link className="buy" href="/marketplace">
          <span className="buy__eyelet" aria-hidden="true" />
          <span className="buy__body">
            <CartIcon />
            <span className="buy__divider" aria-hidden="true" />
            <span className="buy__label">BUY NOW</span>
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;