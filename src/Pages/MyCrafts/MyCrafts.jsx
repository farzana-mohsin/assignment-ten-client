import { useContext, useEffect, useState } from "react";
import MyAddedCrafts from "../../Components/MyAddedCrafts/MyAddedCrafts";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

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
    <div className='container mx-auto w-[80%] '>
      <h1 className='text-3xl md:text-5xl font-bold mt-10 mb-0 lg:my-20 text-center'>
        My Arts & Crafts Collection
      </h1>
      <p className='text-lg opacity-60 mt-10 mb-0 lg:my-20 text-center w-1/2 mx-auto'>
        It if sometimes furnished unwilling as additions blessing resolved
        peculiar graceful at really ladies in as elinor opinions age properly
        extended.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {myItems.map((item, index) => (
          <MyAddedCrafts
            key={index}
            item={item}
            myItems={myItems}
            setMyItems={setMyItems}
          ></MyAddedCrafts>
        ))}
      </div>
    </div>
  );
};

export default MyCrafts;
