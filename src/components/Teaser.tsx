"use client";
import { useState } from "react";

export default function Teaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/teaser-signup", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p className="mb-6">Leave your email to be notified when we launch.</p>
      {submitted ? (
        <div className="text-green-600">Thank you! We will notify you as soon as we are ready.</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-full max-w-xs">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Notify Me"}
          </button>
          {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
        </form>
      )}
    </div>
  );
} 