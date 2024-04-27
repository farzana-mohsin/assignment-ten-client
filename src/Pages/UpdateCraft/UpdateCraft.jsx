import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCraft = () => {
  const loader = useLoaderData();
  const {
    _id,
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
  } = loader;

  const handleUpdateCraft = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategory.value;
    const shortDescription = form.shortDescription.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const name = form.name.value;

    const updateCraft = {
      image,
      item_name: itemName,
      subcategory_name: subcategoryName,
      short_description: shortDescription,
      price,
      rating,
      customization,
      processing_time: processingTime,
      stock_status: stockStatus,
      user_name: name,
    };
    console.log(updateCraft);

    fetch(`http://localhost:5000/items/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className='bg-[#F4F3F0] p-24 w-1/2 mx-auto'>
      <h2 className='text-4xl font-extrabold mb-10 text-center'>
        Update Your Craft
      </h2>
      <form onSubmit={handleUpdateCraft}>
        {/* form - name and quantity row */}
        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Image URL</label>
            <label className='input-group'>
              <input
                defaultValue={image}
                name='image'
                type='text'
                placeholder='image URL'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Craft Name</label>
            <label className='input-group'>
              <input
                defaultValue={item_name}
                name='itemName'
                type='text'
                placeholder='Item name'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* form - supplier and taste row */}
        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Subcategory Name</label>
            <select
              name='subcategory'
              id='subcategory'
              defaultValue={subcategory_name}
            >
              <option
                className='input input-bordered w-full h-full'
                placeholder='Select Subcategory'
              >
                Landscape Painting
              </option>
              <option>Portrait Drawing</option>
              <option>Watercolor Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Description</label>
            <label className='input-group'>
              <input
                defaultValue={short_description}
                name='shortDescription'
                type='text'
                placeholder='Description'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* form - category and details row */}
        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Price</label>
            <label className='input-group'>
              <input
                defaultValue={price}
                name='price'
                type='text'
                placeholder='Price'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Rating</label>
            <label className='input-group'>
              <input
                defaultValue={rating}
                name='rating'
                type='text'
                placeholder='Rating'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* form - category and details row */}
        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Customization</label>
            <select
              defaultValue={customization}
              name='customization'
              id='customization'
            >
              <option
                className='input input-bordered w-full h-full'
                placeholder='Customization'
              >
                Yes
              </option>
              <option>No</option>
            </select>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Processing Time</label>
            <label className='input-group'>
              <input
                defaultValue={processing_time}
                name='processingTime'
                type='text'
                placeholder='Processing time'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>

        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Stock Status</label>
            <select
              defaultValue={stock_status}
              name='stockStatus'
              id='stockStatus'
            >
              <option
                className='input input-bordered w-full h-full'
                placeholder='Select One'
              >
                In Stock
              </option>
              <option>Made to Order</option>
            </select>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Username</label>
            <label className='input-group'>
              <input
                defaultValue={user_name}
                name='name'
                type='text'
                placeholder='Username'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* <div className='mb-6'>
      <div className='form-control w-full '>
        <label className='label'>Photo URL</label>
        <label className='input-group'>
          <input
            name='email'
            type='text'
            placeholder='Email'
            className='input input-bordered w-full'
          />
        </label>
      </div>
    </div> */}

        <input
          type='submit'
          className='btn btn-block bg-black text-white'
          value='Add Craft'
        />
      </form>
    </div>
  );
};

export default UpdateCraft;
