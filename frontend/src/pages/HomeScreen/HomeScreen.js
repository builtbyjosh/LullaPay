import { useRef } from 'react';
import { Row, Col, Stack, Container } from 'react-bootstrap';
import DaycareInfo from './components/DaycareInfo';
import HeroSection from './components/HeroSection';
import ParentInfo from './components/ParentInfo';

const HomeScreen = () => {
  const infoRef = useRef(null);
  const parentRef = useRef(null)
  const daycareRef = useRef(null)

  const handleSectionScroll = (sectionName) => {
    console.log(sectionName);
    const section = document.querySelector(`#${sectionName}`)
    console.log(section)
    section.scrollIntoView({behavior: 'smooth', block: 'start'})
  };

  return (
    <>
      <div className="h-100 ">
        <HeroSection handleSectionScroll={handleSectionScroll} />
        <div id='infoSection'>
          <DaycareInfo />
          <ParentInfo />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
