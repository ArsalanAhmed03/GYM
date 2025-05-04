import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 },
  },
};

export const SignUpSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    termsAccepted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.phone,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "An error occurred during signup"
      );
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center gap-8 pt-8 pb-16 px-8 w-full bg-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={childVariants} className="w-full max-w-[1276px]">
        <Card className="flex flex-col items-center gap-8 p-0 bg-[#00000099] rounded-2xl border-none">
          <CardContent className="flex w-[263px] items-center justify-center gap-2 p-0">
            <p className="relative w-fit mt-[-1.00px] ml-[-28.50px] mr-[-28.50px] [font-family:'Roboto',Helvetica] font-bold text-white text-[32px] leading-10">
              SIGN UP FOR ACCESS
            </p>
          </CardContent>
          <CardContent className="flex justify-center p-0">
            <p className="text-white text-[length:var(--m3-headline-small-font-size)] font-medium">
              GET THE LATEST HEALTH UPDATES
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-full max-w-[1276px]"
        variants={childVariants}
      >
        {/* Name Fields */}
        <motion.div className="flex gap-8" variants={childVariants}>
          {["firstName", "lastName"].map((field) => (
            <Card
              key={field}
              className="flex-1 flex-col gap-4 p-0 bg-[#00000099] rounded-2xl border-none"
            >
              <CardContent className="p-0">
                <label className="text-white text-[length:var(--m3-headline-small-font-size)]">
                  {field === "firstName" ? "First name" : "Last name"}
                </label>
              </CardContent>
              <Input
                name={field}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleInputChange}
                className="w-full bg-transparent border-white text-white"
                required
              />
            </Card>
          ))}
        </motion.div>

        {/* Contact Fields */}
        <motion.div className="flex gap-8" variants={childVariants}>
          {["email", "phone"].map((field) => (
            <Card
              key={field}
              className="flex-1 flex-col gap-4 p-0 bg-[#00000099] rounded-2xl border-none"
            >
              <CardContent className="p-0">
                <label className="text-white text-[length:var(--m3-headline-small-font-size)]">
                  {field === "email" ? "Email address" : "Phone Number"}
                </label>
              </CardContent>
              <Input
                name={field}
                type={field === "email" ? "email" : "tel"}
                value={formData[field as keyof typeof formData] as string}
                onChange={handleInputChange}
                className="w-full bg-transparent border-white text-white"
                required
              />
            </Card>
          ))}
        </motion.div>

        {/* Terms Checkbox */}
        <motion.div
          className="flex items-center gap-2 px-0"
          variants={childVariants}
        >
          <Checkbox
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                termsAccepted: checked as boolean,
              }))
            }
            className="w-[23px] h-[23px] rounded-sm border-white"
          />
          <label htmlFor="terms" className="text-white">
            By submitting this form, you accept the Terms & Conditions
          </label>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          variants={childVariants}
        >
          {/* SIGN UP */}
          <Button
            type="submit"
            className="relative group w-56 py-5 overflow-hidden bg-transparent border border-white text-white rounded"
          >
            {/* fill overlay */}
            <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
            {/* label */}
            <span className="relative z-10 group-hover:text-black">SIGNUP</span>
          </Button>

          {/* LOGIN */}
          <Button
            type="button"
            onClick={() => navigate("/login")}
            className="relative group w-56 py-5 overflow-hidden bg-transparent border border-white text-white rounded"
          >
            {/* fill overlay */}
            <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
            {/* label */}
            <span className="relative z-10 group-hover:text-black">LOGIN</span>
          </Button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};
