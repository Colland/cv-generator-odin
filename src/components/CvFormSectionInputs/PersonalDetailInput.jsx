function PersonalDetailInput() {
  return (
    <div className="bg-white py-3">
      <label className="flex flex-col ml-3 mr-3 mb-4">
        Full name
        <input type="text" placeholder="Enter your full name" className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>

      <label className="flex flex-col ml-3 mr-3 mb-4">
        Phone number
        <input type="tel" placeholder="Enter your phone number" className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>

      <label className="flex flex-col ml-3 mr-3 mb-4">
        Email
        <input type="email" placeholder="Enter your email" className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>

      <label className="flex flex-col ml-3 mr-3 mb-4">
        Address
        <input type="text" placeholder="Enter your address" className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500"/>
      </label>
    </div>
  )
}

export default PersonalDetailInput;