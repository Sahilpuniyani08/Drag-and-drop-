import React from "react";

const Skeleton = () => {
  return (
    <div className="w-[80%] h-full flex gap-2 items-end text-slate-700">
      <div className="w-[20%] ">
        <div>Warm Up </div>
        <div className=" h-10  w-full bg-[#eae8fd]"></div>
      </div>
      <div className="w-[60%] ">
        <div>Main Set</div>
        <div className="h-20 w-full bg-[#eae8fd] "></div>
      </div>
      <div className="w-[20%] ">
        <div>Cool Down</div>
        <div className="h-10 w-full bg-[#eae8fd] "></div>
      </div>
    </div>
  );
};

export default Skeleton;
