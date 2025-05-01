import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";

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
    <section className="flex gap-0 pt-8 pb-16 px-8 self-stretch w-full bg-black flex-col items-center relative">
      <div className="flex flex-col gap-8 self-stretch w-full items-center relative">
        <Card className="inline-flex gap-8 p-8 bg-[#00000099] rounded-2xl flex-col items-center border-none">
          <CardContent className="flex w-[263px] items-center justify-center gap-2 p-0">
            <p className="relative w-fit mt-[-1.00px] ml-[-28.50px] mr-[-28.50px] [font-family:'Roboto',Helvetica] font-bold text-white text-[32px] leading-10">
              SIGN UP FOR ACCESS
            </p>
          </CardContent>

          <CardContent className="inline-flex flex-col items-center justify-center gap-2 p-0">
            <p className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
              GET THE LATEST HEALTH UPDATES
            </p>
          </CardContent>
        </Card>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-[1276px]">
        <div className="flex items-start justify-center gap-8">
          <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
            <CardContent className="flex w-[263px] items-center gap-2 p-0">
              <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
                First name
              </label>
            </CardContent>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full bg-transparent border-white text-white"
              required
            />
          </Card>

          <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
            <CardContent className="flex w-[263px] items-center gap-2 p-0">
              <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
                Last name
              </label>
            </CardContent>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full bg-transparent border-white text-white"
              required
            />
          </Card>
        </div>

        <div className="flex items-start justify-center gap-8">
          <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
            <CardContent className="flex w-[263px] items-center gap-2 p-0">
              <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
                Email address
              </label>
            </CardContent>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border-white text-white"
              required
            />
          </Card>

          <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
            <CardContent className="flex w-[263px] items-center gap-2 p-0">
              <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
                Phone Number
              </label>
            </CardContent>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-transparent border-white text-white"
              required
            />
          </Card>
        </div>

        <div className="w-full px-8 py-0 flex items-center gap-2 relative">
          <div className="flex items-center space-x-2">
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
              className="w-[23px] h-[23px] rounded-sm border border-solid border-white"
            />
            <label
              htmlFor="terms"
              className="relative w-fit mt-[-1.00px] font-m3-title-large font-[number:var(--m3-title-large-font-weight)] text-white text-[length:var(--m3-title-large-font-size)] tracking-[var(--m3-title-large-letter-spacing)] leading-[var(--m3-title-large-line-height)] whitespace-nowrap [font-style:var(--m3-title-large-font-style)]"
            >
              By submitting this form, you accept the Terms &amp; Conditions
            </label>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            type="submit"
            className="flex w-56 items-center justify-center gap-2 py-[21px] relative mb-[-24.00px] bg-white text-black"
          >
            <span className="relative w-fit mt-[-1.00px] font-m3-title-small font-[number:var(--m3-title-small-font-weight)] text-[length:var(--m3-title-small-font-size)] tracking-[var(--m3-title-small-letter-spacing)] leading-[var(--m3-title-small-line-height)] whitespace-nowrap [font-style:var(--m3-title-small-font-style)]">
              SIGN UP
            </span>
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/login")}
            className="flex w-56 items-center justify-center gap-2 py-[21px] relative mb-[-24.00px] bg-transparent border border-white text-white"
          >
            <span className="relative w-fit mt-[-1.00px] font-m3-title-small font-[number:var(--m3-title-small-font-weight)] text-[length:var(--m3-title-small-font-size)] tracking-[var(--m3-title-small-letter-spacing)] leading-[var(--m3-title-small-line-height)] whitespace-nowrap [font-style:var(--m3-title-small-font-style)]">
              LOGIN
            </span>
          </Button>
        </div>
      </form>
    </section>
  );
};
