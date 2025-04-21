import { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import EducationForm from './EducationForm';
import { v4 as uuidv4 } from 'uuid';
 
function FormInputList({ type }) {
  const [itemDataList, setItemDataList] = useState([{id: uuidv4(), uniName: "University of Auckland", startDate: "2024-06", endDate: "2025-01"},
                                                    {id: uuidv4(), uniName: "University of Technology", startDate: "2024-06", endDate: "2025-01"}
  ]);
  const [ItemViewActive, setItemViewActive] = useState(false);
  const [currentItemData, setCurrentItemData] = useState(getInitialItemData(type));

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

      default:
        return "undefined";
    }
  }

  function getInitialItemData(type) {
    if (type === "education") {
      return {
        id: uuidv4(),
        uniName: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
      };
    } else if (type === "experience") {
      return {
        id: uuidv4(),
        companyName: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      };
    }
    return {};
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
      </div>
    )
  }
  else
  {
    return (
      <div className="flex flex-col bg-white">
        {itemDataList.map((itemData) => {return <FormInputListItem key={itemData.id} itemData={itemData} itemType={type} editItem={goToEditItem}/>})}

        <div className="bg-white p-2 flex justify-between items-center font-header px-3 py-4 cursor-pointer"
             onClick={() => setItemViewActive(true)}>

          <button className="font-semibold">
            {getButtonText(type)}
          </button>

          <IoIosAdd size="26px"/>
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
           className="flex justify-between px-3 py-4 border-t-0 border-b-1 bg-white border-gray-200 font-header cursor-pointer">

        <p>{itemData.uniName}</p>
        <p>{itemData.startDate + " - " + itemData.endDate}</p>
      </div>
    )
  }
  else if(itemType === "experience") {
    return;
  }
  else{
    return null;
  }
}