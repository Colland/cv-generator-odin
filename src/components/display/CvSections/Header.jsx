import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";

function Header({ personalDetails }) {
  return (
    <div className="w-full h-1/8 bg-[#39415d] flex flex-col justify-center items-center gap-4">
      <h1 className="text-gray-100 text-3xl font-bold">{personalDetails.fullName}</h1>
      <div className="flex text-gray-100 text-[17px] font-header gap-8">
        <p className="flex items-center">
          {personalDetails.email !== "" && <MdEmail className="mr-2" />}{personalDetails.email}
        </p>
        <p className="flex items-center">
          {personalDetails.phoneNum !== "" && <FaPhone className="mr-2" />}{personalDetails.phoneNum}
        </p>
        <p className="flex items-center">
          {personalDetails.address !== "" && <FaHouse className="mr-2" />}{personalDetails.address}
        </p>
      </div>
    </div>
  )
}

export default Header;