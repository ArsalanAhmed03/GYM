import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Diet1: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubscribe = async () => {
    if (!email) {
      setFeedback({ type: "error", message: "Please enter an email." });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch("https://gym-backend-ujzl.onrender.com/api/email-subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Subscription failed");
      }

      setFeedback({
        type: "success",
        message: "Subscribed successfully! Check your inbox.",
      });
      setEmail("");
    } catch (err: any) {
      setFeedback({
        type: "error",
        message: err.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10 w-full bg-[#0a0a0a80]">
      <h2 className="font-bold text-3xl text-white text-center leading-9 font-['Roboto',Helvetica]">
        Subscribe for Weekly Diet Plans
      </h2>

      <p className="max-w-[489px] font-normal text-white text-base text-center leading-6 font-['Roboto',Helvetica]">
        Get the latest meal plans and nutrition advice delivered to your inbox.
      </p>

      <div className="flex items-center justify-center">
        <div className="flex">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[245px] h-12 rounded-[8px_0px_0px_8px] font-['Roboto',Helvetica] text-base placeholder:text-[#b2b2b2]"
            placeholder="Enter your email"
          />
          <Button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-[119px] h-12 rounded-[0px_8px_8px_0px] bg-red-500 hover:bg-red-600 font-['Roboto',Helvetica] font-normal text-base disabled:opacity-50"
          >
            {loading ? "Subscribing…" : "Subscribe"}
          </Button>
        </div>
      </div>

      {feedback && (
        <p
          className={`mt-4 text-center ${
            feedback.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {feedback.message}
        </p>
      )}
    </section>
  );
};
