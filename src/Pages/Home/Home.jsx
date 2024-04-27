import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      <h2>this is home</h2>
      {subcategories.map((subcategory, index) => (
        <Link
          to={`/subcategories/${subcategory._id}`}
          key={index}
        >
          <button className='btn mr-2'>{subcategory.subcategory_name}</button>
        </Link>
      ))}
    </div>
  );
};

export default Home;
