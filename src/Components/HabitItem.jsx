import React from "react";

const HabitItem = ({ habit, onDelete, onComplete, darkMode }) => {
  const progress = habit.completed ? 100 : 0;

  return (
    <div
      className={`p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <span
          className={`text-lg font-medium ${
            habit.completed
              ? "line-through text-gray-500"
              : darkMode
              ? "text-white"
              : "text-gray-800"
          }`}
        >
          {habit.name}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onComplete(habit.id)}
            className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-200 ${
              habit.completed
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
          >
            {habit.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => onDelete(habit.id)}
            className={`bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-200 ${
              darkMode ? "dark:bg-red-600 dark:hover:bg-red-700" : ""
            }`}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="mt-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              darkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HabitItem;