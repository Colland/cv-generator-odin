function Header({ personalDetails }) {
  return (
    <div className="w-full h-1/8 bg-[#39415d] flex flex-col justify-center items-center gap-4">
      <h1 className="text-gray-100 text-3xl font-bold">{personalDetails.fullName}</h1>
      <div className="flex text-gray-100 text-[17px] font-header gap-8">
        <p>{personalDetails.email}</p>
        <p>{personalDetails.phoneNum}</p>
        <p>{personalDetails.address}</p>
      </div>
    </div>
  )
}

export default Header;