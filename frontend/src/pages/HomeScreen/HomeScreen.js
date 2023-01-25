import { useEffect, useContext } from 'react';
import { Row, Col, Stack, Container } from 'react-bootstrap';
import DaycareInfo from './components/DaycareInfo';
import HeroSection from './components/HeroSection';
import ParentInfo from './components/ParentInfo';
import ImageAndSvgDisplay from '../../components/ImageAndSvgDisplay';
import UserContext from '../../context/UserContext';
import { get_user_info } from '../../api/userApi';

const HomeScreen = () => {


  const { user_info } = useContext(UserContext);
  console.log('USER INFO: ', user_info);
  const storedUserInfo = window.localStorage.getItem('userInfo');
  console.log('STORED USER INFO: ', storedUserInfo);


  useEffect(() => {
    if (!user_info._id) {
      get_user_info(JSON.parse(storedUserInfo));
    }

  }, [storedUserInfo, user_info]);




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
