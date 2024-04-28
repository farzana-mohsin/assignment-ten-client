import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Subcategories = ({ subcategory }) => {
  const { subcategory_name, _id } = subcategory;

  return (
    <div className=''>
      <Link to={`/subcategories/${_id}`}>
        <p className='text-xl hover:bg-amber-600 px-4 py-5 rounded-xl'>
          {subcategory_name}
        </p>
      </Link>
    </div>
  );
};

Subcategories.propTypes = {
  subcategory: PropTypes.object.isRequired,
};

export default Subcategories;
