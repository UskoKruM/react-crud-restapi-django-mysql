import React, { useEffect, useState } from "react";

// Components:
import CompanyItem from "./CompanyItem";

import * as CompanyServer from "./CompanyServer";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  const listCompanies = async () => {
    try {
      const res = await CompanyServer.listCompanies();
      const data = await res.json();
      setCompanies(data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCompanies();
  }, []);

  return (
    <div className="row">
      {companies.map((company) => (
        <CompanyItem key={company.id} company={company} listCompanies={listCompanies} />
      ))}
    </div>
  );
};

export default CompanyList;
