import React from "react";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center bg-white dark:bg-[#1c0d0d] p-4 border-b border-[#e6dbdb] dark:border-[#3d2a2a] justify-between">
      <div className="flex items-center gap-2">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-3xl">
            directions_car
          </span>
        </div>
        <h2 className="text-[#181111] dark:text-white text-lg font-extrabold leading-tight tracking-tight">
          Real Cars
        </h2>
      </div>
      <div className="hidden md:flex gap-6 items-center px-4">
        <a className="text-sm font-semibold text-primary" href="#">
          Home
        </a>
        <a
          className="text-sm font-semibold hover:text-primary transition-colors"
          href="#"
        >
          Our Fleet
        </a>
        <a
          className="text-sm font-semibold hover:text-primary transition-colors"
          href="#"
        >
          Services
        </a>
        <a
          className="text-sm font-semibold hover:text-primary transition-colors"
          href="#"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-xl">
          call
        </span>
        <p className="text-[#181111] dark:text-white text-sm font-bold leading-normal">
          0800-REAL-CARS
        </p>
      </div>
    </nav>
  );
}
