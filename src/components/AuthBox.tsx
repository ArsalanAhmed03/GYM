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
    const handleToggle = () => setIsLogin((prev) => !prev);
  
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
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <button className="text-xs text-red-500" type="button">
                      Forgot password?
                    </button>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember for 30 days</Label>
                </div>
                <Button className="w-full py-2">Login</Button>
                <div className="flex items-center justify-center gap-2">
                  <Separator className="flex-1 h-px" />
                  <span className="text-xs text-gray-500">Or</span>
                  <Separator className="flex-1 h-px" />
                </div>
                <p className="text-center text-sm">
                  Don’t have an account?{' '}
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
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full py-2">Sign Up</Button>
                <div className="flex items-center justify-center gap-2">
                  <Separator className="flex-1 h-px" />
                  <span className="text-xs text-gray-500">Or</span>
                  <Separator className="flex-1 h-px" />
                </div>
                <p className="text-center text-sm">
                  Already have an account?{' '}
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
          style={{ backgroundImage: "url(../frame-65.png)" }}
          animate={{ x: isLogin ? '0%' : '-100%' }}
          transition={{ type: 'tween', duration: 0.8, ease: 'easeInOut' }}
        />
      </div>
  );
};

