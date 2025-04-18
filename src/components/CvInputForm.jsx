import { IoIosArrowDown } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

import { useState } from 'react';

function CvInputForm() {
  return (
    <div className=" w-100 h-full flex flex-col">
      <CvInputFormSection title="Personal Details" icon={<IoPersonSharp size="21px"/>} />
      <CvInputFormSection title="Education" icon={<FaSchool size="21px" />} />
      <CvInputFormSection title="Work Experience" icon={<MdOutlineWorkOutline size="21px"/>} />
      <CvInputFormSection title="References" icon={<TbWriting size="21px" />} />
    </div>
  )
}

function CvInputFormSection({ title, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mb-3">
      <div className="w-full h-12 rounded-lg bg-white flex items-center justify-between shadow-xs cursor-pointer"
          onClick={handleClick}>

        <div className="flex ml-5 items-center">
          <span className="mr-3">
            {icon}
          </span>

          <h1 className="text-xl">{title}</h1>
        </div>

        <span className="mr-3">
          <IoIosArrowDown className={'transition ' + (isOpen ? 'rotate-180' : '')} size="15px"/>
        </span>
      </div>
      {isOpen && (
        <div className="bg-gray-100 rounded-b-lg shadow-xs">
          <label className="flex flex-col">
            First name
            <input type="text" />
          </label>
        </div>
      )}
    </div>
  )
}

export default CvInputForm;