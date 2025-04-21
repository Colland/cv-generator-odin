import { IoIosArrowDown } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

import { useState } from 'react';
import PersonalDetailInput from "./CvFormSectionInputs/PersonalDetailInput";
import FormInputList from "./CvFormSectionInputs/FormInputList";

function CvForm() {
  return (
    <div className=" w-120 h-full flex flex-col">
      <CvFormSection title="Personal Details" icon={<IoPersonSharp size="21px"/>} content={<PersonalDetailInput />} />
      <CvFormSection title="Education" icon={<FaSchool size="21px" />} content={<FormInputList type="education" />} />
      <CvFormSection title="Work Experience" icon={<MdOutlineWorkOutline size="21px"/>} />
      <CvFormSection title="References" icon={<TbWriting size="21px" />} />
    </div>
  )
}

function CvFormSection({ title, icon, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mb-3">
      <div className={"w-full h-12 " + (isOpen ? 'rounded-t-lg' : 'rounded-lg') + " flex items-center justify-between shadow-xs cursor-pointer bg-white border-1 border-gray-200"}
           onClick={handleClick}>

        <div className="flex ml-5 items-center">
          <span className="mr-3">
            {icon}
          </span>

          <h1 className="text-xl">{title}</h1>
        </div>

        <span className="mr-3">
          <IoIosArrowDown className={'transition ' + (isOpen ? 'rotate-180' : '')} size="15px" />
        </span>
      </div>
      <div className={`transition-all duration-250 overflow-hidden 
        ${isOpen ? 'max-h-[1000px]' : 'max-h-0'} 
         rounded-b-lg shadow-lg border-1 border-gray-100`}>
        {content}
      </div>
    </div>
  )
}

export default CvForm;