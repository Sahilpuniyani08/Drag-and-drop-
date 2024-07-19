import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LeftDragable from "./components/LeftDragable";
import RightDragable from "./components/RightDragable";
import Steps from "./components/Steps";
import { DragDropContext } from "react-beautiful-dnd";

const exercise = [
  { id:"item-1", name: "warm up", sections: [{ height: "50%", km: 3 }] },
  { id:"item-2",name: "Active", sections: [{ height: "80%", km: 3 }] },
  { id:"item-3",name: "Cool Down", sections: [{ height: "40%", km: 3 }] },

  {
    id:"item-4",
    name: "Two Step Repeats",
    sections: [
      { height: "50%", km: 2 },
      { height: "40%", km: 2 },
    ],
  },
  {
    id:"item-5",
    name: "Ramp Up",
    sections: [
      { height: "50%", km: 2 },
      { height: "60%", km: 1 },
      { height: "70%", km: 1 },
      { height: "80%", km: 1 },
    ],
  },
  {
    id:"item-6",
    name: "Ramp Down",
    sections: [
      { height: "80%", km: 1 },
      { height: "70%", km: 1 },
      { height: "60%", km: 1 },
      { height: "50%", km: 2 },
    ],
  },
];

const WorkOut = [{ id:"item-1", name: "warm up", sections: [{ height: "50%", km: 3 }] }];


function App() {
  const [stepsCount, setStepsCount] = useState([]);
  //  const [workout, set

  const handleStepsCount =(step) =>{
    // console.log(step);
    setStepsCount((prev) => [...prev, step])
    
    }
    // console.log(stepsCount)

  return (
    <main class="md:container md:mx-auto h-[92vh] overflow-y-hidden w-full">
      <div className="mb-5">
        <Header />
      </div>
      <DragDropContext onDragEnd={(event) =>{
        console.log("drag drop event occured", event)
      }}>
        <div className="flex gap-4">
          <div className="w-[30%]">
            <LeftDragable exercise={exercise}  stepsCount={stepsCount} handleStepsCount={handleStepsCount}/>
          </div>
          <div className="w-[70%] h-[100vh] overflow-y-scroll pb-40 custom-scrollbar">
            <RightDragable exercise={exercise}  stepsCount={stepsCount} handleStepsCount={handleStepsCount} />
            <div className="mt-4">
              <Steps  stepsCount={stepsCount} />
            </div>
          </div>
        </div>
      </DragDropContext>
    </main>
  );
}

export default App;
