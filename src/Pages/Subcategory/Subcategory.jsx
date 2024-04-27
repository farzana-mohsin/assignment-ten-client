import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Subcategory = () => {
  const loader = useLoaderData();

  const [subcategoryData, setSubcategoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data?.filter(
          (item) => item.subcategory_name === loader?.subcategory_name
        );

        setSubcategoryData(filteredData);
      });
  }, [loader]);

  return (
    <div>
      {subcategoryData?.map((item, index) => (
        <p key={index}>{item.item_name}</p>
      ))}
    </div>
  );
};

export default Subcategory;
