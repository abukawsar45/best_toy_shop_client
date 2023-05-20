
const myCarouselData = [
"https://i.ibb.co/ncrXc2V/1.png"
"https://i.ibb.co/B3s7v4h/2.png"
"https://i.ibb.co/XXR8kzF/3.png"
"https://i.ibb.co/yg7BSdM/4.png"
]

const MainCarousel = () => {
  return (
    <div className='absolute bottom-4 right-0 left-0'>
      <div className='flex items-center justify-center gap-2'>
        {myCarouselData.map((data, i) => (
          <div
            className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;