import React, { useMemo, useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Register from "./components/Register";
import Contact from "./components/Contact";

export default function App() {
  const [tab, setTab] = useState("home");
  const festivalDates = "Sept 05–13, 2025";

  const games = useMemo(
    () => [
      {
        id: "g1",
        title: "Live Ludo",
        date: "Sept 05, 2025",
        time: "10:00 AM",
        team: "Team of 4 Players",
        desc: "Classic Ludo brought to life! Every dice roll is projected live. Strategy meets luck in this fast-paced stage version.",
        fees: "₹100 / team",
        prize: "₹5,000 + goodies",
      },
      {
        id: "g2",
        title: "Bug Busters",
        date: "Sept 06, 2025",
        time: "02:00 PM",
        team: "Solo",
        desc: "Speed debugging challenge. Fix the most bugs across multiple coding stacks. Accuracy matters—wrong fixes deduct points!",
        fees: "₹50",
        prize: "₹3,000 + certificates",
      },
      {
        id: "g3",
        title: "Squid Game: BitFest Edition",
        date: "Sept 07, 2025",
        time: "11:00 AM",
        team: "Solo",
        desc: "Fun challenges inspired by the famous series—safe, campus-friendly mini games like ‘Red Light Green Light’ and memory checks.",
        fees: "₹50",
        prize: "₹3,000 + trophies",
      },
      {
        id: "g4",
        title: "Promptathon",
        date: "Sept 08, 2025",
        time: "03:00 PM",
        team: "Solo",
        desc: "Show off your AI prompting skills. Craft clever prompts for reasoning, coding, content, and image tasks. Judged on clarity and creativity.",
        fees: "₹50",
        prize: "₹3,000 + medals",
      },
      {
        id: "g5",
        title: "Escape the Loop",
        date: "Sept 09, 2025",
        time: "01:00 PM",
        team: "Team of 2-4",
        desc: "A logic & coding puzzle hunt. Solve tricky algorithmic riddles, decode patterns, and break out of infinite loops to win.",
        fees: "₹100 / team",
        prize: "₹5,000 + swags",
      },
      {
        id: "g6",
        title: "Prison Break",
        date: "Sept 10, 2025",
        time: "04:00 PM",
        team: "Team of 2–4",


        desc: "An escape-room style challenge: decrypt codes, solve ciphers, and complete tasks under time pressure to unlock your freedom.",
        fees: "₹100 / team",
        prize: "₹5,000 + mementos",
      },
    ],
    []
  );

  const workshops = useMemo(
    () => [
      {
        id: "w1",
        title: "Cloud Computing Workshop",
        date: "Sept 11, 2025",
        time: "09:00 AM",
        team: "Individual",
        desc: "Hands-on intro to cloud services & deployment. Learn IaaS, PaaS, serverless, and deploy a sample app live with CI/CD.",
        fees: "₹50",
        prize: "Certificate of Participation",
      },
      {
        id: "w2",
        title: "Strategic Trading Workshop",
        date: "Sept 12, 2025",
        time: "11:00 AM",
        team: "Individual",
        desc: "Risk management, indicators & strategy building for stock/crypto trading. Includes backtesting simple strategies.",
        fees: "₹50",
        prize: "Certificate of Participation",
      },
      {
        id: "w3",
        title: "Cybersecurity Workshop",
        date: "Sept 13, 2025",
        time: "02:00 PM",
        team: "Individual",

        desc: "Protect, detect, respond. Learn ethical hacking basics, OWASP vulnerabilities, and hands-on labs for securing applications.",
        fees: "₹50",
        prize: "Certificate of Participation",
      },
    ],
    []
  );

  return (
    <div className="site">
      {/* ✅ Navbar */}
      <Navbar tab={tab} setTab={setTab} />

      {/* ✅ Main */}
      <div className="main-content">
        <main className="container">
          {tab === "home" && <Home festivalDates={festivalDates} />}
          {tab === "events" && <Events games={games} workshops={workshops} />}
          {tab === "register" && <Register games={games} workshops={workshops} />}
          {tab === "contact" && <Contact />}
        </main>
      </div>

      {/* ✅ Footer */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} BitFest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
