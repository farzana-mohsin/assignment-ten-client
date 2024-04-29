import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
    <div className='my-14 container mx-auto flex flex-col items-center'>
      <h2 className='text-3xl md:text-5xl text-center font-bold'>
        Explore All Our Crafts
      </h2>
      <p className='text-md opacity-60 mx-auto max-w-2xl text-center my-8'>
        The artist is a receptacle for emotions that come from all over the
        place: from the sky, from the earth, from a scrap of paper, from a
        passing shape, and from a spider&apos;s web.
      </p>
      <div className='bg-orange-100 mx-auto container md:w-1/2 space-x-10 gap-10 table md:text-lg'>
        {allItems.map((item, index) => (
          <tr
            className='md:space-x-10 md:gap-10 md:mr-10'
            key={index}
          >
            <td className='md:space-x-10 md:gap-10 md:mr-10 '>{index + 1}</td>
            <td className='md:space-x-10 md:gap-10 md:mr-10 '>
              {item.item_name}
            </td>
            <td className='md:space-x-10 md:gap-10 md:mr-10 '>
              {item.subcategory_name}
            </td>
            <td className='md:space-x-10 md:gap-10 md:mr-10 '>
              <Link to={`/item-details/${item._id}`}>
                <button className='btn hover:bg-yellow-400 bg-orange-800 text-white px-4 lg:py-3 border-2 border-white text-sm rounded-xl ml-2'>
                  View Details
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default AllCrafts;
