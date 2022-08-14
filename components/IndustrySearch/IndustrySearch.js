import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../context/SearchContext/SearchContext";

function IndustrySearch({ searchTerm }) {
  const { domain, setDomain, setdomainKeyword, domainKeyword } =useContext(SearchContext);

  // const [graphData, setGraphData] = useState({
  //   label: domain.map((data) => data.SupplierName),
  //   datasets: [
  //     {
  //       label: "Rating",
  //       data: domain.map((data) => data.Rating),
  //       backgroundColor: ["#f3ba2f", "#50af95", "#2a71d0", "#3ab"],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });
  
  return (
    <main>
      <div className="flex flex-col md:flex-row">
       
        <section>
          <div
            id="main"
            className="main-content flex-1 bg-gray-100 mt-12 md:mt-12 pb-24 md:pb-5"
          >
            <div className="bg-gray-800 pt-3">
              <div className="rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r from-blue-900 to-blue-400 p-4 shadow text-2xl text-white">
                <h1 className="font-bold pl-2">{searchTerm}</h1>
              </div>
            </div>

            <div className="flex flex-wrap">
              {domain.map((key) => {
                return (
                  <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gradient-to-b from-gray-200 to-gray-100 border-b-4 border-gray-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                        <div className="flex-1 text-right md:text-center font-bold uppercase">
                          <h1>{key.SupplierName}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {domain.map((key) => {
                return (
                  <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                          <div className="rounded-full p-5 bg-green-600">
                            <i className="fa fa-wallet fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                          <p className="font-bold text-2xl">
                            <span className="text-green-500">Rating: </span>
                            {key.Rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {domain.map((key) => {
                return (
                  <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                          <div className="rounded-full p-5 bg-pink-600">
                            <i className="fa fa-wallet fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                          <p className="font-bold text-2xl">
                            <span className="text-pink-500">Avg Cost $: </span>
                            {" " + key.AvgCost}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {domain.map((key) => {
                return (
                  <div className="w-full md:w-1/3 p-4">
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
                              No. Of Escalations:{" "}
                            </span>
                            {key.NumberofEscalations}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {domain.map((key) => {
                return (
                  <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                          <div className="rounded-full p-5 bg-blue-600">
                            <i className="fa fa-wallet fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                          <p className="font-bold text-2xl">
                            <span className="text-blue-500">
                              Avg Delivery Time:{" "}
                            </span>
                            {key.AverageDeliveryTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {domain.map((key) => {
                return (
                  <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                          <div className="rounded-full p-5 bg-red-600">
                            <i className="fa fa-wallet fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                          <p className="font-bold text-2xl">
                            <span className="text-red-500">Resources: </span>
                            {key.Resources}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-row flex-wrap flex-grow mt-2">
              {/* <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h className="font-bold uppercase text-gray-600">Rating Comparison</h>
                        </div>
                        <div className="p-5">
                            <BarChart chartData={graphData}/>
                        </div>
                    </div>
              </div> */}

              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                {/* <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                        </div>
                        <div className="p-5">
                            <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                new Chart(document.getElementById("chartjs-0"), {
                                    "type": "line",
                                    "data": {
                                        "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                        "datasets": [{
                                            "label": "Views",
                                            "data": [65, 59, 80, 81, 56, 55, 40],
                                            "fill": false,
                                            "borderColor": "rgb(75, 192, 192)",
                                            "lineTension": 0.1
                                        }]
                                    },
                                    "options": {}
                                });
                            </script>
                        </div>
                    </div> */}
              </div>

              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                {/* <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                        </div>
                        <div className="p-5">
                            <canvas id="chartjs-1" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                new Chart(document.getElementById("chartjs-1"), {
                                    "type": "bar",
                                    "data": {
                                        "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                        "datasets": [{
                                            "label": "Likes",
                                            "data": [65, 59, 80, 81, 56, 55, 40],
                                            "fill": false,
                                            "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                                            "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                            "borderWidth": 1
                                        }]
                                    },
                                    "options": {
                                        "scales": {
                                            "yAxes": [{
                                                "ticks": {
                                                    "beginAtZero": true
                                                }
                                            }]
                                        }
                                    }
                                });
                            </script>
                        </div>
                    </div> */}
              </div>

              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                {/* <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                        </div>
                        <div className="p-5"><canvas id="chartjs-4" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                new Chart(document.getElementById("chartjs-4"), {
                                    "type": "doughnut",
                                    "data": {
                                        "labels": ["P1", "P2", "P3"],
                                        "datasets": [{
                                            "label": "Issues",
                                            "data": [300, 50, 100],
                                            "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                        }]
                                    }
                                });
                            </script>
                        </div>
                    </div> */}
              </div>

              {/* <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white border-transparent rounded-lg shadow-xl">
                  <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                    <h2 className="font-bold uppercase text-gray-600">Graph</h2>
                  </div>
                  <div className="p-5">
                    <table className="w-full p-5 text-gray-700">
                      <thead>
                        <tr>
                          <th className="text-left text-blue-900">Name</th>
                          <th className="text-left text-blue-900">Side</th>
                          <th className="text-left text-blue-900">Role</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Obi Wan Kenobi</td>
                          <td>Light</td>
                          <td>Jedi</td>
                        </tr>
                        <tr>
                          <td>Greedo</td>
                          <td>South</td>
                          <td>Scumbag</td>
                        </tr>
                        <tr>
                          <td>Darth Vader</td>
                          <td>Dark</td>
                          <td>Sith</td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="py-2">
                      <a href="#">See More issues...</a>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default IndustrySearch;
