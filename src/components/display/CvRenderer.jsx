import Header from "./CvSections/Header";
import SectionTitle from "./CvSections/SectionTitle";

function CvRenderer({ cvData }) {
  return (
    <div className="flex flex-col gap-10 bg-white rounded-xl shadow-xl
                    w-[21cm] h-[29.7cm]">

        <Header personalDetails={cvData.personalDetails}/>
        <div className="w-full flex justify-center">
          <SectionTitle name="Education"/>
          {/**TODO - CvSectionContent data=cvData.education */}
        </div>
        <div className="w-full flex justify-center">
          <SectionTitle name="Experience"/>
        </div>
        <div className="w-full flex justify-center">
          <SectionTitle name="References"/>
        </div>
    </div>
  )
}

export default CvRenderer;