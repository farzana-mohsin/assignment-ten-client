import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCraft from "../../Components/SingleCraft/SingleCraft";

const AllCrafts = () => {
  const loader = useLoaderData();
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const filteredItems = loader?.filter(
      (item) => item.user_email === "farzanamohsinmohona@gmail.com"
    );
    setAllItems(filteredItems);
  }, [loader]);

  return (
    <div>
      <h2>all crafts {allItems?.length}</h2>
      <div className='bg-gray-100'>
        {allItems.map((oneItem, index) => (
          <SingleCraft
            key={index}
            oneItem={oneItem}
          ></SingleCraft>
        ))}
      </div>
    </div>
  );
};

export default AllCrafts;
