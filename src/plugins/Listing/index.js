import React from "react";

const Listing = () => {
  return (
    <div
      role="menubar"
      className="flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm"
      tabindex="0"
      data-orientation="horizontal"
      style="outline: none;"
    >
      <button
        type="button"
        role="menuitem"
        id="radix-:r6c:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        File
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-:r6g:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Edit
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-:r6k:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        View
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-:r6o:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Profiles
      </button>
    </div>
  );
};

export default Listing;
