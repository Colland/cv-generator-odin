import { useState } from 'react';
import EducationForm from './InputListForms/EducationForm';
import ExperienceForm from './InputListForms/ExperienceForm';
import ReferenceForm from './InputListForms/ReferenceForm';
import { v4 as uuidv4 } from 'uuid';
import { mockEducationData, mockExperienceData, mockReferenceData } from '../../data/mockInputData';
 
function FormInputList({ type }) {
  const [itemDataList, setItemDataList] = useState(getInitialMockData(type));
  const [currentItemData, setCurrentItemData] = useState(getInitialItemData(type));
  const [ItemViewActive, setItemViewActive] = useState(false);

  function saveItem() {
    const foundItem = itemDataList.find((item) => item.id === currentItemData.id);

    if(foundItem) {
      setItemDataList([...itemDataList.map((item) => (item.id === currentItemData.id) ? currentItemData : item)])
    }
    else {
      setItemDataList([...itemDataList, currentItemData]);
    }
    setCurrentItemData(getInitialItemData(type));
    setItemViewActive(false);
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

      case "reference":
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

        case "reference":
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

  function getInitialMockData(type) {
    switch(type) {
      case "education":
        return mockEducationData;
      
      case "experience":
        return mockExperienceData;

      case "reference":
        return mockReferenceData;

      default:
        return null;
    }
  }

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

      {type === "reference" && (
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
        {itemDataList.map((itemData) => {return <FormInputListItem key={itemData.id} itemData={itemData} itemType={type} editItem={goToEditItem}/>})}

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
export default FormInputList;

function FormInputListItem({ itemData, itemType, editItem }) {
  if(itemType === "education")
  {
    return (
      <div onClick={() => editItem(itemData)} 
           className="flex flex-col px-3 py-3 border-b-3 bg-white border-gray-100 font-header cursor-pointer"
      >

        <div className="flex justify-between items-center">
          <p className="text-[#253b9e]">{itemData.uniName}</p>
          <p className="text-[14px] italic">{itemData.startDate.slice(0, 7) + " - " + itemData.endDate.slice(0, 7)}</p>
        </div>
        <div className="flex justify-between">
          <p className="italic text-xs">{itemData.degree}</p>
        </div>
      </div>
    )
  }
  else if(itemType === "experience") {
    return (
      <div onClick={() => editItem(itemData)} 
           className="flex flex-col px-3 py-3 border-b-3 bg-white border-gray-100 font-header cursor-pointer"
      >

        <div className="flex justify-between items-center">
          <p className="text-[#253b9e]">{itemData.companyName}</p>
          <p className="text-[14px] italic">{itemData.startDate.slice(0, 7) + " - " + itemData.endDate.slice(0, 7)}</p>
        </div>
        <div className="flex justify-between">
          <p className="italic text-xs">{itemData.jobTitle}</p>
        </div>
      </div>
    )
  }
  else if(itemType === "reference") {
    return (
      <div onClick={() => editItem(itemData)} 
           className="flex flex-col px-3 py-3 border-b-3 bg-white border-gray-100 font-header cursor-pointer"
      >

        <div className="flex justify-between items-center">
          <p className="text-[#253b9e]">{itemData.referenceName}</p>
          <p className="text-[14px] italic">{itemData.email}</p>
        </div>
        <div className="flex justify-between">
          <p className="italic text-xs">{itemData.relation}</p>
        </div>
    </div>
    )
  }
  else{
    return null;
  }
}