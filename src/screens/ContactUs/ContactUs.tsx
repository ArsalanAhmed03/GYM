// src/components/ContactUs.tsx

import React, { useState } from "react";
import { MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ContactUs: React.FC = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ type: "error", text: "Please fill out all fields." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const { message: respMsg } = await res.json();

      if (res.ok) {
        // 2xx → success
        setFeedback({ type: "success", text: respMsg });
        // CLEAR form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // non-2xx → show error from server
        setFeedback({ type: "error", text: respMsg || "Failed to send message." });
      }
    } catch (err: any) {
      // network or parsing error
      setFeedback({ type: "error", text: err.message || "Network error." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center gap-8 px-4 md:px-20 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      {/* Contact Form */}
      <motion.section
        className="w-full max-w-3xl bg-[#0f131ba6] rounded-lg p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h1
          className="text-gray-300 text-3xl font-bold text-center mb-6"
          variants={fadeIn}
        >
          Contact Us
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div variants={fadeIn}>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 text-[#b2b2b2] rounded p-4 border-0"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <Input
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-[#b2b2b2] rounded p-4 border-0"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-700 text-[#b2b2b2] rounded p-4 min-h-[100px] border-0"
            />
          </motion.div>

          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-center p-3 rounded-lg ${
                feedback.type === "success"
                  ? "bg-green-900/50 text-green-400"
                  : "bg-red-900/50 text-red-400"
              }`}
            >
              <p>{feedback.text}</p>
            </motion.div>
          )}

          <motion.div variants={fadeIn} className="text-center">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ff4b2b] hover:bg-[#ff3b1b] text-white py-3 rounded disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </motion.section>

      {/* Location & Map (static) */}
      <motion.section
        className="w-full max-w-5xl bg-[#00000080] rounded-lg p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2
          className="text-gray-300 text-3xl font-bold text-center mb-6"
          variants={fadeIn}
        >
          Location & Map
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div variants={fadeIn} className="flex-1">
            <Card className="bg-[#131922] p-6 rounded-lg border-none">
              <CardContent>
                <h3 className="text-gray-300 text-xl font-bold mb-2">Our Address</h3>
                <p className="text-gray-300">123 Fitness St, Healthy City, HC 12345</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn} className="flex-1">
            <motion.img
              src="/maps.png"
              alt="Map location"
              className="w-full h-64 object-cover rounded-lg"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Customer Support (static) */}
      <motion.section
        className="w-full max-w-3xl bg-[#00000080] rounded-lg p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2 className="text-white text-2xl font-bold mb-4" variants={fadeIn}>
          Customer Support
        </motion.h2>
        <motion.p className="text-white mb-6" variants={fadeIn}>
          For any inquiries, please contact us:
        </motion.p>
        <motion.div className="space-y-4" variants={fadeIn}>
          <motion.div className="flex items-center gap-2" variants={fadeIn}>
            <MailIcon className="w-5 h-5 text-white" />
            <a href="mailto:support@example.com" className="text-blue-400">
              support@example.com
            </a>
          </motion.div>
          <motion.div className="flex items-center gap-2" variants={fadeIn}>
            <PhoneIcon className="w-5 h-5 text-white" />
            <a href="tel:+15551234567" className="text-blue-400">
              +1 (555) 123-4567
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};
