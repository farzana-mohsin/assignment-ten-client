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
    <div className='my-7'>
      <section>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4 mb-14 gap-9 text-center md:px-10 lg:px-32 0'>
          <div>
            <h1 className='text-5xl font-bold leading-none sm:text-5xl xl:max-w-3xl '>
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
          <div className='w-full h-full flex-1 shadow-2xl'>
            <img
              src={image}
              alt=''
              className='w-full h-full shadow-2xl'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CraftDetails;
