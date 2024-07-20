// components/Project.js

import Image from 'next/image';
import Link from 'next/link';

const Project = ({ imageSrc, title, description, linkHref}) => {
  return (
    <div className=" Project-card min-w-[20rem] bg-black shadow-lg m-4">
        <div className="relative w-full h-[15rem]"> {/* Adjust the height as needed */}
        <Image className="object-cover" src={imageSrc} alt='' layout='fill' />
      </div>
      <div className="px-6 py-4 mt-[1rem]">
        <div className="font-[700] text-xl mt-1 mb-2">{title}</div>
        <p className="text-700 text-base">{description}</p>
      </div>
      <div className="text-center px-6 py-4">
        <Link href={linkHref} className="P-link -center hover:text-blue-700">
        <i className="fa-solid fa-link font-[600] text-black "></i>
        </Link>
      </div>
    </div>
  );
};

export default Project;
