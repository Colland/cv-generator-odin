function CvHeader() {
  return (
    <div className="w-full h-1/7 bg-blue-950 flex flex-col justify-center items-center">
      <h1>Full name</h1>
      <div className="flex">
        <p>email</p>
        <p>phone</p>
        <p>location</p>
      </div>
    </div>
  )
}

export default CvHeader;