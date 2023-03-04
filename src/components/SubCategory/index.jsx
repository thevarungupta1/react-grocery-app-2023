import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);
  const {catId, catName} = useParams()

  const fetchData = () => {
    axios
      .get(Endpoints.SUB_CATEGORY_BY_CATID_URL + catId)
      .then((response) => setSubCategories(response.data.data));
  };

  useEffect(() => {
    fetchData();
  }, [catId]);

  return (
    <div>
      <h2>{ catName }</h2>
      <ul className="list-group">
        {subCategories.map((subCategory, index) => (
          <li className="list-group-item" key={index}>
            {subCategory.subName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
