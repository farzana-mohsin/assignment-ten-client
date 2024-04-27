import Swal from "sweetalert2";

const AddCraft = () => {
  const handleAddCraft = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const status = form.status.value;
    const name = form.name.value;

    const newCraft = {
      image,
      itemName,
      subcategory,
      description,
      price,
      rating,
      customization,
      time,
      status,
      name,
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
            text: "Coffee added successfully",
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
            <label className='label'>Coffee Name</label>
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
            <label className='label'>Available Quantity</label>
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
            <label className='label'>Supplier Name</label>
            <label className='input-group'>
              <input
                name='subcategory'
                type='text'
                placeholder='Subcategory name'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Taste</label>
            <label className='input-group'>
              <input
                name='description'
                type='text'
                placeholder='Short description'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* form - category and details row */}
        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Category</label>
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
            <label className='label'>Details</label>
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
            <label className='label'>Category</label>
            <label className='input-group'>
              <input
                name='customization'
                type='text'
                placeholder='Customization'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Details</label>
            <label className='input-group'>
              <input
                name='time'
                type='text'
                placeholder='Processing time'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>

        <div className='md:flex gap-4 mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Category</label>
            <label className='input-group'>
              <input
                name='status'
                type='text'
                placeholder='Stock Status'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Details</label>
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
