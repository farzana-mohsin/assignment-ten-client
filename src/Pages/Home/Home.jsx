import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import ExtraSection from "../../Components/ExtraSection/ExtraSection";
import SixData from "../../Components/SixData/SixData";

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
      <h2 className='text-6xl font-bold my-20 text-center'>
        Explore the Collection
      </h2>
      <div className='grid grid-cols-3 container mx-auto'>
        {allItems
          .map((item, index) => (
            <SixData
              item={item}
              key={index}
            ></SixData>
          ))
          .slice(0, 6)}
      </div>

      {subcategories.map((subcategory, index) => (
        <Link
          to={`/subcategories/${subcategory._id}`}
          key={index}
          subcategory={subcategory}
        >
          <button className='btn mr-2'>{subcategory.subcategory_name}</button>
        </Link>
      ))}
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
