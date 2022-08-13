import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [domain, setDomain] = useState([]);
  const [company, setCompany] = useState({});

  const [domainKeyword, setdomainKeyword] = useState("");
  const [compKeyword, setcompKeyword] = useState("Infosys");

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
