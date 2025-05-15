import { CheckIcon, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface PricingPlan {
  _id: string;
  name: string;
  price: number;
  billingPeriod: "monthly" | "quarterly" | "yearly";
  features: Array<{
    name: string;
    included: boolean;
  }>;
  tierLevel: number;
}

export const PriceRange1 = (): JSX.Element => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("https://gym-backend-ujzl.onrender.com/api/pricing-plans");
        if (!response.ok) {
          throw new Error("Failed to fetch pricing plans");
        }
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [user]);

  const handlePlanSelection = async (planId: string) => {
    if (!isAuthenticated) {
      // Store the selected plan ID in localStorage before redirecting
      localStorage.setItem("selectedPlanId", planId);
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        "https://gym-backend-ujzl.onrender.com/api/pricing-plans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user?._id,
            planId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update plan");
      }

      // Show success message or update UI
      alert("Plan updated successfully!");
    } catch (error) {
      alert("Failed to update plan. Please try again.");
    }
  };

  const getButtonText = (plan: PricingPlan) => {
    if (!isAuthenticated) return "Join Now";
    if (!user?.currentPlan) return "Join Now";

    const currentPlan = plans.find((p) => p._id === user.currentPlan);
    if (!currentPlan) return "Join Now";

    if (plan.tierLevel > currentPlan.tierLevel) return "Upgrade Plan";
    if (plan.tierLevel < currentPlan.tierLevel) return "Downgrade Plan";
    return "Current Plan";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full gap-8">
      {plans.map((plan) => (
        <Card
          key={plan._id}
          className={`w-[367.89px] bg-[#101823] rounded-lg overflow-hidden shadow-[0px_10px_15px_-3px_#0000001a,0px_4px_6px_-4px_#0000001a] transition-all duration-300 hover:border-[#ff4b2b] border-4 border-transparent
          ${user?.currentPlan === plan._id ? "border-[#ff4b2b]" : ""}`}
        >
          <CardHeader className="p-6 pb-0">
            <div className="flex items-center gap-2 w-full">
              <div className="[font-family:'Roboto',Helvetica] font-bold text-gray-300 text-2xl tracking-[0] leading-8">
                {plan.name}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-center gap-2 w-full">
              <div className="[font-family:'Roboto',Helvetica] font-bold text-gray-300 text-4xl tracking-[0] leading-10">
                ${plan.price}/{plan.billingPeriod}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center w-full h-6 gap-2"
                >
                  {feature.included ? (
                    <CheckIcon className="w-4 h-4 text-gray-300" />
                  ) : (
                    <XIcon className="w-4 h-4 text-gray-300" />
                  )}
                  <div className="[font-family:'Roboto',Helvetica] font-normal text-gray-300 text-base tracking-[0] leading-6">
                    {feature.name}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button
              className={`w-fit ${
                user?.currentPlan === plan._id
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-700 hover:bg-gray-600"
              } text-white rounded`}
              onClick={() => handlePlanSelection(plan._id)}
            >
              {getButtonText(plan)}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
