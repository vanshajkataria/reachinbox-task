import React from "react";
import SwitchUI from "@/components/UI/switchUI"

export default function header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1>Onebox</h1>
        </div>
        <div>
          <SwitchUI />
        </div>
      </div>
    </>
  );
}
