import React from "react";
import Image from "next/image";
import noMessage from "@/assets/noMessage.svg";

export default function main() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="pb-4 w-fit mx-auto">
          <Image src={noMessage} alt="Illustration for No Message" />
        </div>
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-2xl font-semibold">
            It&apos;s the beginning of a legendary sales pipeline
          </h1>
          <p className="text-base text-[#9E9E9E] w-3/4 mx-auto">
            When you have inbound E-mails you&apos;ll see them here
          </p>
        </div>
      </div>
    </>
  );
}
