import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCraft from "../../Components/SingleCraft/SingleCraft";
import { AuthContext } from "../../Providers/AuthProvider";

const AllCrafts = () => {
  const loader = useLoaderData();
  const [allItems, setAllItems] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const filteredItems = loader?.filter(
      (item) =>
        item.user_email === "farzanamohsinmohona@gmail.com" ||
        item.user_email === user?.email
    );
    setAllItems(filteredItems);
  }, [loader, user]);

  return (
    <div>
      <h2>all crafts {allItems?.length}</h2>
      <div className='bg-gray-100'>
        {allItems.map((item, index) => (
          <SingleCraft
            key={index}
            item={item}
          ></SingleCraft>
        ))}
      </div>
    </div>
  );
};

export default AllCrafts;
