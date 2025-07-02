"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import content from '@/data/hp/content.json';

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

  useEffect(() => {
    document.body.classList.add('teaser-page');
    return () => {
      document.body.classList.remove('teaser-page');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative overflow-hidden">
      <Image
        src={content.teaser.image}
        alt="Villma Hero"
        fill
        className="object-cover object-center absolute inset-0 z-0 opacity-50"
        priority
      />
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-6 py-12 bg-white/80 rounded-xl shadow-2xl backdrop-blur-md">
        <div className="flex justify-center -mt-10 md:-mt-[7rem] mb-6">
          <Image
            src="/Villma-Logo_2025-05-21.jpg"
            alt="Villma Logo"
            width={120}
            height={120}
            className="rounded-full shadow-xl bg-white ring-4 ring-sky-500 p-2 object-contain w-20 h-20 md:w-[120px] md:h-[120px]"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center text-sky-700 drop-shadow-lg">{content.teaser.title}</h1>
        <p className="mb-6 text-lg text-center text-gray-700 font-medium">{content.teaser.subtitle}</p>
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-center text-pink-600">{content.teaser.formTitle}</h2>
        <p className="mb-6 text-center text-gray-600">{content.teaser.formDescription}</p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold">{content.teaser.successMessage}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-full max-w-xs">
            <input
              type="email"
              required
              placeholder={content.teaser.inputPlaceholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border px-3 py-2 rounded w-full"
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded w-full font-bold shadow-md transition-colors"
              disabled={loading}
            >
              {loading ? "Sending..." : content.teaser.buttonText}
            </button>
            {error && <div className="text-red-600 text-sm mt-2">{content.teaser.errorMessage}</div>}
          </form>
        )}
      </div>
    </div>
  );
} 