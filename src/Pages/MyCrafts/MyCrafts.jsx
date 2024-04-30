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

  const handleClick = (event) => {
    const selection = event.target.value;

    let filteredItems = loader?.filter(
      (item) => item.user_email === user?.email
    );

    if (selection === "yes") {
      filteredItems = loader?.filter((item) => item.customization === "Yes");
    } else if (selection === "no") {
      filteredItems = loader?.filter((item) => item.customization === "No");
    }

    setMyItems(filteredItems);
  };

  return (
    <div className='container mx-auto w-[80%] '>
      <h1 className='text-3xl md:text-5xl font-bold mt-10 mb-0 lg:my-20 text-center'>
        My Arts & Crafts Collection
      </h1>
      <p className='md:text-lg opacity-60 my-3 lg:my-8 text-center md:w-1/2 mx-auto'>
        It if sometimes furnished unwilling as additions blessing resolved
        peculiar graceful at really ladies in as elinor opinions age properly
        extended.
      </p>
      <label className='form-control w-1/2 mx-auto my-12'>
        <select
          onChange={handleClick}
          className='select select-bordered  bg-orange-800 text-white md:px-4 md:py-2 border text-sm rounded-xl ml-2  hover:bg-yellow-400'
          name='stockStatus'
        >
          <option
            value='all'
            selected
          >
            Show All Data
          </option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </label>
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
