import React from "react";
import { useHistory } from "react-router-dom";

import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ company, listCompanies }) => {
  const history = useHistory();
  // console.log(props.company);
  // console.log(company);

  const handleDelete = async (companyId) => {
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">
          {company.name}
          <button onClick={() => history.push(`/updateCompany/${company.id}`)} className="ms-2 btn btn-sm btn-info">
            Update
          </button>
        </h3>
        <p className="card-text">
          Founded: <strong>{company.foundation}</strong>
        </p>
        <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Go to website
        </a>
        <button onClick={() => company.id && handleDelete(company.id)} className="btn btn-danger my-2">
          Delete Company
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
