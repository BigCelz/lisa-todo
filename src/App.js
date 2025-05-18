import "./App.css";
import CourseForm from "./app/components/CourseForm";
import CourseList from "./app/components/CourseList";


function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10">
      <div className="w-full max-w-md space-y-6">
        <CourseForm />
        <CourseList />
      </div>
    </div>
  );
}

export default App;
