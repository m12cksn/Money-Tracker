import React from "react";
import { useState } from "react";
import { BsClipboardPlus } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";

const ModalForm = ({ addTransactions }) => {
  const [openModal, setOpenModal] = useState(false);

  const initialFormState = { id: null, desc: "", amount: 0, date: "" };

  const [transaction, setTransaction] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const toogleModal = () => {
    setOpenModal(!openModal);
    // alert("test");
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <button
        onClick={toogleModal}
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="px-2 py-2 bg-green-500 text-lg rounded-sm text-white font-bold"
        type="button"
      >
        <BsClipboardPlus />
      </button>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden={!openModal}
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          openModal ? "" : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full top-20 -translate-x-1/2 left-1/2">
          {/* <!-- Modal content --> */}
          <div className="relative backdrop-blur-md bg-white/10">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button
                onClick={onCloseModal}
                type="button"
                className=" bg-transparent text-white rounded-lg text-sm  ms-auto flex justify-center items-center "
                data-modal-toggle="crud-modal"
              >
                <FaWindowClose className="w-6 h-6 hover:text-slate-300 ease-in-out transition-all duration-300" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (!transaction) return;

                addTransactions(transaction);
                setTransaction(initialFormState);
              }}
              className="p-4 md:p-5"
            >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={transaction.desc}
                    name="desc"
                    id="name"
                    className=" text-sm  block w-full p-2.5 shadow outline-none "
                    placeholder="Type product name"
                    required=""
                  ></input>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    value={transaction.amount}
                    onChange={handleChange}
                    name="amount"
                    id="price"
                    className=" text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="$2999"
                    required=""
                  ></input>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    name="status"
                    id="category"
                    onChange={handleChange}
                    value={transaction.status}
                    className=" text-sm w-full outline-none p-2.5 "
                  >
                    <option value="">Select category</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date
                  </label>
                  <input
                    className="p-2 w-full outline-none"
                    type="date"
                    onChange={handleChange}
                    id="date"
                    name="date"
                    value={transaction.date}
                    min="2010-01-01"
                    max="2030-01-01"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-sky-500 inline-flex items-center  outline-none  font-medium rounded-sm text-sm px-5 py-2.5 text-center "
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
