import { useState } from "react";

const AddHabit = ({ onAdd, darkMode }) => {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAdd({ id: Date.now(), name: habitName });
      setHabitName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Add a new habit"
          className={`flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-500"
              : "bg-white text-gray-800 border-gray-300 focus:ring-blue-500"
          }`}
        />
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
            darkMode ? "dark:bg-blue-600 dark:hover:bg-blue-700" : ""
          }`}
        >
          Add Habit
        </button>
      </div>
    </form>
  );
};

export default AddHabit;