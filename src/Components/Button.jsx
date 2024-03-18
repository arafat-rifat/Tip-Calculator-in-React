import React from "react";

const Button = ({ title , onSetBill,onSetServiceTip,SetFriendServiceTip}) => {
  
  function handleReset(){
    
    onSetBill("");
    onSetServiceTip(0);
    SetFriendServiceTip(0);

  }

  return (
    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg"
    onClick={handleReset}
    >
      {title}
    </button>
  );
};

export default Button;
