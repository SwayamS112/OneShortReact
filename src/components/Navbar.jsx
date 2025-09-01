import React from "react";

function Navbar() {
  return (
    <div className="bg-emerald-600 flex justify-between items-center p-4 border-b">

      <div className="font-bold text-lg">MyWebsite</div>

      <div className="flex gap-6">
        <span className="text-3xl">Home</span>
        <span className="text-3xl">About</span>
        <span className="text-3xl">Contact</span>
      </div>
    </div>
  );
}

export default Navbar;
