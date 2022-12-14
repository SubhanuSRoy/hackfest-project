import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../context/SearchContext/SearchContext";

function CompanySearch() {
  const {
    company,
    compKeyword,
    predictionYear,
    setPredictionYear,
    predictionPerfromance,
    setPredictionPerfromance,
  } = useContext(SearchContext);

  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <section>
          <div
            id="main"
            className="main-content flex-1 bg-gray-100 mt-12 md:mt-0 pb-24 md:pb-5"
          >
            <div className="bg-gray-800 pt-3">
              <div className="rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r from-blue-900 to-blue-400 p-4 shadow text-2xl text-white">
                <h1 className="font-bold pl-2">
                  Top Performing year of {compKeyword.toUpperCase()}
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap">
              {Object.keys(company).map((key) => {
                if (key == "Year") {
                  return (
                    <div className="w-full md:w-1/3 p-4" key={key}>
                      <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-green-600">
                              <i className="fa fa-wallet fa-2x fa-inverse"></i>
                            </div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                            <p className="font-bold text-2xl">
                              <span className="text-green-500">{key}: </span>
                              {company[key]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              {Object.keys(company).map((key) => {
                if (key == "Rating") {
                  return (
                    <div className="w-full md:w-1/3 p-4" key={key}>
                      <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-blue-600">
                              <i className="fa fa-wallet fa-2x fa-inverse"></i>
                            </div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                            <p className="font-bold text-2xl">
                              <span className="text-blue-500">{key}: </span>
                              {company[key]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              {Object.keys(company).map((key) => {
                if (key == "AvgCost") {
                  return (
                    <div className="w-full md:w-1/3 p-4" key={key}>
                      <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-yellow-600">
                              <i className="fa fa-wallet fa-2x fa-inverse"></i>
                            </div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                            <p className="font-bold text-2xl">
                              <span className="text-yellow-500">
                                Avg Cost $ :{" "}
                              </span>
                              {company[key]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              {Object.keys(company).map((key) => {
                if (key == "Resources") {
                  return (
                    <div className="w-full md:w-1/3 p-4" key={key}>
                      <div className="bg-gradient-to-b from-orange-200 to-orange-100 border-b-4 borderorangen-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-orange-600">
                              <i className="fa fa-wallet fa-2x fa-inverse"></i>
                            </div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                            <p className="font-bold text-2xl">
                              <span className="text-orange-500">{key}: </span>
                              {company[key]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              {Object.keys(company).map((key) => {
                if (key == "AverageDeliveryTime") {
                  return (
                    <div className="w-full md:w-1/3 p-4" key={key}>
                      <div className="bg-gradient-to-b from-emerald-200 to-emerald-100 border-b-4 border-emerald-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-emerald-600">
                              <i className="fa fa-wallet fa-2x fa-inverse"></i>
                            </div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                            <p className="font-bold text-2xl">
                              <span className="text-emerald-500">
                                Average Delivery Time:{" "}
                              </span>
                              {company[key] + " days"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              {Object.keys(company).map((key) => {
                if (key == "Region") {
                  return (
                    <div className="w-full md:w-1/3 p-4" key={key}>
                      <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-pink-600">
                              <i className="fa fa-wallet fa-2x fa-inverse"></i>
                            </div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                            <p className="font-bold text-2xl">
                              <span className="text-pink-500">{key}: </span>
                              {company[key]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="flex justify-center items-center flex-grow mt-2 w-full">
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white border-transparent rounded-lg shadow-xl">
                  <div className="bg-gradient-to-b from-blue-300 to-blue-100 uppercase text-center text-blue-800 border-b-2 border-blue-300 rounded-lg p-2">
                    <h className="font-bold uppercase text-blue-900 text-center">
                      See next 5 years prediction of {compKeyword}
                    </h>
                  </div>
                  <div className="p-5 bg-white flex items-center justify-center">
                    <a
                      href="https://plotly-predictor-graph.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-block px-4 py-2 font-medium group"
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-500 group-hover:bg-blue-500"></span>
                      <span className="relative text-blue-500 group-hover:text-white">
                        Predict Now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CompanySearch;
