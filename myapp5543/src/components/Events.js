import React, { useState } from "react";
export default function Events({ games, workshops }) {
  const [expanded, setExpanded] = useState(null);
  const toggleExpand = (id) => {
    setExpanded((cur) => (cur === id ? null : id));
  };

  const isExpanded = (id) => expanded === id;
  return (
    <section className="events">
      <h1>Events</h1>
      <p className="muted">
        Explore all games and workshops. Click a card to view full details.
      </p>

      {/* Games Section */}
      <h2 className="group-title">Games & Competitions</h2>
      <div className="cards">
        {games.map((ev) => (
          <article
            key={ev.id}
            className={`card event-card ${isExpanded(ev.id) ? "expanded" : ""}`}
            onClick={() => toggleExpand(ev.id)}
          >
            <header className="event-head">
              <h3>{ev.title}</h3>
              <div className="pill">Game</div>
            </header>
            {isExpanded(ev.id) && (
              <div className="more">
                <p className="short">{ev.desc}</p>
                <div className="meta">
                  <span>{ev.date || "Date TBA"}</span>
                  <span>•</span>
                  <span>{ev.time || "Time TBA"}</span>
                </div>
                <dl className="facts">
                  <div>
                    <dt>Team</dt>
                    <dd>{ev.team || "Varies"}</dd>
                  </div>
                  <div>
                    <dt>Entry Fee</dt>
                    <dd>{ev.fees}</dd>
                  </div>
                  <div>
                    <dt>Prizes</dt>
                    <dd>{ev.prize}</dd>
                  </div>
                </dl>
              </div>
            )}
          </article>
        ))}
      </div>
      {/* Workshops Section */}
      <h2 className="group-title">Workshops</h2>
      <div className="cards">
        {workshops.map((ev) => (
          <article
            key={ev.id}
            className={`card event-card ${isExpanded(ev.id) ? "expanded" : ""}`}
            onClick={() => toggleExpand(ev.id)}
          >
            {/* Only title + type pill always visible */}
            <header className="event-head">
              <h3>{ev.title}</h3>
              <div className="pill pill-green">Workshop</div>
            </header>
            {isExpanded(ev.id) && (
              <div className="more">
                <p className="short">{ev.desc}</p>
                <div className="meta">
                  <span>{ev.date || "Date TBA"}</span>
                  <span>•</span>
                  <span>{ev.time || "Time TBA"}</span>
                </div>
                <dl className="facts">
                  <div>
                    <dt>Seats</dt>
                    <dd>{ev.team || "Individual"}</dd>
                  </div>
                  <div>
                    <dt>Entry Fee</dt>
                    <dd>{ev.fees}</dd>
                  </div>
                  <div>
                    <dt>Certificate</dt>
                    <dd>{ev.prize}</dd>
                  </div>
                </dl>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}


