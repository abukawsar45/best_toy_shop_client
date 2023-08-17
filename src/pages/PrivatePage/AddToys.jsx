import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitles from './../../shared/useTitles';
import Swal from 'sweetalert2';
const AddToys = () => {
  useTitles('| Add Toys');
  const { user } = useContext(AuthContext);
  //console.log(user.email);

  const handleAddToysForm = (event) => {
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
    const carInfo = {
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
    //console.log(carInfo);
    fetch(`https://y-umber-three.vercel.app/addToys`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(carInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data?.insertedId) {
          Swal.fire('Added Items Successfully', 'Saved', 'success');
          form.reset();
        }
      });
  };
  return (
    <div className='bg-neutral-200 px-2 md:px-6 py-4 md:py-6'>
      <form onSubmit={handleAddToysForm} className='flex flex-col gap-4'>
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
              required={true}
            />
          </div>
          {/* seller name */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='soldBy' value='Seller Name' />
            </div>
            <TextInput id='soldBy' type='text' name='soldBy' required={true} />
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
              required={true}
            />
          </div>
          {/* car category */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='category' value='Select Category' />
            </div>
            <Select id='category' name='category' required={true}>
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
            <Select id='subCategory' name='subCategory' required={true}>
              <optgroup label='Supercars'>
                <option> American Supercars </option>
                <option>German Supercars </option>
                <option> Hyper Supercars</option>
              </optgroup>
              <optgroup label='Racing'>
                <option> Rally Racing </option>
                <option> Drag Racing </option>
                <option>Touring Racing </option>
              </optgroup>
              <optgroup label='Defense Force'>
                <option>Police</option>
                <option> RAB</option>
                <option>Fire Service</option>
              </optgroup>
            </Select>
          </div>
          {/* car made country */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='made' value='Made by' />
            </div>
            <Select id='made' name='made' required={true}>
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
            <TextInput id='price' type='text' name='price' required={true} />
          </div>
          {/* car type */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='type' value='Type' />
            </div>
            <Select id='type' name='type' required={true}>
              <option>Remote Control</option>
              <option>Without Remote Control</option>
            </Select>
          </div>
          {/* car brand */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='image' value='Image URL' />
            </div>
            <TextInput id='image' type='url' name='image' required={true} />
          </div>
          {/* car rating */}
          <div id='select'>
            <div className='mb-2 block'>
              <Label htmlFor='rating' value='Rating Star' />
            </div>
            <Select id='rating' name='rating' required={true}>
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
            <Textarea id='description' type='text' name='description' />
          </div>
        </div>

        <Button type='submit'>ADD TOYS</Button>
      </form>
    </div>
  );
};

export default AddToys;
