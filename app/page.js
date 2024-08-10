import React from "react";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Main from "@/components/main";

export default function page() {
  return (
    <>
      <nav className="flex-none h-full w-fit px-4 py-6 border-r border-[#343A40]">
        <Navbar />
      </nav>
      <main className="grow flex flex-col">
        <header className="flex-none w-full h-fit p-6 border-b border-[#343A40]">
          <Header />
        </header>
        <section className="glow flex justify-center items-center h-full">
          <Main />
        </section>
      </main>
    </>
  );
}
