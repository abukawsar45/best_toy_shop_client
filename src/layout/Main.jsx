import { Outlet } from 'react-router-dom';
import Navber from '../shared/Navber';
import FooterSection from '../shared/FooterSection';

const Main = () => {
  return (
    <div>
      <Navber/>
      <Outlet />
      <FooterSection/>
    </div>
  );
};

export default Main;
