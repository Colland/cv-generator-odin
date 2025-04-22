function ReferenceForm({ itemData, setItemData, onCancel, onSave}) {
  return (
    <>
      <label className="flex flex-col mb-4">
        Name
        <input type="text"
                placeholder="e.g. Andrew Soloman"
                value={itemData.referenceName}
                onChange={(e) => setItemData({...itemData, referenceName: e.target.value})}
                className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
      </label>

      <label className="flex flex-col mb-4">
        Relation
        <input type="text"
                placeholder="e.g. Former mentor"
                value={itemData.relation}
                onChange={(e) => setItemData({...itemData, relation: e.target.value})}
                className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
      </label>

      <div className="flex gap-4">
        <label className="flex flex-col mb-4 w-full">
          Contact email
          <input type="email"
                  placeholder="e.g. a.soloman@gmail.com"
                  value={itemData.email}
                  onChange={(e) => setItemData({...itemData, email: e.target.value})}
                  className="outline-0 bg-gray-50 border-1 border-gray-200 rounded-lg pl-3 pr-3 pt-2 pb-2 mt-0.5 text-[14px] focus:border-gray-500" />
        </label>
      </div>

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

export default ReferenceForm;