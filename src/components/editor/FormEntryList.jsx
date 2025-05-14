import { useState } from 'react';
import EducationForm from './formSections/EducationForm';
import ExperienceForm from './formSections/ExperienceForm';
import ReferenceForm from './formSections/ReferenceForm';
import { v4 as uuidv4 } from 'uuid';

import { AiFillDelete } from "react-icons/ai";

function FormEntryList({ type, cvData, setCvData }) {
  const [currentItemData, setCurrentItemData] = useState(getInitialItemData(type));
  const [ItemViewActive, setItemViewActive] = useState(false);

  const inputTypeMap = {
    education: "education",
    experience: "experience",
    references: "references"
  };

  const itemList = cvData[inputTypeMap[type]];

  function saveItem() {
    const inputTypeKey = inputTypeMap[type];

    const foundItem = itemList.find((item) => item.id === currentItemData.id);
    let updatedSection;

    if(foundItem) {
      updatedSection = itemList.map((item) => (item.id === currentItemData.id) ? currentItemData : item);
    }
    else {
      updatedSection = [...itemList, currentItemData];
    }

    setCvData({
      ...cvData,
      [inputTypeKey]: updatedSection
    })

    setCurrentItemData(getInitialItemData(type));
    setItemViewActive(false);
  }

  function deleteItem(itemId) {
    const filteredItems = itemList.filter((item) => item.id !== itemId);
    const inputTypeKey = inputTypeMap[type];

    setCvData({
      ...cvData,
      [inputTypeKey]: filteredItems
    })
  }

  function cancelItem() {
    setCurrentItemData(getInitialItemData(type));
    setItemViewActive(false);
  }

  function goToEditItem(itemData) {
    setCurrentItemData(itemData);
    setItemViewActive(true);
  }

  function getButtonText(listType) {
    switch(listType) {
      case "education":
        return "Add a school";

      case "experience":
        return "Add a job";

      case "references":
        return "Add a reference"

      default:
        return "undefined";
    }
  }

  function getInitialItemData(type) {
    switch (type) {
      case "education":
        return {
          id: uuidv4(),
          uniName: '',
          degree: '',
          startDate: '',
          endDate: '',
          location: '',
        };
      case "experience":
        return {
          id: uuidv4(),
          companyName: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        };

        case "references":
          return {
            id: uuidv4(),
            referenceName: '',
            relation: '',
            email: ''
          };

        default:
          return null;
    }
  };

  if(ItemViewActive) {
    return (
      <div className="bg-white p-3 flex flex-col">
       {type === "education" && (
          <EducationForm itemData={currentItemData}
                         setItemData={setCurrentItemData}
                         onCancel={cancelItem}
                         onSave={saveItem} />
      )}

      {type === "experience" && (
        <ExperienceForm itemData={currentItemData}
                        setItemData={setCurrentItemData}
                        onCancel={cancelItem}
                        onSave={saveItem} />
      )}

      {type === "references" && (
        <ReferenceForm itemData={currentItemData}
                      setItemData={setCurrentItemData}
                      onCancel={cancelItem}
                      onSave={saveItem} />
      )}
      </div>
    )
  }
  else
  {
    return (
      <div className="flex flex-col bg-white border-t-1 border-t-gray-100 text-gray-800">
        {itemList.map((itemData) => { return <FormEntry key={itemData.id} itemData={itemData} itemType={type} editItem={goToEditItem} deleteItem={deleteItem} /> })}

        <div className="bg-white p-2 flex justify-center items-center font-header px-3 py-2.5 cursor-pointer text-gray-500"
             onClick={() => setItemViewActive(true)}>

          <button className="font-semibold text-[15px] mr-2 cursor-pointer italic">
            + {getButtonText(type)}
          </button>
        </div>
      </div>
    )
  }
}
export default FormEntryList;

function FormEntry({ itemData, itemType, editItem, deleteItem }) {
  if (itemType === "education") {
    return (
      <div
        className="relative group border-b-3 bg-white border-gray-100 font-header cursor-pointer px-3 py-3"
      >
        <div
          onClick={() => editItem(itemData)}
          className="flex flex-col w-full relative group-hover:-translate-x-[50px] transition-transform duration-200"
        >
          <div className="flex justify-between items-center">
            <p className="text-[#253b9e]">{itemData.uniName}</p>
            <p className="text-[14px] italic">
              {itemData.startDate.slice(0, 7)} - {itemData.endDate.slice(0, 7)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="italic text-xs">{itemData.degree}</p>
          </div>
        </div>

        <div
          onClick={() => deleteItem(itemData.id)}
          className="absolute top-0 right-0 h-full w-[50px] bg-red-400 translate-x-full group-hover:translate-x-0 transition-transform duration-200 flex items-center justify-center text-white">
          <AiFillDelete size="20px" />
        </div>
      </div>
    );
  }
  else if(itemType === "experience") {
    return (
      <div className="relative group border-b-3 bg-white border-gray-100 font-header cursor-pointer px-3 py-3">
        <div
          onClick={() => editItem(itemData)}
          className="flex flex-col w-full relative group-hover:-translate-x-[50px] transition-transform duration-200"
        >
          <div className="flex justify-between items-center">
            <p className="text-[#253b9e]">{itemData.companyName}</p>
            <p className="text-[14px] italic">{itemData.startDate.slice(0, 7) + " - " + itemData.endDate.slice(0, 7)}</p>
          </div>
          <div className="flex justify-between">
            <p className="italic text-xs">{itemData.jobTitle}</p>
          </div>
        </div>

        <div
          onClick={() => deleteItem(itemData.id)}
          className="absolute top-0 right-0 h-full w-[50px] bg-red-400 translate-x-full group-hover:translate-x-0 transition-transform duration-200 flex items-center justify-center text-white"
        >
          <AiFillDelete size="20px" />
        </div>
      </div>
    )
  }
  else if(itemType === "references") {
    return (
      <div className="relative group border-b-3 bg-white border-gray-100 font-header cursor-pointer px-3 py-3">

        <div
          onClick={() => editItem(itemData)}
          className="w-full relative group-hover:-translate-x-[50px] transition-transform duration-200"
        >
          <div className="flex justify-between items-center">
            <p className="text-[#253b9e]">{itemData.referenceName}</p>
            <p className="text-[14px] italic">{itemData.email}</p>
          </div>
          <div className="flex justify-between">
            <p className="italic text-xs">{itemData.relation}</p>
          </div>
        </div>

        <div
          onClick={() => deleteItem(itemData.id)}
          className="absolute top-0 right-0 h-full w-[50px] bg-red-400 translate-x-full group-hover:translate-x-0 transition-transform duration-200 flex items-center justify-center text-white"
        >
          <AiFillDelete size="20px" />
        </div>
    </div>
    )
  }
  else{
    return null;
  }
}