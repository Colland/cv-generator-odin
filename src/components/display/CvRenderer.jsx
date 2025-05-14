import Header from "./cvSections/Header";
import SectionTitle from "./cvSections/SectionTitle";
import Content from "./cvSections/Content"

function CvRenderer({ cvData }) {
  return (
    <div className="flex flex-col gap-10 bg-white rounded-xl shadow-xl
                    w-[21cm] h-[29.7cm]">

      <Header personalDetails={cvData.personalDetails} />

      <div className="w-full flex flex-col items-center">
        <SectionTitle name="Education" />
        <Content data={cvData.education} type="education" />
      </div>

      <div className="w-full flex flex-col items-center">
        <SectionTitle name="Experience" />
        <Content data={cvData.experience} type="experience" />
      </div>

      <div className="w-full flex flex-col items-center">
        <SectionTitle name="References" />
        <Content data={cvData.references} type="references" />
      </div>
    </div>
  )
}

export default CvRenderer;