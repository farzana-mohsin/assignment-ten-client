import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import "animate.css";

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
    <div className='w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {subcategoryData?.map((item, index) => (
        <div
          key={index}
          className='  '
        >
          <div className=' bg-base-200 shadow-2xl my-8  gap-10 w-96 p-6 rounded-lg '>
            <div>
              <span className='indicator-item indicator-end text-lg rounded-xl bg-orange-800 border-2 border-white text-white px-4 pb-4 pt-2'>
                {item.stock_status}
              </span>
              <div className='mx-auto flex items-center justify-center'>
                <img
                  src={item.image}
                  alt='Painting'
                  className='object-cover w-full mb-4 h-80 bg-gray-500'
                />
              </div>
              <h2 className='card-title text-2xl font-bold my-5 animate__animated animate__fadeInLeft '>
                {item.item_name}
              </h2>
              <p className='my-5 animate__animated animate__fadeInLeft'>
                {item.subcategory_name}
              </p>
              <div className='flex justify-between items-center animate__animated animate__fadeInLeft'>
                <p>
                  {" "}
                  <span className='font-bold '>Price</span> ${item.price}
                </p>
                <p className=' '>
                  <span className='font-bold '>Customization</span>{" "}
                  {item.customization}
                </p>
                <p>
                  <span className='font-bold '>Rating</span> {item.rating}
                </p>
              </div>
              <div className='mb-0 mt-6 flex justify-between'>
                <Link to={`/item-details/${item._id}`}>
                  <button className='bg-orange-800 text-white md:px-4 md:py-2 border-2 border-white text-sm rounded-xl mr-3 btn animate__animated animate__fadeInLeft'>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subcategory;
