function ExperienceForm({ itemData, setItemData, onCancel, onSave}) {
  return (
    <>
      <label className="flex flex-col mb-4">
        Company
        <input type="text"
                placeholder="e.g. Fisher and Paykel Healthcare"
                value={itemData.companyName}
                onChange={(e) => setItemData({...itemData, companyName: e.target.value})}
                className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
      </label>

      <label className="flex flex-col mb-4">
        Job title
        <input type="text"
                placeholder="e.g. Software Developer"
                value={itemData.jobTitle}
                onChange={(e) => setItemData({...itemData, jobTitle: e.target.value})}
                className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
      </label>

      <div className="flex gap-4">
        <label className="flex flex-col mb-4 w-full">
          Start date
          <input type="date"
                  value={itemData.startDate}
                  onChange={(e) => setItemData({...itemData, startDate: e.target.value})}
                  className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
        </label>

        <label className="flex flex-col mb-4 w-full">
          End date
          <input type="date"
                  value={itemData.endDate}
                  onChange={(e) => setItemData({...itemData, endDate: e.target.value})}
                  className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
        </label>
      </div>

      <label className="flex flex-col mb-4">
        Location
        <input type="text"
                placeholder="e.g. Auckland, New Zealand"
                value={itemData.location}
                onChange={(e) => setItemData({...itemData, location: e.target.value})}
                className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
      </label>

      <label className="flex flex-col mb-4">
        Location
        <textarea
                placeholder="Describe your role"
                value={itemData.description}
                onChange={(e) => setItemData({...itemData, description: e.target.value})}
                className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
      </label>

      <div className="flex justify-end font-header">
        <button className="border-1 border-gray-300 bg-gray-100 rounded-lg px-2 py-1 w-20 mr-2 cursor-pointer"
                onClick={onCancel}>
          Cancel
        </button>
        <button className="border-1 border-blue-600 bg-blue-600 rounded-lg px-2 py-1 w-20 text-white cursor-pointer"
                onClick={onSave}>
          Save
        </button>
      </div>
    </>
  )
}

export default ExperienceForm;