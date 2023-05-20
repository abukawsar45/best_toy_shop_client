
const SingleImage = ({ img }) => {
  console.log(img);

  return (
    <div className=''>
     <img src={img.image} alt="" />
    </div>
  );
};

export default SingleImage;
