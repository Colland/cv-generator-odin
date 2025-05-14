function SectionTitle({ name }) {
  return (
      <div className="flex justify-center items-center w-[90%] h-8 bg-[#ececec]">
        <h2 className="ml-4 text-lg text-gray-900 font-bold">
          {name}
        </h2>
      </div>
  )
}

export default SectionTitle;