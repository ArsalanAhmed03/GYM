import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthBox: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Set isLogin based on path on mount
  React.useEffect(() => {
    if (location.pathname === "/signup") {
      setIsLogin(false);
    } else if (location.pathname === "/login") {
      setIsLogin(true);
    }
  }, [location.pathname]);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Authentication failed");
      }

      const data = await response.json();

      // Store the token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to home page
      navigate("/");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during authentication"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-screen w-full bg-white overflow-hidden">
      {/* Panels */}
      <div className="flex w-full h-full">
        {/* Login Panel */}
        <div className="w-1/2 flex flex-col items-center justify-center p-8 gap-6">
          <img
            src="/logo-no-background-1.png"
            alt="Logo"
            className="w-[131px] h-[50px] object-cover"
          />
          <Card className="border-none shadow-none w-full max-w-md">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <h1 className="font-medium text-[32px]">Welcome back!</h1>
                <p className="text-sm text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <button className="text-xs text-red-500" type="button">
                      Forgot password?
                    </button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember for 30 days</Label>
                </div>
                <Button
                  className="w-full py-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
              </form>
              <div className="flex items-center justify-center gap-2">
                <Separator className="flex-1 h-px" />
                <span className="text-xs text-gray-500">Or</span>
                <Separator className="flex-1 h-px" />
              </div>
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <button
                  className="text-red-500 underline"
                  type="button"
                  onClick={handleToggle}
                >
                  Sign Up
                </button>
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Signup Panel */}
        <div className="w-1/2 flex flex-col items-center justify-center p-8 gap-6">
          <img
            src="/logo-no-background-1.png"
            alt="Logo"
            className="w-[131px] h-[50px] object-cover"
          />
          <Card className="border-none shadow-none w-full max-w-md">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <h1 className="font-medium text-[32px]">Create your account</h1>
                <p className="text-sm text-gray-600">
                  Fill in the details to sign up
                </p>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  className="w-full py-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Sign Up"}
                </Button>
              </form>
              <div className="flex items-center justify-center gap-2">
                <Separator className="flex-1 h-px" />
                <span className="text-xs text-gray-500">Or</span>
                <Separator className="flex-1 h-px" />
              </div>
              <p className="text-center text-sm">
                Already have an account?{" "}
                <button
                  className="text-red-500 underline"
                  type="button"
                  onClick={handleToggle}
                >
                  Login
                </button>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <motion.div
        className="absolute top-0 left-1/2 h-full w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url(../bg2.png)" }}
        animate={{ x: isLogin ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
};
