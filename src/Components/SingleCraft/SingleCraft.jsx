import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCraft = ({ item }) => {
  const { item_name, image, short_description, _id } = item;

  return (
    <div className='w-1/2 mx-auto my-5 py-10 '>
      <div className='card lg:card-side  mb-8'>
        <figure className='shadow-xl mx-8 rounded-xl'>
          <img
            className='rounded-xl'
            src={image}
            alt='craft item'
          />
        </figure>
        <div className=''>
          <h2 className='card-title'>{item_name}</h2>
          <p>{short_description}</p>
          <div className=''>
            <Link to={`/item-details/${_id}`}>
              <button className='btn bg-orange-400 text-white px-4 py-2 border text-sm rounded-xl ml-2'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleCraft.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SingleCraft;