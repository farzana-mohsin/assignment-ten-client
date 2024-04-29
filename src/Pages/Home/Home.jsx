import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import ExtraSection from "../../Components/ExtraSection/ExtraSection";
import SixData from "../../Components/SixData/SixData";
import Subcategories from "../../Components/Subcategories/Subcategories";
import Timeline from "../../Components/Timeline/Timeline";

const Home = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("https://assignment-ten-server-lilac.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
      });

    fetch("https://assignment-ten-server-lilac.vercel.app/subcategories")
      .then((res) => res.json())
      .then((data) => {
        setSubcategories(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <h2 className=' text-3xl md:text-5xl font-bold my-12 text-center'>
        Explore the Collection
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto md:gap-8 lg:gap-0'>
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
      <Timeline></Timeline>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
