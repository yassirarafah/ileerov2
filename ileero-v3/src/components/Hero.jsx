import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const currencies = [
  { id: 0, name: "British Pounds", icon: "uk.svg", short: "GBP" },
  { id: 1, name: "Nigerian Naira", icon: "ng.svg", short: "NGN" },
  { id: 2, name: "Euro", icon: "eu.svg", short: "EUR" },
  { id: 3, name: "Kenyan Shilling", icon: "ky.svg", short: "KES" },
  { id: 4, name: "Ghanian Cedis", icon: "gh.svg", short: "GHS" },
];

const Hero = () => {
  const [selected1, setSelected1] = useState(0);
  const [selected2, setSelected2] = useState(2);

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const selectCurr1 = (i)=>{
    setSelected1(i);
    toggleModal1();
  }

  const selectCurr2 = (i)=>{
    setSelected2(i);
    toggleModal2();
  }

  const toggleModal1 = () => {
    setModal2(false);
    setModal1(!modal1);
  };
  const toggleModal2 = () => {
    setModal1(false);
    setModal2(!modal2);
    
  };

  return (
    <main className="main-hero min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1100px] mx-auto p-4 md:p-10 py-20 gap-y-5 md:gap-y-0">
        <div className="flex flex-col justify-center space-y-5  h-full">
          <h1 className="text-white text-4xl font-extrabold text-center md:text-justify">
            Introducing The Easy &#38; <br /> Fast way to send Money
          </h1>
          <p className="text-lg font-semibold text-white text-justify mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis molestias reiciendis, vitae molestiae enim rem maxime ab
            minima dicta voluptatum soluta autem.
          </p>
          <div className="bg-white rounded flex items-center justify-center font-semibold text-[#1894F8] w-[142px] h-[48px]">
            Get Started
          </div>
        </div>
        <div className="flex justify-center">
          <div className="card">
            <div className="card-header">
              <h6>Exchange Rate</h6>
              <h2>
                <strong>GBP 1 = 459 NGN</strong>
              </h2>
            </div>
            <div className="card-body">
              <form className="relative" action>
                <div className="input-box">
                  <input
                    type="text"
                    className="payment-input"
                    placeholder="You Send"
                  />
                  <div
                    className="currency-select cursor-pointer"
                    onClick={toggleModal1}
                  >
                    <div className="select-box">
                      <div className="select-items">
                        {
                          <>
                            <img
                              src={`/currencies/${currencies[selected1].icon}`}
                              className="svg-icon"
                              alt=""
                            />
                            <span>{currencies[selected1].short}</span>
                          </>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    className="payment-input"
                    placeholder="Receipient gets"
                  />
                  <div className="currency-select cursor-pointer"  onClick={toggleModal2}>
                    <div className="select-box">
                      <div className="select-items">
                        {
                          <>
                            <img
                              src={`/currencies/${currencies[selected2].icon}`}
                              className="svg-icon"
                              alt=""
                            />
                            <span>{currencies[selected2].short}</span>
                          </>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="just-div">
                  <p>Delivery Method</p>
                  <select name id className>
                    <option value={1}>Bank Transfer</option>
                  </select>
                </div>
                <div className="just-div">
                  <p>Include Fees</p>
                  <input type="checkbox" />
                </div>
                <div className="just-div">
                  <p>Fee</p>
                  <p>GBP 1.00</p>
                </div>
                <div className="just-div">
                  <h3>Total to pay</h3>
                  <h3>GBP 1,001.00</h3>
                </div>
                <button className="btn-block">Continue</button>

                <div
                  className={`${
                    modal1 ? "block" : "hidden"
                  } absolute inset-0 m-auto w-[95%] max-h-min rounded bg-white border shadow-md p-4 px-6`}
                >
                  <div className="flex items-center justify-end cursor-pointer my-1">
                    <FaTimes className="w-4 h-4" onClick={toggleModal1}  />
                  </div>
                  <div className="w-full flex flex-col space-y-2">
                    {currencies && currencies.length > 0 ? (
                      <>
                        {currencies.map((currency) => (
                          <div className={`grid grid-cols-5 gap-x-1 group hover:bg-[#1894F8] hover:text-white cursor-pointer rounded p-1 ${selected1 === currency.id ? "bg-[#1894F8] !text-white" : "bg-white"}`} onClick={()=>selectCurr1(currency.id)}>
                            <img
                              src={`/currencies/${currency.icon}`}
                              className="svg-icon"
                              alt=""
                            />
                            <span className="font-medium">
                              {currency.short}
                            </span>

                            <p className={`col-span-3 group-hover:text-white ${selected1 === currency.id ? "!text-white" : ""}`}>
                              {currency.name}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </div>
                </div>
                <div
                  className={`${
                    modal2 ? "block" : "hidden"
                  } absolute inset-0 m-auto w-[95%] max-h-min rounded bg-white border shadow-md p-4 px-6`}
                >
                  <div className="flex items-center justify-end cursor-pointer my-1">
                    <FaTimes className="w-4 h-4" onClick={toggleModal2}  />
                  </div>
                  <div className="w-full flex flex-col space-y-2">
                    {currencies && currencies.length > 0 ? (
                      <>
                        {currencies.map((currency) => (
                          <div className={`grid grid-cols-5 gap-x-1 group hover:bg-[#1894F8] hover:text-white cursor-pointer rounded p-1 ${selected2 === currency.id ? "bg-[#1894F8] !text-white" : "bg-white"}`} onClick={()=>selectCurr2(currency.id)}>
                            <img
                              src={`/currencies/${currency.icon}`}
                              className="svg-icon"
                              alt=""
                            />
                            <span className="font-medium">
                              {currency.short}
                            </span>

                            <p className={`col-span-3 group-hover:text-white ${selected2 === currency.id ? "!text-white" : ""}`}>
                              {currency.name}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </div>
                </div>
              </form>
              <div className="fees-notice">
                <p>“TRANSACTION FEES MAY APPLY”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
