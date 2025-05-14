import { useState } from "react";
import CvEditor from "./components/editor/CvEditor";
import CvRenderer from "./components/display/CvRenderer";
import { mockEducationData, mockExperienceData, mockReferenceData } from './data/mockInputData';

function App() {
  const [cvData, setCvData] = useState({
    personalDetails: {
      fullName: '',
      phoneNum: '',
      email: '',
      address: ''
    },
    education: mockEducationData,
    experience: mockExperienceData,
    references: mockReferenceData
  });

  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex justify-center gap-4 m-auto">
        <CvEditor cvData={cvData} setCvData={setCvData} />
        <CvRenderer cvData={cvData} />
      </div>
  </div>
  )
}

export default App
