import useTitles from "../../shared/useTitles";
import Category from "./Category";
import ImageCard from "./ImageGallery";
import MainCarousel from "./MainCarousel";
import SupportPart from "./SupportPart";

const Home = () => {
  useTitles('')
  return (
    <div className='min-h-fit'>    
      <MainCarousel />
      <Category/>
      <ImageCard/>
      <SupportPart/>
    </div>
  );
};

export default Home;
