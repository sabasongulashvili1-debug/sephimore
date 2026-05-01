"use client";
import { Button } from "@/components/ui/button";

export function HomeClient() {
  return (
    <div className="flex gap-4">
      <Button
        size="lg"
        className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8"
        onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
      >
        Shop the Collection
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="rounded-none px-8 border-foreground/20"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        Our Story
      </Button>
    </div>
  );
}