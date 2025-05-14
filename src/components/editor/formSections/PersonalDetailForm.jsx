function PersonalDetailForm({cvData, setCvData}) {

  function updateDetails(propertyName, value) {
    setCvData({...cvData, personalDetails: {...cvData.personalDetails, [propertyName]: `${value}`}})
  }

  return (
    <div className="bg-white py-3">
      <label className="flex flex-col ml-3 mr-3 mb-4">
        Full name
        <input type="text"
               placeholder="Enter your full name"
               value={cvData.personalDetails.fullName}
               onChange={(e) => updateDetails("fullName", e.target.value)}
               className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>

      <label className="flex flex-col ml-3 mr-3 mb-4">
        Phone number
        <input type="tel"
               placeholder="Enter your phone number"
               value={cvData.personalDetails.phoneNum}
               onChange={(e) => updateDetails("phoneNum", e.target.value)}
               className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>

      <label className="flex flex-col ml-3 mr-3 mb-4">
        Email
        <input type="email"
               placeholder="Enter your email"
               value={cvData.personalDetails.email}
               onChange={(e) => updateDetails("email", e.target.value)}
               className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>

      <label className="flex flex-col ml-3 mr-3 mb-4">
        Address
        <input type="text"
               placeholder="Enter your address"
               value={cvData.personalDetails.address}
               onChange={(e) => updateDetails("address", e.target.value)}
               className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>
    </div>
  )
}

export default PersonalDetailForm;