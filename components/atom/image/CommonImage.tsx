import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CommonImageProps {
  src: StaticImageData;
  alt: string;
  className: string;
}

const CommonImage: React.FC<CommonImageProps> = (props) => {
  return <Image src={props.src} alt={props.alt} className={props.className} />;
};

export { CommonImage };
