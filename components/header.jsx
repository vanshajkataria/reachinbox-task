import React from "react";
import SwitchUI from "@/components/UI/switchUI"
import WorkspaceDropdown from "@/components/UI/workspaceDropdownUI"

export default function header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1>Onebox</h1>
        </div>
        <div className="flex justify-end items-center gap-6">
          <SwitchUI />
          <WorkspaceDropdown />
        </div>
      </div>
    </>
  );
}
