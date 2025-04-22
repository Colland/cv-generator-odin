import CvHeader from "./CvSections/CvHeader";

function CvRenderer() {
  return (
    <div className="bg-white rounded-xl shadow-xl
                    w-[21cm] h-[29.7cm]">
        <CvHeader />
        <CvEducation />
        <CvReferences />
    </div>
  )
}

export default CvRenderer;