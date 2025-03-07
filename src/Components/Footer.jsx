import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="footer_container bg-gray-100 ">
      <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:flex-col md:gap-y-6">
          <h3 className="text-[20px] font-bold text-white">
            Toshkent arxeologiya yodgorliklari
          </h3>

          <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-6">
            <li>
              <a
                className="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]"
                href="#"
              >
                <RiInstagramFill className="text-[20px]" />
              </a>
            </li>

            <li>
              <a
                className="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]"
                href="#"
              >
                <BiLogoTelegram className="text-[20px]" />
              </a>
            </li>

            <li>
              <a
                className="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]"
                href="#"
              >
                <FaSquareFacebook className="text-[20px]" />
              </a>
            </li>

            <li>
              <a
                className="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]"
                href="#"
              >
                <FaSquareXTwitter className="text-[20px]" />
              </a>
            </li>

            <li
              onClick={scrollToTop}
              className="bg-green-500 p-2 cursor-pointer rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Mualliflik huquqi  &copy; 2022. Barcha huquqlar himoyalangan.
        </p> */}
      </div>
    </footer>
  );
}
