import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import HabitList from "./Components/HabitList";
import AddHabit from "./Components/AddHabit";

function App() {
  const [habits, setHabits] = useState(() => {
    
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const handleAddHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, completed: false }]);
  };

  const handleCompleteHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AddHabit onAdd={handleAddHabit} darkMode={darkMode} />
        <HabitList
          habits={habits}
          onDelete={handleDeleteHabit}
          onComplete={handleCompleteHabit}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;