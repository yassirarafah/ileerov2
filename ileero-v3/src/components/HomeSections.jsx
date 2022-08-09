import React from "react";
import WhyChooseCards from "./sections/WhyChooseCards";
import HowWorksCard from "./sections/HowWorksCard";
import Testimonial from "./Testimonial";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";

const HomeSections = () => {
  return (
    <>
      <section className="max-w-[1100px] mx-auto p-10 py-20 bg-white min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 className="text-2xl font-bold text-black text-center">
            Why Choose Ileero Remit
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum{" "}
            <br />
            recusandae, pariatur facere ea accusantium nesciunt nam!.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 gap-10 gap-y-5 md:gap-y-20">
          <WhyChooseCards />
          <WhyChooseCards />
          <WhyChooseCards />
          <WhyChooseCards />
          <WhyChooseCards />
          <WhyChooseCards />
        </div>
      </section>
      <section className="p-5 md:p-10 md:py-20 bg-[#011A1D] min-h-min md:min-h-screen ">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center text-white space-y-5">
            <div>
              <h1 className="text-3xl font-bold text-center">
                Send Money to Countries around the globe
              </h1>
              <p className="text-center text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                adipisicing elit.
                <br /> Omnis doloremque ad mollitia atque quibusdam.
              </p>
            </div>

            <div className="bg-white rounded flex items-center justify-center font-semibold text-[#1894F8] mt-3 w-[172px] h-[48px] cursor-pointer">
              Transfer Partners
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 ">
            <img src="/world.png" alt="" className="object-cover " srcSet="" />
          </div>
        </div>
      </section>
      <section className="bg-white p-5 md:p-10 md:py-20 min-h-screen">
        <div className="flex flex-col items-center justify-center text-black space-y-5">
          <div>
            <h1 className="text-3xl font-bold text-center">How it works</h1>
            <p className="text-center text-sm font-normal mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              adipisicing elit.
              <br /> Omnis doloremque ad mollitia atque quibusdam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  max-w-6xl gap-2 md:mt-5 mx-auto">
          <HowWorksCard color={"bg-[#00D1FC]"} />
          <HowWorksCard color={"bg-[#FB9D44]"} />
          <HowWorksCard color={"bg-[#FD4D54]"} />
          <HowWorksCard color={"bg-[#313FD6]"} />
        </div>
      </section>
      <section className="bg-[#EFF7FF] min-h-min md:h-[450px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:relative">
            <img
              src="/Mask Group 66.png"
              className="object-cover md:absolute md:-top-20"
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex items-center justify-start py-14 md:py-28 p-2 md:pl-5">
            <div className="flex flex-col items-center justify-center text-black space-y-5">
              <div>
                <h1 className="text-3xl font-bold text-center md:text-start">
                  Fastest way to send <br /> money online
                </h1>
                <p className="text-start text-sm font-normal mt-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className="faq md:p-10 p-5 md:py-20 min-h-min md:min-h-screen ">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center text-black space-y-5">
            <div>
              <h1 className="text-3xl font-bold text-center mt-2">FAQ</h1>
              <p className="text-center text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore <br /> et dolore magna
                aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex">
              <div className="w-full px-1 md:px-4 pt-4 md:pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full px-1 md:px-4 pt-4 md:pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-start space-x-2 ${
                            open ? " rounded-t-lg" : "rounded-lg"
                          } border divide-x-2 border-black px-4 py-5 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75`}
                        >
                          <FaChevronUp
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-black`}
                          />{" "}
                          <span className="pl-2">
                            Lorem ipsum dolor sit amet,
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="cursor-pointer h-[48px] w-[152px] hover:bg-white bg-[#205072] border border-[#205072] hover:text-black text-white rounded flex items-center justify-center text-lg font-semibold">
              See More
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 pt-20 bg-[#EFF7FF]">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center md:items-start justify-center text-black space-y-10">
              <div>
                <h1 className="text-3xl font-bold text-center md:text-start">
                  Lorem Ipsum Flows
                </h1>
                <p className="text-start text-sm font-normal mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam <br /> nonumy eirmod tempor invidunt ut
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 ">
                <img
                  src="/Image 5@2x.png"
                  className="w-[134px] h-[40px]"
                  alt=""
                />
                <img
                  src="/Image 4@2x.png"
                  className="w-[134px] h-[40px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img src="/Mask Group 68@2x.png" alt="" />
          </div>
        </div>
      </section>
      <section className=" bg-[#1894F8] h-[360px] ">
        <div className="subscribe h-[90%] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-white space-y-10">
            <div>
              <h1 className="text-3xl font-bold text-center">
                Subscribe to our newsletters
              </h1>
              <p className="text-center text-white text-sm font-normal mt-2">
                Learn about our products. Hear about our offers.
              </p>
            </div>
            <form className="flex items-center justify-center space-x-2">
              <div className="w-[250px] md:w-[364px] h-[56px] px-2 bg-white rounded">
                <input
                  type="text"
                  placeholder="Email"
                  className="mx-1 w-full h-full rounded-md outline-none border-none focus:ring-0 focus:outline-none placeholder:pl-2 placeholder:text-sm  text-black "
                />
              </div>
              <button className="cursor-pointer h-[56px] w-[120px] md:w-[152px] hover:bg-transparent hover:text-white bg-[#205072] border border-[#205072] hover:border-white text-white rounded flex items-center justify-center text-lg font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
