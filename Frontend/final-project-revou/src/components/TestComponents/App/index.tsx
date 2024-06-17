import { useState } from "react";
import HeaderTest from "../HeaderTest";
import CourseGoalList from "../CourseGoalList";
import NewGoal from "../NewGoal";

export interface CourseGoal {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <HeaderTest image={{ src: "", alt: "" }}>
        <h1>Your Course Goals</h1>
      </HeaderTest>{" "}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals} />
    </main>
  );
}
