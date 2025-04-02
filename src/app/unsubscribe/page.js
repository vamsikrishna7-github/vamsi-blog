"use client";
import { useRef, useState } from "react";
import styles from "./unsubscibe.module.css"
import LoadingdBtn from "@/components/LoadingBtn"

export default function Unsubscribe() {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/unsubscribe/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        formRef.current.reset();
        setMessage("You have been unsubscribed successfully.");
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("You have been unsubscribed successfully.");
    }finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Unsubscribe from Newsletter</h2>
        <form ref={formRef} onSubmit={handleUnsubscribe} className="space-y-4">
            <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${styles.input} w-full p-2 border rounded-lg`}
            />
            {loading ? <LoadingdBtn className="rounded-0" /> : (
              <button type="submit" className="btn btn-dark rounded-0 text-white">
                Unsubscribe
              </button>
            )}

          </div>
        </form>
        {message && (
            <p className={`mt-4 text-center ${message.includes("not found") ? "text-danger" : "text-success"}`}>
                {message}
            </p>
        )}
      </div>
    </div>
  );
}
