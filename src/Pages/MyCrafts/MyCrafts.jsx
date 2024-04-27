import { useContext, useEffect, useState } from "react";
import MyAddedCrafts from "../../Components/MyAddedCrafts/MyAddedCrafts";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import SingleCraft from "../../Components/SingleCraft/SingleCraft";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const loader = useLoaderData();
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const filteredItems = loader?.filter(
      (item) => item.user_email === user?.email
    );
    setMyItems(filteredItems);
  }, [loader, user]);

  return (
    <div>
      <h1> my crafts {myItems.length}</h1>
      {myItems.map((item, index) => (
        <MyAddedCrafts
          key={index}
          item={item}
          myItems={myItems}
          setMyItems={setMyItems}
        ></MyAddedCrafts>
      ))}
    </div>
  );
};

export default MyCrafts;
