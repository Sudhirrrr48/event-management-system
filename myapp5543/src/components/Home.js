import React from "react";
export default function Home({ festivalDates }) {
  return (
    <section className="home">
      <h1 className="hero gradient-text">BitFest 2025</h1>
      <p className="sub tagline">Everything starts with a Bit</p>
      <div className="hero-cards">
        <div className="stat">
          <div className="stat-num">6</div>
          <div className="stat-label">Games</div>
        </div>
        <div className="stat">
          <div className="stat-num">3</div>
          <div className="stat-label">Workshops</div>
        </div>
        <div className="stat">
          <div className="stat-num">9</div>
          <div className="stat-label">Days</div>
        </div>
      </div>
      <div className="about card">
        <h2>About BitFest</h2>
        <p>
          BitFest is our annual tech & fun festival that blends{" "}
          <b>innovation</b>, <b>competition</b>, and <b>creativity</b>. It
          brings together students, developers, and enthusiasts for a week
          filled with thrilling games, hands-on workshops, and unforgettable
          memories.
        </p>
        <p>
          Get ready to challenge your brain with coding contests, escape
          puzzles, AI prompt battles, and more. Alongside, attend expert-led
          workshops on <b>Cloud Computing</b>, <b>Cybersecurity</b>, and{" "}
          <b>Strategic Trading</b>.
        </p>
        <div className="dates">
          📅 Festival Dates: <b>{festivalDates}</b>
        </div>
      </div>
      <div className="extra-info">
        <h3>Why Join?</h3>
        <ul>
          <li>💡 Learn cutting-edge skills from industry workshops</li>
          <li>🏆 Win exciting prizes worth ₹20,000+</li>
          <li>🤝 Network with peers, seniors, and professionals</li>
          <li>🎉 Experience 9 days of fun, challenge, and innovation</li>
        </ul>
      </div>
    </section>
  );
}

