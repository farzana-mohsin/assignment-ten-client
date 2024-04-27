import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const loader = useLoaderData();
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    user_name,
    user_email,
  } = loader;

  return (
    <div className='my-10 p-10'>
      <img
        src={image}
        alt=''
      />
      <h2>{item_name}</h2>
      <h2>{subcategory_name}</h2>
      <p>{short_description}</p>
      <p>{price}</p>
    </div>
  );
};

export default CraftDetails;
