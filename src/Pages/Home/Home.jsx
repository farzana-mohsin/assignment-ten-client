import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import ExtraSection from "../../Components/ExtraSection/ExtraSection";
import SixData from "../../Components/SixData/SixData";
import Subcategories from "../../Components/Subcategories/Subcategories";

const Home = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
      });

    fetch("http://localhost:5000/subcategories")
      .then((res) => res.json())
      .then((data) => {
        setSubcategories(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <h2 className=' text-3xl md:text-5xl font-bold mt-10 mb-0 lg:my-20 text-center'>
        Explore the Collection
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto sm:gap-6 md:gap-0'>
        {allItems
          .map((item, index) => (
            <SixData
              item={item}
              key={index}
            ></SixData>
          ))
          .slice(0, 6)}
      </div>
      <div className='bg-amber-600 bg-opacity-35 py-10'>
        <h2 className='text-3xl md:text-5xl font-bold text-center my-10 '>
          Featured Subcategories
        </h2>
        <div className=' container mx-auto flex flex-col md:flex-row gap-10 justify-center items-center my-10'>
          {subcategories.map((subcategory, index) => (
            <Subcategories
              subcategory={subcategory}
              key={index}
            ></Subcategories>
          ))}
        </div>
      </div>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
