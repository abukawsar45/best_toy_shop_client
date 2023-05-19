import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitles from './../../shared/useTitles';

const AddToys = () => {
  useTitles('Add Toys |')
  const { user } = useContext(AuthContext)
  console.log(user.email);

  const handleAddToysForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const carName = form.name.value;
    const quantity = form.quantity.value
    const category = form.category.value;
    const price = form.price.value;
    const age = form.age.value;
    const type = form.type.value;
    const brand = form.brand.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const soldBy = user?.email;
    const carInfo = {
      carName,
      quantity,
      category,
      price,
      age,
      type,
      rating,
      brand,
      description,
      soldBy
    }
    console.log(carInfo);
    fetch(`http://localhost:5000/addToys`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(carInfo)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      ;
  }
  return (
    <div className='bg-neutral-200 px-2 md:px-6 py-4 md:py-6'>
      <form onSubmit={handleAddToysForm} className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8 '>
          {/* car name */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='name' value='Car Name' />
            </div>
            <TextInput id='name' type='text' name='name' required={true} />
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
              <option>Gaming</option>
              <option>Defance Force</option>
              <option>Vehicles</option>
              <option></option>
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
          <div>
            <div className='mb-2 '>
              <Label htmlFor='type' value='Type' />
            </div>
            <TextInput id='type' type='text' name='type' required={true} />
          </div>
          {/* baby age */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='age' value='Baby Age' />
            </div>
            <TextInput id='age' type='text' name='age' required={true} />
          </div>
          {/* car brand */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='brand' value='Brand' />
            </div>
            <TextInput id='brand' type='text' name='brand' required={true} />
          </div>
          {/* car rating */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='rating' value='Rating Star' />
            </div>
            <TextInput id='rating' type='text' name='rating' required={true} />
          </div>
          {/* car description */}
          <div>
            <div className='mb-2 '>
              <Label htmlFor='description' value='Description' />
            </div>
            <Textarea
              id='description'
              type='text'
              name='description'
              required={true}
            />
          </div>
        </div>

        <Button type='ADD TOYS'>Login</Button>
      </form>
    </div>
  );
};

export default AddToys;