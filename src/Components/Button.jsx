import React from "react";

const Button = ({ title }) => {
  return (
    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg">
      {title}
    </button>
  );
};

export default Button;
