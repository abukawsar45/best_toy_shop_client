import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';
import useTitles from '../../shared/useTitles';

const EditToysData = () => {
  useTitles('| Edit Toys');
  const { user } = useContext(AuthContext);
  const getData = useLoaderData();
  console.log(getData);
  const {
    _id,
    carName,
    soldBy,
    quantity,
    category,
    subCategory,
    price,
    type,
    rating,
    image,
    description,
    postBy,
    made,
  } = getData;

  const handleEditToysForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const carName = form.carName.value;
    const soldBy = form.soldBy.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const subCategory = form.subCategory.value;
    const made = form.made.value;
    const price = form.price.value;
    const type = form.type.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const postBy = form.email.value;
    const updateInfo = {
      carName,
      soldBy,
      quantity,
      category,
      subCategory,
      price,
      type,
      rating,
      image,
      description,
      postBy,
      made,
    };
    console.log(updateInfo);
    fetch(`https://y-umber-three.vercel.app/myToys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire('Updated Successfully', 'Saved', 'success');
          // form.reset();
        } else {
          Swal.fire({
            title: 'Already Updated',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
        }
      });
  };

  return (
    <div className='bg-neutral-200 px-2 md:px-6 py-4 md:py-6'>
      <form onSubmit={handleEditToysForm} className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8 '>
          {/* car name */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='carName' value='Car Name' />
            </div>
            <TextInput
              id='carName'
              type='text'
              name='carName'
              defaultValue={carName}
              required={true}
            />
          </div>
          {/* seller name */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='soldBy' value='Seller Name' />
            </div>
            <TextInput
              id='soldBy'
              type='text'
              name='soldBy'
              defaultValue={soldBy}
              required={true}
            />
          </div>
          {/* car quantity */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='quantity' value='Quantity' />
            </div>
            <TextInput
              id='quantity'
              type='text'
              name='quantity'
              defaultValue={quantity}
              required={true}
            />
          </div>
          {/* car category */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='category' value='Select Category' />
            </div>
            <Select
              id='category'
              name='category'
              defaultValue={category}
              required={true}
            >
              <option>Super Car</option>
              <option>Racing Car</option>
              <option>Defance Car</option>
            </Select>
          </div>
          {/* car category */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='sub-category' value='Select Sub Category' />
            </div>
            <Select
              id='subCategory'
              name='subCategory'
              defaultValue={subCategory}
              required={true}
            >
              <optgroup label='Supercars'>
                <option>American Supercars</option>
                <option>German Supercars</option>
                <option> Hyper Supercars</option>
              </optgroup>
              <optgroup label='Racing'>
                <option>Rally Racing</option>
                <option>Drag Racing </option>
                <option>Touring Racing</option>
              </optgroup>
              <optgroup label='Defense Force'>
                <option>Police</option>
                <option>RAB</option>
                <option>Fire Service</option>
              </optgroup>
            </Select>
          </div>
          {/* car made country */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='made' value='Made by' />
            </div>
            <Select id='made' name='made' defaultValue={made} required={true}>
              <option>China</option>
              <option>Bangladeshi</option>
              <option>Others</option>
              <option>Japan</option>
            </Select>
          </div>
          {/* car price */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='price' value='Price' />
            </div>
            <TextInput
              id='price'
              type='text'
              name='price'
              defaultValue={price}
              required={true}
            />
          </div>
          {/* car type */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='type' value='Type' />
            </div>
            <Select id='type' name='type' defaultValue={type} required={true}>
              <option>Remote Control</option>
              <option>No Remote Control</option>
            </Select>
          </div>
          {/* car brand */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='image' value='Image URL' />
            </div>
            <TextInput
              id='image'
              type='url'
              name='image'
              defaultValue={image}
              required={true}
            />
          </div>
          {/* car rating */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='rating' value='Rating Star' />
            </div>
            <Select
              id='rating'
              name='rating'
              defaultValue={rating}
              required={true}
            >
              <option>0</option>
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </Select>
          </div>
          {/* seller email */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='email' value='Seller Email' />
            </div>
            <TextInput
              id='email'
              type='text'
              name='email'
              value={user?.email}
            />
          </div>
          {/* car description */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='description' value='Description (optional)' />
            </div>
            <Textarea
              id='description'
              type='text'
              name='description'
              defaultValue={description}
            />
          </div>
        </div>

        <Button type='submit'>UPDATE TOYS</Button>
      </form>
    </div>
  );
};

export default EditToysData;
