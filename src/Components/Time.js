import React, { useState } from "react";
import "./Time.css";

function Time() {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem("capsule");
    return stored ? JSON.parse(stored) : null;
  });

  const handleSubmit = () => {
    if (message && date) {
      const data = { message, date };
      localStorage.setItem("capsule", JSON.stringify(data));
      setSaved(data);
      setMessage("");
      setDate("");
    }
  };

  const isMessageVisible = () => {
    if (!saved) return false;
    const now = new Date();
    const targetDate = new Date(saved.date);
    return now >= targetDate;
  };

  return (
    <div className="capsule-container">
      <h1>Time Capsule 📩</h1>
      {!saved ? (
        <div className="form">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your future message..."
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleSubmit}>Save Capsule</button>
        </div>
      ) : isMessageVisible() ? (
        <div className="message-box">
          <h2>Your Message:</h2>
          <p>{saved.message}</p>
        </div>
      ) : (
        <div className="locked-box">
          <p>🔒 Your message is locked until {saved.date}</p>
        </div>
      )}
    </div>
  );
}

export default Time;
