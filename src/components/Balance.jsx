import React from "react";

const Balance = ({ formatToRupiah, balance }) => {
  return (
    <div className=" mx-auto ">
      <h1 className="text-5xl mb-2 text-green-400 font-bold   text-center">
        Balance
      </h1>
      <h1 className="text-4xl font-bold text-slate-50 text-center">
        {formatToRupiah(balance)}
      </h1>
      <p className="text-center text-slate-300 text-sm">monthly cash flow</p>
    </div>
  );
};

export default Balance;
