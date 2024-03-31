import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Card from "./components/Card";
import ModalForm from "./components/ModalForm";

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

  // const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState(dataTransaction);

  const addTransactions = (transaction) => {
    transaction.id = transaction.length + 1;
    setTransactions([...transactions, transaction]);
  };

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };
  return (
    <div className="bg-blue-950 w-full h-screen ">
      <div className="max-w-md bg-gradient-to-t mx-auto pt-20 pb-3 from-blue-800 via-sky-800 to-blue-800 ">
        <div className=" mx-auto ">
          <h1 className="text-4xl font-bold text-slate-50 text-center">
            $2,40,081
          </h1>
          <p className="text-center text-slate-300 text-sm">
            monthly cash flow
          </p>
        </div>
        <div className="flex  justify-evenly gap-5 max-w-xs py-2 border-spacing-2 border border-slate-200 rounded-lg mx-auto mt-7 ">
          <div className="flex items-center gap-3 ">
            <FiPlus className="text-green-400  bg-white p-1 rounded-full  text-3xl w-8 h-8" />
            <div>
              <h1 className="text-lg  text-slate-50 font-semibold">
                $4,00,000
              </h1>
              <p className=" text-sm text-slate-300  -mt-1">income</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <FiMinus className="text-red-400  bg-white p-1 rounded-full  text-3xl w-8 h-8" />
            <div>
              <h1 className="text-lg  text-slate-50 font-semibold">
                $4,00,000
              </h1>
              <p className=" text-sm text-slate-300  -mt-1">income</p>
            </div>
          </div>
        </div>
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
        <div className="bg-slate-700 pt-5 h-96 mx-auto px-5 rounded-t-3xl">
          <div className="flex items-center  justify-between">
            <h1 className=" text-xl text-slate-50 font-semibold">
              Transaction
            </h1>
            <ModalForm />
          </div>
          <Card transactions={transactions} addTransactions={addTransactions} />
        </div>
      </div>
    </div>
    // <div className="relative">
    //   {/* Tombol untuk membuka modal */}
    //   <button
    //     onClick={openModal}
    //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //   >
    //     Open Modal
    //   </button>

    //   {/* Modal */}
    //   {isOpen && (
    //     <div className="fixed z-10 inset-0 overflow-y-auto">
    //       <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    //         {/* Latar belakang gelap */}
    //         <div
    //           className="fixed inset-0 transition-opacity"
    //           onClick={closeModal}
    //         >
    //           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    //         </div>

    //         {/* Konten modal */}
    //         <span
    //           className="hidden sm:inline-block sm:align-middle sm:h-screen"
    //           aria-hidden="true"
    //         ></span>
    //         <div
    //           className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    //           role="dialog"
    //           aria-modal="true"
    //           aria-labelledby="modal-headline"
    //         >
    //           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    //             <div className="sm:flex sm:items-start">
    //               <div className="mt-3 text-center sm:mt-0 sm:text-left">
    //                 <h3
    //                   className="text-lg leading-6 font-medium text-gray-900"
    //                   id="modal-headline"
    //                 >
    //                   Modal Title
    //                 </h3>
    //                 <div className="mt-2">
    //                   <p className="text-sm text-gray-500">
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                     Aliquid pariatur, ipsum similique veniam est quo tempore
    //                     magnam suscipit placeat unde inventore distinctio quas?
    //                     Laborum eos at neque ipsa facere eveniet?
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    //             <button
    //               onClick={closeModal}
    //               type="button"
    //               className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
    //             >
    //               Close
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
