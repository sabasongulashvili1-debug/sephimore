"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function NewsletterForm() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Welcome to the atelier — check your inbox.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        required
        placeholder="your@email.com"
        className="rounded-none h-12 bg-background border-foreground/20"
      />
      <Button
        type="submit"
        size="lg"
        className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8"
      >
        Subscribe
      </Button>
    </form>
  );
}