import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const loader = useLoaderData();
  const {
    image,
    item_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
  } = loader;

  return (
    <div className='my-7 container mx-auto'>
      <div className=' flex flex-col lg:flex-row items-center justify-center px-4 mb-14 lg:space-x-16 gap-8 lg:gap-20 text-center md:px-10 lg:px-32'>
        <div>
          <h1 className='md:text-5xl font-bold leading-none text-3xl max-w-3xl '>
            {item_name}
          </h1>
          <p className='mt-6 mb-4 text-lg sm:mb-12 xl:max-w-3xl '>
            {short_description}
          </p>
          <ul>
            <li>Rating: {rating}</li>
            <li>Price: ${price}</li>
            <li>Customization possible: {customization}</li>
            <li>Stock Status: {stock_status}</li>
            <li>Processing Time: {processing_time}</li>
          </ul>
        </div>
        <div className=' shadow-2xl'>
          <img
            src={image}
            alt=''
            className='w-full h-[700px] shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
