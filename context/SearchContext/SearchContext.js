import { createContext, useState } from "react";
import staticData from "../../data/SampleData-Static";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [domain, setDomain] = useState([]);
  const [company, setCompany] = useState(staticData);
  const [topComp, setTopComp] = useState([]);

  const [domainKeyword, setdomainKeyword] = useState("");
  const [compKeyword, setcompKeyword] = useState("Infosys");
  const [numberKeyword, setnumberKeyword] = useState();

  const [predictionYear, setPredictionYear] = useState([]);
  const [predictionPerfromance, setPredictionPerfromance] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        domain,
        setDomain,
        company,
        setCompany,
        domainKeyword,
        setdomainKeyword,
        compKeyword,
        setcompKeyword,
        predictionYear,
        setPredictionYear,
        predictionPerfromance,
        setPredictionPerfromance,
        topComp,
        setTopComp,
        numberKeyword,
        setnumberKeyword,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
