import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Category from './Category';
import ImageCard from './ImageGallery';
import MainCarousel from './MainCarousel';
import SupportPart from './SupportPart';
import useTitles from '../../shared/useTitles';




const Home = () => {
  useTitles('');
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='min-h-fit' data-aos='fade-in'>



      <MainCarousel />
      <Category />
      <ImageCard />
      <SupportPart />
    </div>
  );
};

export default Home;
