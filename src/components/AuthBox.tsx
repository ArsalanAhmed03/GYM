import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

export const AuthBox: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => setIsLogin(prev => !prev);

  return (
    <div className="flex h-screen items-center justify-center w-full bg-white overflow-hidden">
      {/* Form Side */}
      <motion.div
        className="flex flex-col w-1/2 h-full items-center justify-center gap-4 relative p-8"
        animate={{ x: isLogin ? 0 : -"50%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col w-[482px] items-center gap-6">
          {/* Logo */}
          <img
            src="/logo-no-background-1.png"
            alt="Logo"
            className="w-[131px] h-[50px] object-cover"
          />

          <Card className="border-none shadow-none w-full">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <h1 className="font-medium text-[32px] font-['Poppins',Helvetica]">
                  {isLogin ? "Welcome back!" : "Create your account"}
                </h1>
                <p className="font-medium text-base font-['Poppins',Helvetica]">
                  {isLogin
                    ? "Enter your Credentials to access your account"
                    : "Fill in the details to sign up"}
                </p>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-medium text-sm">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="h-8 rounded-[10px] border-[#d9d9d9] text-[10px] font-medium placeholder:text-app-muted"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-sm">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-8 rounded-[10px] border-[#d9d9d9] text-[10px] font-medium placeholder:text-app-muted"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-medium text-sm">
                    Password
                  </Label>
                  {isLogin && (
                    <button
                      className="font-medium text-[10px] text-red-500"
                      type="button"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-8 rounded-[10px] border-[#d9d9d9] text-[10px] font-medium placeholder:text-app-muted"
                />
              </div>

              {isLogin && (
                <div className="flex items-center gap-1.5">
                  <Checkbox id="remember" className="w-[9px] h-[9.96px]" />
                  <label htmlFor="remember" className="font-medium text-[9px]">
                    Remember for 30 days
                  </label>
                </div>
              )}

              <Button className="w-full h-8 bg-red-500 hover:bg-red-600 rounded-[10px] font-bold text-[13px]">
                {isLogin ? "Login" : "Sign Up"}
              </Button>

              <div className="relative flex items-center justify-center">
                <Separator className="w-[400px] absolute" />
                <span className="bg-white px-3 z-10 font-medium text-[9px]">
                  Or
                </span>
              </div>

              <div className="flex items-center justify-center">
                <p className="font-medium text-sm">
                  {isLogin
                    ? "Don’t have an account?"
                    : "Already have an account?"}
                  &nbsp;
                  <button
                    className="text-red-500 underline"
                    type="button"
                    onClick={handleToggle}
                  >
                    {isLogin ? "Sign Up" : "Login"}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url(../frame-65.png)" }}
        animate={{ x: isLogin ? 0 : -"50%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

