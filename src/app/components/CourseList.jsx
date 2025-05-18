import React from "react";
import useCourseStore from "../store/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus
  );

  return (
    <div className="rounded-xl px-4 py-2 mx-auto my-6 w-[90%] sm:w-[80%] lg:w-[70%]">
      <ul className="space-y-3">
        {courses.map((course) => (
          <li
            key={course.id}
            className={`flex items-center justify-between p-4 rounded-md border transition ${
              course.completed
                ? "bg-green-100 border-green-300"
                : "bg-white border-gray-200"
            }`}
          >
            <label className="flex items-center gap-3 cursor-pointer w-full">
              <input
                type="checkbox"
                checked={course.completed}
                onChange={() => toggleCourseStatus(course.id)}
                className="accent-orange-500"
              />
              <span
                className={`flex-1 ${
                  course.completed
                    ? "line-through text-green-700 italic text-base font--semibold"
                    : "text-gray-800 italic text-base font-semibold"
                }`}
              >
                {course.title}
              </span>
            </label>
            <button
              onClick={() => removeCourse(course.id)}
              className="text-sm text-red-500 hover:text-red-700 transition "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
