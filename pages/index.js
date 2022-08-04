import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import AltNav from "../components/AltNav/AltNav";
import Header from "../components/Header/Header";
import MetricCard from "../components/MetricCard/MetricCard";
import staticData from "../data/Search-Data.js";
import axios from "axios";
import IndustrySearch from "../components/IndustrySearch/IndustrySearch";

export default function Home() {
  const baseURL = "https://super-backend-server.herokuapp.com";

  const [searchIndustry, setSearchIndustry] = useState("happy");
  
  const sendIndustrySearch = (event) => {
    event.preventDefault();
    // console.log(response);
    axios
      .post(`${baseURL}/domainSearch`, {
        SearchedString: searchIndustry,
      })
      .then((response) => {
        console.log(response.data.List);
        localStorage.setItem("industry", JSON.stringify(response.data.List));
      })
      .catch((error) => {
        console.log(error.message);
      });

    setSearchIndustry("");
  };
  const [searchCompany, setSearchCompany] = useState(" ");
  const sendCompanySearch = (event) => {
    event.preventDefault();
    // console.log(response);
    axios
      .post(`${baseURL}/companySearch`, {
        SearchedString: searchCompany,
      })
      .then((response) => {
        // console.log(response);
        // localStorage.setItem(
        //   'adminToken',
        //   JSON.stringify(response.data.token)
        // )
      })
      .catch((error) => {
        console.log(error.message);
      });
    setSearchCompany(" ");
  };

  
  // console.log(staticData);
  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
      <Head>
        <title>SupPer</title>
        <meta name="description" content="For HackFest hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav
          aria-label="menu nav"
          className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
        >
          <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
              <a href="#" aria-label="Home">
                <span className="text-xl pl-2">
                  <i className="em em-grinning"></i>
                </span>
              </a>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <form onSubmit={sendIndustrySearch}>
                  <input
                    aria-label="search"
                    id="search"
                    name="searchIndustry"
                    value={searchIndustry}
                    placeholder="Search by Industry"
                    onChange={(event) => setSearchIndustry(event.target.value)}
                    className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                  ></input>
                  <button
                    className="absolute search-icon"
                    type="submit"
                    style={{ top: "1rem", left: ".8rem" }}
                  >
                    <svg
                      className="fill-current pointer-events-none text-white w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                  </button>
                </form>
              </span>
            </div>
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <form onSubmit={sendCompanySearch}>
                  <input
                    aria-label="search"
                    id="search"
                    name="searchCompany"
                    value={searchCompany}
                    placeholder="Search by Industry"
                    onChange={(event) => setSearchCompany(event.target.value)}
                    className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                  ></input>
                  <button
                    className="absolute search-icon"
                    type="submit"
                    style={{ top: "1rem", left: ".8rem" }}
                  >
                    <svg
                      className="fill-current pointer-events-none text-white w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                  </button>
                </form>
              </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="flex-1 md:flex-none md:mr-3">
                  <a
                    className="inline-block py-2 px-4 text-white no-underline"
                    href="#"
                  >
                    Active
                  </a>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                  <a
                    className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    link
                  </a>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                  <div className="relative inline-block">
                    <button className="drop-button text-white py-2 px-2">
                      {" "}
                      <span className="pr-2">
                        <i className="em em-robot_face"></i>
                      </span>{" "}
                      Hi, User{" "}
                      <svg
                        className="h-3 fill-current inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <div
                      id="myDropdown"
                      className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                    >
                      <input
                        type="text"
                        className="drop-search p-2 text-gray-600"
                        placeholder="Search.."
                        id="myInput"
                        // onkeyup="filterDD('myDropdown','myInput')"
                      />
                      <a
                        href="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fa fa-user fa-fw"></i> Profile
                      </a>
                      <a
                        href="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fa fa-cog fa-fw"></i> Settings
                      </a>
                      <div className="border border-gray-800"></div>
                      <a
                        href="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <IndustrySearch />
      
    </div>
  );
}
