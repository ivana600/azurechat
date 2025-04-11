"use client";
import { Hero } from "@/features/ui/hero";
import { Sheet } from "lucide-react";

export const ReportingHero = () => {
  return (
    <Hero
      title={
        <>
          <Sheet size={36} strokeWidth={1.5} />
          Chat reports for FlayerGPT has been disabled for admins to keep Slex's thoughts and communications private. Oh, and user inquires private too, I guess, the LnL lawyers tell me...
        </>
    ></Hero>
  );
};
