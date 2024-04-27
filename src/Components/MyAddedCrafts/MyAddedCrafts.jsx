import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedCrafts = ({ item, myItems, setMyItems }) => {
  const {
    image,
    item_name,
    price,
    rating,
    customization,
    stock_status,
    _id,
    short_description,
  } = item;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/items/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const remainingCrafts = myItems.filter(
                (myItem) => myItem._id !== _id
              );
              setMyItems(remainingCrafts);
            }
          });
      }
      // if the user confirms they want to delete it, only then the data will be fetched
    });
  };

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
            <Link to={`/update-craft/${_id}`}>
              <button className='btn'>Update Craft</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className='btn'
            >
              Delete Craft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyAddedCrafts.propTypes = {
  item: PropTypes.object.isRequired,
  myItems: PropTypes.array.isRequired,
  setMyItems: PropTypes.func.isRequired,
};

export default MyAddedCrafts;
