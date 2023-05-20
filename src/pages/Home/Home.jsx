import useTitles from "../../shared/useTitles";
import MainCarousel from "./MainCarousel";

const Home = () => {
  useTitles('')
  return (
    <div className='min-h-fit'>    
     <MainCarousel/>
    </div>
  );
};

export default Home;
