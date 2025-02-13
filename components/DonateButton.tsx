import React from "react";
import { Button } from "@/components/ui/button";
export function DonateButton() {
  return (
    <Button
      asChild
      className="bg-[#FF3951] hover:bg-[#FF3951]/90 text-white font-bold font-roboto uppercase tracking-[2px] text-2xl px-9 py-6 rounded"
    >
      <a href="/donation">Donate</a>
    </Button>
  );
}
