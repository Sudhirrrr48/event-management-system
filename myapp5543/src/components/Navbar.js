import React from "react";
export default function Navbar({ tab, setTab }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand" onClick={() => setTab("home")}>
          <img src="ca.jpg" alt="Logo" className="brand-logo" />
          <span className="brand-text">
            Computer <span>Association</span>
          </span>
        </div>
        <nav className="nav-links">
          {["home", "events", "register", "contact"].map((t) => (
            <button
              key={t}
              className={tab === t ? "active" : ""}
              onClick={() => setTab(t)}
            >
              {t === "home"
                ? "Home"
                : t === "events"
                  ? "Events"
                  : t === "register"
                    ? "Register"
                    : "Contact Us"}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

