"use client";
import { useEffect } from "react";
import { toast } from "sonner";

export default function HomePage() {
  useEffect(() => {
    toast.success("Event has been created.");
  }, []);

  return <div>Home</div>;
}
