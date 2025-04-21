import CvForm from "./components/CvForm";
import CvRenderer from "./components/CvRenderer";

function App() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex justify-center gap-4 m-auto">
        <CvForm />
        <CvRenderer />
      </div>
  </div>
  )
}

export default App
