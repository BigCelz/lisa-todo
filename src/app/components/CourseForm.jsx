import React, { useState } from "react";
import useCourseStore from "../store/courseStore";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add a task");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl px-4 py-6 mx-auto my-6 w-[90%] sm:w-[80%] lg:w-[70%]">
      <div className="bg-white  rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-1 text-orange-600">
          Lisa's Todo
        </h2>

        <span className="block text-center text-gray-700 mt-1 mb-4 font-semibold">for {today}</span>

        <div className="form-container flex flex-col !sm:flex-row gap-3">
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Enter task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleCourseSubmit}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md whitespace-nowrap"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
