import { Link } from "react-router-dom";

const Subcategories = ({ subcategory }) => {
  const { subcategory_name, _id } = subcategory;

  return (
    <div className=''>
      <Link to={`/subcategories/${subcategory._id}`}>
        <p className='text-xl hover:bg-amber-600 px-4 py-5 rounded-xl'>
          {subcategory_name}
        </p>
      </Link>
    </div>
  );
};

export default Subcategories;
