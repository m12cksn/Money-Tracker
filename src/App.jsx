import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Card from "./components/Card";
import ModalForm from "./components/ModalForm";
import IncomeExpense from "./components/IncomeExpense";
import Balance from "./components/Balance";

function App() {
  const dataTransaction = [
    {
      id: 1,
      desc: "Salary",
      amount: "200000",
      status: "income",
      date: "2024-03-12",
    },
    {
      id: 2,
      desc: "Haircut",
      amount: "20000",
      status: "expense",
      date: "2024-03-15",
    },
  ];
  const [transactions, setTransactions] = useState(dataTransaction);
  // console.log(transactions, "ini transaction");

  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const IncomeExpenseData = [
    {
      icons: (
        <FiPlus className="text-green-400  bg-white p-1 rounded-full  text-3xl w-8 h-8" />
      ),
      amount: 200000,
      status: "income",
    },
    {
      icons: (
        <FiMinus className="text-red-400  bg-white p-1 rounded-full  text-3xl w-8 h-8" />
      ),
      amount: 20000,
      status: "expense",
    },
  ];

  const totalIncome = transactions
    .filter((transaction) => transaction.status === "income")
    .reduce((acc, transaction) => acc + parseInt(transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.status === "expense")
    .reduce((acc, transaction) => acc + parseInt(transaction.amount), 0);

  const balance = totalIncome - totalExpense;

  console.log(balance);

  const deleteTransactions = (id) => {
    // console.log(id, "ini id");
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    console.log(transactions, "total transaction");
  };

  // const [isOpen, setIsOpen] = useState(false);

  const addTransactions = (transaction) => {
    transaction.id = transactions.length + 1;
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="bg-blue-950 w-full h-screen ">
      <div className="max-w-md bg-gradient-to-t mx-auto pt-20 pb-3 from-blue-800 via-sky-800 to-blue-800 ">
        <Balance formatToRupiah={formatToRupiah} balance={balance} />
        <IncomeExpense
          transactions={transactions}
          formatToRupiah={formatToRupiah}
          totalExpense={totalExpense}
          totalIncome={totalIncome}
        />
        <div className="flex justify-evenly mt-12">
          <button className="w-28 hover:bg-slate-300 transition-all ease-in-out duration-200 upp rounded-sm font-semibold py-2 bg-white">
            Transaction
          </button>
          <button className="w-28 hover:bg-slate-300 transition-all ease-in-out duration-200 upp rounded-sm font-semibold py-2 bg-white">
            Income
          </button>
          <button className="w-28 hover:bg-slate-300 transition-all ease-in-out duration-200 upp rounded-sm font-semibold py-2 bg-white">
            Expense
          </button>
        </div>
      </div>
      <div className="max-w-md bg-gradient-to-t mx-auto  from-blue-800 via-sky-800 to-blue-800">
        <div className="bg-slate-700 overflow-y-scroll pt-5 h-96 mx-auto px-5 rounded-t-3xl">
          <div className="flex items-center  justify-between">
            <h1 className=" text-xl text-slate-50 font-semibold">
              Transaction
            </h1>
            <ModalForm addTransactions={addTransactions} />
          </div>
          <Card
            deleteTransactions={deleteTransactions}
            transactions={transactions}
            formatToRupiah={formatToRupiah}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
