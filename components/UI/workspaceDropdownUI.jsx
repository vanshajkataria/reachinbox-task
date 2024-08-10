import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function workspaceDropdownUI() {
  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 py-1.5 px-3 text-sm/6 font-semibold text-white after:content-['▾'] data-[open]:after:rotate-180 after:duration-300 after:ease-in-out after:transition-all">
          Tim&apos;s Workspace
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-60 origin-top-right rounded-xl border border-white/5 bg-white/15 backdrop-blur-2xl p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 text-center"
        >
          <MenuItem>
            <span className="text-[#9E9E9E]">No Other Workspace Available</span>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
