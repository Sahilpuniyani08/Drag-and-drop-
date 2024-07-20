import React from "react";
import styled from "styled-components";


const Skeleton = () => {
  const  totalDistance=10;
  const calculateXAxisLabels = () => {
     const labels = [];
     for (let i = 0; i <= totalDistance; i++) {
       labels.push(i);
     }
     return labels;
   };
 
   const xAxisLabels = calculateXAxisLabels();
 console.log(xAxisLabels);

  return (
    <div className="w-full h-full flex gap-2 flex-col items-end text-slate-700 text-sm relative">
    <div className="w-full h-full flex gap-2 items-end text-slate-700 text-sm ">
    <div className="flex absolute top-[40%] left-[-10] ">
      <img src={'/image.png'} className="w-20 " alt={"skeletonImage"} />
      <div className="text-[10px] mt-[-10px]">click the blocks and drag them here to begin building your blocks.</div>
    </div>
      <div className="w-[20%] "> 
        <h5>Warm Up </h5>
        <div className=" h-5  w-full bg-[#eae8fd]"></div>
      </div>
      <div className="w-[60%] ">
        <h5>Main Set</h5>
        <div className="h-10 w-full bg-[#eae8fd] "></div>
      </div>
      <div className="w-[20%] ">
        <h5>Cool Down</h5>
        <div className="h-5 w-full bg-[#eae8fd] "></div>
      </div>
    </div>
    
    </div>
  );
};

export default Skeleton;
