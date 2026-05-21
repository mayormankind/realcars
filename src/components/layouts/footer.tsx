import React from "react";

export default function Footer() {
  return (
    // Footer
    <footer className="mt-20 bg-white dark:bg-[#1c0d0d] border-t border-[#e6dbdb] dark:border-[#3d2a2a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">
              directions_car
            </span>
            <h2 className="text-xl font-extrabold">Real Cars</h2>
          </div>
          <p className="text-[#8a6060] dark:text-gray-400 text-sm leading-relaxed">
            Akure's leading provider of premium car rental services. Luxury,
            comfort, and reliability delivered to your doorstep.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-[#8a6060] dark:text-gray-400">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              info@realcarsakure.com
            </div>
            <div className="flex items-center gap-3 text-sm text-[#8a6060] dark:text-gray-400">
              <span className="material-symbols-outlined text-primary">
                phone_iphone
              </span>
              +234 800 123 4567
            </div>
            <div className="flex items-start gap-3 text-sm text-[#8a6060] dark:text-gray-400">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
              123 Alagbaka Extension,
              <br />
              Akure, Ondo State
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-[#8a6060] dark:text-gray-400">
            <li>
              <a className="hover:text-primary" href="#">
                About Company
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-[#f20d0d]/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-[#f20d0d]/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">camera</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-[#f20d0d]/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
          </div>
          <div className="mt-4">
            <img
              alt="Trusted partner logos or payment methods"
              className="h-10 opacity-70"
              data-alt="Trusted partner logos or payment methods"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJ7pXki6HZcbdqa9xV8gy495F4mrIfUCUHNmsuZkgWWbngNwHMqQaJ3yUZ3Ea83k1o3ISx1bLeRibZYnxjDZUIyFVVcUHteBOkC7tlKbjYnTs_wR6OZGYYvEwhPdMSQBYY0ODFUv44ldMLVNdO7N0NYbjHXB4bYlH5XcwnrVGcj1-Ga1gAH7vs_PDkmsN7y3Pn95slI05yZ6MPal_JkL9RareyXqMTnCv0QvXqZy5HMh8skgrTKHk6jyH4BMqm_N8dRNlKIf6szs"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-[#e6dbdb] dark:border-[#3d2a2a] text-center text-sm text-[#8a6060] dark:text-gray-500">
        © 2024 Real Cars Transport. All rights reserved.
      </div>
    </footer>
  );
}
