"use client";
import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";

function usePreferredColorScheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial state
    setIsDarkMode(mediaQuery.matches);

    // Update state when preference changes
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDarkMode;
}

export default function SwitchUI() {
  const isDarkMode = usePreferredColorScheme();
  const [enabled, setEnabled] = useState(isDarkMode);

  useEffect(() => {
    setEnabled(isDarkMode);
  }, [isDarkMode]);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-[#222426] transition data-[checked]:bg-[#222426] relative"
    >
      {/* Light Mode Icon Start */}
      <span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inset-y-1 left-1 absolute"
        >
          <path
            d="M5.0275 2.1325C4.8925 2.6125 4.825 3.115 4.825 3.625C4.825 6.685 7.315 9.175 10.375 9.175C10.885 9.175 11.3875 9.1075 11.8675 8.9725C11.0875 10.8925 9.1975 12.25 7 12.25C4.105 12.25 1.75 9.895 1.75 7C1.75 4.8025 3.1075 2.9125 5.0275 2.1325ZM7 0.25C3.2725 0.25 0.25 3.2725 0.25 7C0.25 10.7275 3.2725 13.75 7 13.75C10.7275 13.75 13.75 10.7275 13.75 7C13.75 6.655 13.72 6.31 13.675 5.98C12.94 7.0075 11.74 7.675 10.375 7.675C8.14 7.675 6.325 5.86 6.325 3.625C6.325 2.2675 6.9925 1.06 8.02 0.325C7.69 0.28 7.345 0.25 7 0.25Z"
            fill="#E8C364"
          />
        </svg>
      </span>
      {/* Light Mode Icon End */}
      <span className="size-4 translate-x-1 rounded-full bg-[#888686] transition group-data-[checked]:translate-x-6 absolute z-10" />
      {/* Dark Mode Icon Start */}
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right-1 inset-y-1 absolute"
        >
          <path
            d="M8 5.81818C9.2 5.81818 10.1818 6.8 10.1818 8C10.1818 9.2 9.2 10.1818 8 10.1818C6.8 10.1818 5.81818 9.2 5.81818 8C5.81818 6.8 6.8 5.81818 8 5.81818ZM8 4.36364C5.99273 4.36364 4.36364 5.99273 4.36364 8C4.36364 10.0073 5.99273 11.6364 8 11.6364C10.0073 11.6364 11.6364 10.0073 11.6364 8C11.6364 5.99273 10.0073 4.36364 8 4.36364ZM0.727273 8.72727H2.18182C2.58182 8.72727 2.90909 8.4 2.90909 8C2.90909 7.6 2.58182 7.27273 2.18182 7.27273H0.727273C0.327273 7.27273 0 7.6 0 8C0 8.4 0.327273 8.72727 0.727273 8.72727ZM13.8182 8.72727H15.2727C15.6727 8.72727 16 8.4 16 8C16 7.6 15.6727 7.27273 15.2727 7.27273H13.8182C13.4182 7.27273 13.0909 7.6 13.0909 8C13.0909 8.4 13.4182 8.72727 13.8182 8.72727ZM7.27273 0.727273V2.18182C7.27273 2.58182 7.6 2.90909 8 2.90909C8.4 2.90909 8.72727 2.58182 8.72727 2.18182V0.727273C8.72727 0.327273 8.4 0 8 0C7.6 0 7.27273 0.327273 7.27273 0.727273ZM7.27273 13.8182V15.2727C7.27273 15.6727 7.6 16 8 16C8.4 16 8.72727 15.6727 8.72727 15.2727V13.8182C8.72727 13.4182 8.4 13.0909 8 13.0909C7.6 13.0909 7.27273 13.4182 7.27273 13.8182ZM3.62909 2.60364C3.34545 2.32 2.88 2.32 2.60364 2.60364C2.32 2.88727 2.32 3.35273 2.60364 3.62909L3.37455 4.4C3.65818 4.68364 4.12364 4.68364 4.4 4.4C4.67636 4.11636 4.68364 3.65091 4.4 3.37455L3.62909 2.60364ZM12.6255 11.6C12.3418 11.3164 11.8764 11.3164 11.6 11.6C11.3164 11.8836 11.3164 12.3491 11.6 12.6255L12.3709 13.3964C12.6545 13.68 13.12 13.68 13.3964 13.3964C13.68 13.1127 13.68 12.6473 13.3964 12.3709L12.6255 11.6ZM13.3964 3.62909C13.68 3.34545 13.68 2.88 13.3964 2.60364C13.1127 2.32 12.6473 2.32 12.3709 2.60364L11.6 3.37455C11.3164 3.65818 11.3164 4.12364 11.6 4.4C11.8836 4.67636 12.3491 4.68364 12.6255 4.4L13.3964 3.62909ZM4.4 12.6255C4.68364 12.3418 4.68364 11.8764 4.4 11.6C4.11636 11.3164 3.65091 11.3164 3.37455 11.6L2.60364 12.3709C2.32 12.6545 2.32 13.12 2.60364 13.3964C2.88727 13.6727 3.35273 13.68 3.62909 13.3964L4.4 12.6255Z"
            fill="#E8C364"
          />
        </svg>
      </span>
      {/* Dark Mode Icon End */}
    </Switch>
  );
}
