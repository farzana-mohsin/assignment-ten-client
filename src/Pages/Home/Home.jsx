import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
      <Banner></Banner>
      <h2>this is home</h2>
    </div>
  );
};

export default Home;
