import { useEffect, useState } from "react";
import "./Time.css";

function Time () {
    const [message, setMessage] = useState("")
    const [data, setData] = useState("")
    const [saved , setSaved] = useState(() => {
        const stored = localStorage.getItem("capsule")
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

    const  isMessageVisible = () => {
        if (!saved) return false;
        const now = new Date();
        const targetDate = new Date(saved.date);
        return now >= targetDate;
      };
