import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(!open);
  // };

  const handleAddCraft = (event) => {
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
    const email = user.email;
    console.log(user);

    const newCraft = {
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
      user_email: email,
    };
    console.log(newCraft);

    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className='bg-[#F4F3F0] p-24 w-1/2 mx-auto'>
      <h2 className='text-4xl font-extrabold mb-10 text-center'>
        Add Craft Item
      </h2>
      <form onSubmit={handleAddCraft}>
        {/* form - name and quantity row */}
        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Image URL</label>
            <label className='input-group'>
              <input
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
            >
              <option
                className='input input-bordered w-full h-full'
                placeholder='Select Subcategory'
              >
                Select Subcategory
              </option>
              <option>Landscape Painting</option>
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
              name='customization'
              id='customization'
            >
              <option
                className='input input-bordered w-full h-full'
                placeholder='Customization'
              >
                Select one
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Processing Time</label>
            <label className='input-group'>
              <input
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
              name='stockStatus'
              id='stockStatus'
            >
              <option
                className='input input-bordered w-full h-full'
                placeholder='Select One'
              >
                Select one
              </option>
              <option>In Stock</option>
              <option>Made to Order</option>
            </select>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Username</label>
            <label className='input-group'>
              <input
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

export default AddCraft;
