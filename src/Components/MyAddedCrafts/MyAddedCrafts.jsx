import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedCrafts = ({ item, myItems, setMyItems }) => {
  const { image, item_name, price, rating, customization, stock_status, _id } =
    item;

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
    <div className=' w-[80%] bg-base-200 shadow-2xl h-max mb-10 container mx-auto'>
      {/* <figure className='px-5 pt-10'>
        <img
          src={image}
          alt='Shoes'
          className='rounded-xl h-[400px] object-cover pt-14'
        />
      </figure> */}
      <div className='flex flex-col max-w-lg p-6 space-y-6  rounded-lg mx-auto my-10'>
        <div>
          <span className='indicator-item indicator-end  text-lg rounded-xl bg-orange-800 border-2 border-white text-white px-4 pb-4 pt-2'>
            {stock_status}
          </span>
          <div className='mx-auto flex items-center justify-center'>
            <img
              src={image}
              alt=''
              className='object-cover w-full mb-4 h-80 bg-gray-500'
            />
          </div>
          <h2 className='card-title text-2xl font-bold my-5 '>{item_name}</h2>
          <div className='flex justify-between items-center '>
            <p>
              {" "}
              <span className='font-bold'>Price</span> ${price}
            </p>
            <p className=' '>
              <span className='font-bold'>Customization</span> {customization}
            </p>
            <p>
              <span className='font-bold'>Rating</span> {rating}
            </p>
          </div>
          <div className='mb-0 mt-6 flex justify-between'>
            <Link to={`/update-craft/${_id}`}>
              <button className='bg-orange-800 text-white md:px-4 md:py-2 border-2 border-white text-sm rounded-xl mr-3 btn'>
                Update Craft
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className='btn bg-orange-800 text-white md:px-4 md:py-2 border-2 border-white text-sm rounded-xl mr-3n'
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
