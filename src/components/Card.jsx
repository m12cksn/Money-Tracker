import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { FaBatteryEmpty } from "react-icons/fa";

const Card = ({ transactions, formatToRupiah, deleteTransactions }) => {
  return (
    <div className="bg-black ">
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <div
            key={index}
            className="py-2 max-w-md mx-auto px-5 flex items-center bg-slate-100 shadow rounded mt-3 justify-between"
          >
            <div className="flex items-center gap-3 ">
              {transaction.status === "income" ? (
                <FiPlus className="text-white  bg-green-400 p-1 rounded-full  text-3xl w-10 h-10" />
              ) : (
                <FiMinus className="text-white  bg-red-400 p-1 rounded-full  text-3xl w-10 h-10" />
              )}

              <div className="">
                <h1 className="text-lg font-semibold text-slate-900 ">
                  {transaction.desc}
                </h1>
                <p className="text-xs text-slate-500 ">{transaction.date}</p>
              </div>
            </div>
            <h1
              className={`${
                transaction.status === "income"
                  ? "text-xl text-green-400 font-semibold"
                  : "text-xl font-semibold text-red-400"
              }`}
            >
              {formatToRupiah(transaction.amount)}
            </h1>
            <button onClick={() => deleteTransactions(transaction.id)}>
              <RiDeleteBin4Line className="text-white  bg-red-400 p-1 rounded-full  text-2xl w-8 h-8" />
            </button>
          </div>
        ))
      ) : (
        <div className="py-2 max-w-md mx-auto px-5 flex items-center bg-slate-100 shadow rounded mt-3 justify-between">
          <div className="flex items-center gap-3 ">
            <FaBatteryEmpty className="text-white  bg-red-400 p-1 rounded-full  text-3xl w-10 h-10" />
            <div className="">
              <h1 className="text-lg font-semibold text-slate-900 ">No data</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
