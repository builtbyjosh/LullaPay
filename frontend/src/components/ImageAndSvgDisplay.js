import React from 'react';
import { Image } from 'react-bootstrap';
import imgs from '../images/fileList';

const ImageAndSvgDisplay = () => {
  const {
    abc,
    baby,
    payment_security_lock,
    playground,
    toboggan_playground,
  } = imgs.svgs;
  const { playground_trees, hand_holding, ball_pit } = imgs.photos;
  return <div>
    <img src={abc} />
    <img src={baby} />
    <img src={payment_security_lock} />
    <img src={playground} />
    <img src={toboggan_playground} />
    <Image src={playground_trees} />
    <Image src={hand_holding} />
    <Image src={ball_pit} />
  </div>;
};

export default ImageAndSvgDisplay;
