import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import AltNav from "../components/AltNav/AltNav";
import Header from "../components/Header/Header";
import MetricCard from "../components/MetricCard/MetricCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchIndustry, setSearchIndustry] = useState("");
  const sendIndustrySearch = (event) => {
    event.preventDefault();
    // axios
    //   .post(`${baseURL}`, {
    //     term: searchIndustry,
    //   })
    //   .then((response) => {
    //     console.log(response)
    //     localStorage.setItem(
    //       'adminToken',
    //       JSON.stringify(response.data.token)
    //     )
    //     localStorage.setItem(
    //       'adminId',
    //       JSON.stringify(response.data.data._id)
    //     )
    //     localStorage.setItem(
    //       'adminName',
    //       JSON.stringify(response.data.data.name)
    //     )
    //   })
    //   .catch((error) => {
    //     console.log(error.message)
    //   })

    setSearchIndustry("");
  };
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
                    type="search"
                    id="search"
                    placeholder="Search by Company"
                    className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                  />
                </form>
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
              </span>
            </div>
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <form onSubmit={sendIndustrySearch}>
                  <input
                    aria-label="search"
                    type="search"
                    id="search"
                    placeholder="Search by Industry"
                    className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                  />
                </form>
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
                    <button
                      
                      className="drop-button text-white py-2 px-2"
                    >
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

      <main>
        <div className="flex flex-col md:flex-row">
          <AltNav />
          <section>
            <div
              id="main"
              className="main-content flex-1 bg-gray-100 mt-12 md:mt-12 pb-24 md:pb-5"
            >
              <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 className="font-bold pl-2">Analytics</h1>
                </div>
              </div>

              <div className="flex flex-wrap">
                <MetricCard name="Avg Cost" value="$330"  />
                <MetricCard name="Avg Cost" value="$328" color="pink" />
                <MetricCard name="Avg Cost" value="$328" color="yellow" />
                <MetricCard name="Avg Cost" value="$328" color="blue" />
                <MetricCard name="Avg Cost" value="$328" color="red" />
                <MetricCard name="Avg Cost" value="$328" color="indigo" />
              </div>

              <div className="flex flex-row flex-wrap flex-grow mt-2">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  {/* <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h className="font-bold uppercase text-gray-600">Graph</h>
                        </div>
                        <div className="p-5">
                            <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                new Chart(document.getElementById("chartjs-7"), {
                                    "type": "bar",
                                    "data": {
                                        "labels": ["January", "February", "March", "April"],
                                        "datasets": [{
                                            "label": "Page Impressions",
                                            "data": [10, 20, 30, 40],
                                            "borderColor": "rgb(255, 99, 132)",
                                            "backgroundColor": "rgba(255, 99, 132, 0.2)"
                                        }, {
                                            "label": "Adsense Clicks",
                                            "data": [5, 15, 10, 30],
                                            "type": "line",
                                            "fill": false,
                                            "borderColor": "rgb(54, 162, 235)"
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

                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 className="font-bold uppercase text-gray-600">
                        Graph
                      </h2>
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
                </div>

                
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
