import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LeftDragable from "./components/LeftDragable";
import RightDragable from "./components/RightDragable";
import Steps from "./components/Steps";
import { DragDropContext } from "react-beautiful-dnd";

const exercise = [
  { id: "warm-up", name: "Warm up", totalWidth: 3, sections: [{ height: "75%", km: 3 }] },
  { id: "active", name: "Active", totalWidth: 3, sections: [{ height: "85%", km: 3 }] },
  { id: "cool-down", name: "Cool Down", totalWidth: 3, sections: [{ height: "65%", km: 3 }] },
  {
    id: "two-step-repeat",
    name: "Two Step Repeats",
    totalWidth: 4,
    sections: [
      { height: "95%", km: 2, exerciseLevel: "Hard" },
      { height: "70%", km: 2, exerciseLevel: "Easy" },
    ],
  },
  {
    id: "ramp-up",
    name: "Ramp Up",
    totalWidth: 5,
    sections: [
      { height: "60%", km: 2, exerciseLevel: "Active" },
      { height: "70%", km: 1, exerciseLevel: "Active" },
      { height: "80%", km: 1, exerciseLevel: "Active" },
      { height: "90%", km: 1, exerciseLevel: "Active" },
    ],
  },
  {
    id: "ramp-down",
    name: "Ramp Down",
    totalWidth: 5,
    sections: [
      { height: "90%", km: 1 },
      { height: "80%", km: 1 },
      { height: "70%", km: 1 },
      { height: "60%", km: 2 },
    ],
  },
];

const WorkOut = [
  { id: "item-1", name: "warm up", totalWidth: 3, sections: [{ height: "50%", km: 3 }] },
];

function App() {
  const [workout, setWorkout] = useState(WorkOut);

  // Function to update km value based on item_id and index
  const updateKmValue = (itemId, index, newKm) => {
    // Update the exercise array
    const updatedExercise = exercise.map((item) => {
      if (item.id === itemId) {
        const updatedSections = item.sections.map((section, idx) =>
          idx === index ? { ...section, km: newKm } : section
        );
        return { ...item, sections: updatedSections };
      }
      return item;
    });

    // Optionally update the workout state if needed
    setWorkout((prevWorkout) =>
      prevWorkout.map((item) =>
        item.id === itemId
          ? {
              ...item,
              sections: item.sections.map((section, idx) =>
                idx === index ? { ...section, km: newKm } : section
              ),
            }
          : item
      )
    );
  };

  const onDragEnd = (event) => {
    console.log(event);
    const { destination, source } = event;

    if (!destination || destination.droppableId === source.droppableId) return;

    const droppedExercise = exercise[source.index];
    const newWorkout = [
      ...workout.slice(0, destination.index),
      droppedExercise,
      ...workout.slice(destination.index),
    ];

    setWorkout(newWorkout);
  };

  return (
    <main className="container mx-auto overflow-y-hidden w-full">
      <div className="mb-5">
        <Header />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4">
          <div className="w-[30%] ml-1">
            <LeftDragable exercise={exercise} updateKmValue={updateKmValue} />
          </div>
          <div className="w-[68%] h-[100vh] overflow-y-scroll pb-40 custom-scrollbar">
            <RightDragable workout={workout} setWorkout={setWorkout} updateKmValue={updateKmValue} />
            <div className="mt-4">
              <Steps workout={workout} updateStepKm={updateKmValue} />
            </div>
          </div>
        </div>
      </DragDropContext>
    </main>
  );
}

export default App;
