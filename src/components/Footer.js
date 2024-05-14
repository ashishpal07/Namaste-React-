import { LINKEDIN_URL } from "../utils/constants";
import { FaFire, FaHeart } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center p-4 shadow-lg text-[20px] bg-lime-300 mb-0">
      <p className="mx-3">Created By</p>
      <FaHeart className="mx-3 text-red-600" /> 
      <a href={LINKEDIN_URL} target="_blank" className="mx-3">
        Ashish Pal
      </a>
      <FaRegCopyright className="mx-3" />
      {year}
      <strong className="flex items-center mx-3">
        Food
        <span>
          <FaFire className="text-red-500" />
        </span>
      </strong>
    </div>
  );
};

export default Footer;
