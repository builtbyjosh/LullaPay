import { useEffect, useContext } from 'react';
import { Row, Col, Stack, Container } from 'react-bootstrap';
import DaycareInfo from './components/DaycareInfo';
import HeroSection from './components/HeroSection';
import ParentInfo from './components/ParentInfo';

import UserContext from '../../context/UserContext';
import { get_user_info } from '../../api/userApi';

const HomeScreen = () => {
  const user_context = useContext(UserContext);

  const set_user_info = async () => {
    let userInfo = await get_user_info();
    console.log('user_info', userInfo);
    user_context.setUserInfo(userInfo);
  };

  useEffect(() => {
    set_user_info();
  }, []);

  const handleSectionScroll = (sectionName) => {
    console.log(sectionName);
    const section = document.querySelector(`#${sectionName}`);
    console.log(section);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="h-100 ">
        <HeroSection handleSectionScroll={handleSectionScroll} />
        <div id="infoSection" className="ps-5">
          <DaycareInfo />
          <ParentInfo />
        </div>
      </div>
      {/* <ImageAndSvgDisplay /> */}
    </>
  );
};

export default HomeScreen;
