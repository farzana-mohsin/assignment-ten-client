import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SixData = ({ item }) => {
  const { item_name, subcategory_name, image, _id } = item;

  return (
    <div>
      <div className='card lg:w-96 bg-base-100 shadow-2xl md:h-[80%] mb-10'>
        <figure className='px-5 pt-10'>
          <img
            src={image}
            alt='Shoes'
            className='rounded-xl h-[400px] object-cover pt-14'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{item_name}</h2>
          <p>{subcategory_name}</p>
          <div className='card-actions'>
            <Link to={`/item-details/${_id}`}>
              <button className='btn  px-4 py-2 border text-sm rounded-xl ml-2'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SixData.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SixData;
