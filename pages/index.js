import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import IndustrySearch from "../components/IndustrySearch/IndustrySearch";
import CompanySearch from "../components/CompanySearch/CompanySearch";
import SearchContext from "../context/SearchContext/SearchContext";
import NumberSearch from "../components/NumberSearch/NumberSearch";

export default function Home() {
  const baseURL = "https://new-supur-backend.herokuapp.com";

  const [isIndustry, setIsIndustry] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const { domain, setDomain, setdomainKeyword, domainKeyword } =
    useContext(SearchContext);

  const sendIndustrySearch = (event) => {
    event.preventDefault();
    axios
      .post(`${baseURL}/domainSearch`, {
        SearchedString: domainKeyword,
      })
      .then((response) => {
        setDomain(response.data.List);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(domain);
    setIsIndustry(true);
    setIsNumber(false);
  };
  const {
    company,
    setCompany,
    compKeyword,
    setcompKeyword,
    predictionYear,
    setPredictionYear,
    predictionPerfromance,
    setPredictionPerfromance,
  } = useContext(SearchContext);
  const sendCompanySearch = (event) => {
    event.preventDefault();
    axios
      .post(`${baseURL}/companySearch`, {
        SearchedString: compKeyword,
      })
      .then((response) => {
        console.log("data in index", response.data);
        setCompany(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    axios
      .post(`${baseURL}/predictionSearch`, {
        SearchedString: compKeyword,
      })
      .then((response) => {
        console.log("data in prediction", response.data.Years);
        if (response.data.Years) {
          setPredictionYear(response.data.Years);
        }
        if (response.data.Performance) {
          setPredictionPerfromance(response.data.Performance);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    // console.log(predictionYear);
    // console.log(predictionPerfromance);
    setIsIndustry(false);
    setIsNumber(false);
  };
  const { topComp, setTopComp, numberKeyword, setnumberKeyword } =
    useContext(SearchContext);
  const sendNumberSearch = (event) => {
    event.preventDefault();
    axios
      .post(`${baseURL}/numberSearch`, {
        No_of_Companies: numberKeyword,
      })
      .then((response) => {
        console.log("data in index", response.data.List_of_Companies);
        setTopComp(response.data.List_of_Companies);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setIsIndustry(false);
    setIsNumber(true);
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
          className="bg-gray-800 pt-4 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
        >
          <div className="flex flex-wrap items-center">
            {/* <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
              <a href="#" aria-label="Home">
                <span className="text-xl pl-2">
                  <i className="em em-grinning"></i>
                </span>
              </a>
            </div> */}

            {/* industry search input */}
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <form onSubmit={sendIndustrySearch}>
                  <input
                    aria-label="search"
                    id="searchIndustry"
                    name="domainKeyword"
                    value={domainKeyword}
                    placeholder="Search by Industry"
                    onChange={(event) => setdomainKeyword(event.target.value)}
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
            {/* number input */}
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <form onSubmit={sendNumberSearch}>
                  <input
                    aria-label="search"
                    id="searchNumber"
                    name="numberKeyword"
                    type="number"
                    value={numberKeyword}
                    placeholder="Find the x number of top companies"
                    onChange={(event) => setnumberKeyword(event.target.value)}
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
            {/* company search input */}
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <form onSubmit={sendCompanySearch}>
                  <input
                    aria-label="search"
                    id="searchCompany"
                    name="company"
                    value={compKeyword}
                    placeholder="Search by Company"
                    onChange={(event) => setcompKeyword(event.target.value.toUpperCase())}
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
          </div>
        </nav>
      </header>
      {isIndustry ? (
        <IndustrySearch searchTerm={`Top 3 performers for ${domainKeyword}`} />
      ) : isNumber ? (
        <NumberSearch />
      ) : (
        <CompanySearch />
      )}
    </div>
  );
}
