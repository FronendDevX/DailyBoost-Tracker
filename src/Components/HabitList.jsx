import React from "react";
import HabitItem from "./HabitItem";

const HabitList = ({ habits, onDelete, onComplete }) => {
  return (
    <div className="mt-4">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default HabitList;