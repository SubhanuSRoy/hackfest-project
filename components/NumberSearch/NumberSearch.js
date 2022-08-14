import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext/SearchContext";
import styles from "../NumberSearch/NumberSearch.module.css";

function NumberSearch() {
  const { topComp, numberKeyword, setcompKeyword } = useContext(SearchContext);
  return (
    <div className="flex flex-col md:flex-row">
  
      <div className="bg-gray-800 pt-3 flex flex-col">
        <div className="rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r from-blue-900 to-blue-400 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Top {numberKeyword} Companies</h1>
        </div>
        <div className="w-full overflow-x-auto flex flex-wrap justify-center items-center">
          {topComp.map((key) => {
            return (
              <div className={styles.plan}>
                <div className={styles.planInner}>
                  {/* <div className="hot">hot</div> */}
                  <div className={styles.entryTitle}>
                    <h3> {key.SupplierName}</h3>
                    <div className={styles.price}>
                      {key.Rating}
                      <span>Rating</span>
                    </div>
                  </div>
                  <div className={styles.entryContent}>
                    <ul>
                      <li>
                        <strong>Avg Cost:</strong> $ {key.AvgCost}
                      </li>
                      <li>
                        <strong>Avg Delivery Time:</strong>{" "}
                        {key.AverageDeliveryTime} days
                      </li>
                      <li>
                        <strong>Cost Function:</strong> {key.Cost}
                      </li>
                      <li>
                        <strong>Region:</strong> {key.Region}
                      </li>
                      <li>
                        <strong>Country:</strong> {key.Country}
                      </li>
                    </ul>
                  </div>
                  <div
                    className={styles.btn}
                    onClick={() => {
                      setcompKeyword(key.SupplierName);
                    }}
                  >
                    <a href="#">Check Details</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NumberSearch;
