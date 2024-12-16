import React from "react";

export default function Button({ buttonName, onClick }) {
  return (
    <>
      <button
        className="bg-slate-900 text-white px-3 py-2 rounded-md"
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  );
}
