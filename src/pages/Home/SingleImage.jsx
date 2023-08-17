

const SingleImage = ({ img }) => {
  return (
    <div className='single-image'>
      <img src={img.url} alt={img.alt} />
    </div>
  );
};

export default SingleImage;
