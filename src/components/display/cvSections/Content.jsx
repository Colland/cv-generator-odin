function Content({ data, type }) {
  function formatDate(date) {
    const d = new Date(date + "-01");
    return d.toLocaleString("default", { month: "long", year: "numeric" });
  }

  return (
    <div className="flex flex-col w-[89%] gap-2">
      {data.map((entry) => {
        switch (type) {
          case "education":
            return (
              <div className="font-header text-gray-900 mt-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">{entry.uniName}</p>
                    <p className="text-[14px] italic">{entry.degree}</p>
                  </div>
                  <div className="flex flex-col text-[14px]">
                    <p className="text-end font-medium">{formatDate(entry.startDate)} - {formatDate(entry.endDate)}</p>
                    <p className="italic text-end">{entry.location}</p>
                  </div>
                </div>
              </div>
            )

          case "experience":
            return (
              <>
                <div className="font-header text-gray-900 mt-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold">{entry.jobTitle}</p>
                      <p className="text-[14px] italic">{entry.companyName}</p>
                    </div>
                    <div className="flex flex-col text-[14px]">
                      <p className="text-end font-medium">{formatDate(entry.startDate)} - {formatDate(entry.endDate)}</p>
                      <p className="italic text-end">{entry.location}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-2 mb-2 w-[85%]">{entry.description}</p>
              </>
            )

          case "references":
            return (
              <div className="flex font-header text-gray-900 mt-3">
                <div className="flex flex-col font-bold">
                  <p>Name: </p>
                  <p>Relation: </p>
                  <p>Contact: </p>
                </div>
                <div className="flex flex-col ml-3 font-body">
                  <p>{entry.referenceName}</p>
                  <p>{entry.relation}</p>
                  <p>{entry.email}</p>
                </div>
              </div>
            )
        }
      })}
    </div>
  )
}
export default Content