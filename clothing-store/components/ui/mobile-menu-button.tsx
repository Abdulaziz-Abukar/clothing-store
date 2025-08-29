"use client";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export function MobileMenuButton() {
  const [open, setOpen] = useState(false);
  return (
    <button className="text-text" aria-label="Open menu">
      <Hamburger
        toggled={open}
        toggle={setOpen}
        size={20}
        duration={0.4}
        distance="md"
        color="currentColor"
        rounded
        label="Open menu"
        hideOutline={false}
      />
    </button>
  );
}
