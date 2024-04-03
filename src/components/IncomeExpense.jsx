import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const IncomeExpense = ({
  transactions,
  formatToRupiah,
  totalIncome,
  totalBalance,
}) => {
  return (
    <div className="flex   justify-between px-7 gap-5 max-w-sm py-2 border-spacing-2 border border-slate-200 rounded-lg mx-auto mt-7 ">
      {transactions.map((item, index) => (
        <div key={index} className="flex items-center gap-3  ">
          {item.status === "income" ? (
            <FiPlus className="text-green-400   bg-white p-1 rounded-full  text-3xl w-8 h-8" />
          ) : (
            <FiMinus className="text-red-400  bg-white p-1 rounded-full  text-3xl w-8 h-8" />
          )}

          <div>
            <h1 className="text-lg  text-slate-50 font-semibold">
              {formatToRupiah(totalIncome)}
            </h1>
            <p className=" text-sm text-slate-300  -mt-1">{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncomeExpense;
