import React from "react";

export default function SectionReseau() {
  return (
    <div className="my-60">
      <h1 className="uppercase font-bold text-3xl text-center mt-24">
        où me contacter ?
      </h1>
      <div className="grid grid-cols-3 space-x-3">
        <div className="mt-10 flex items-center gap-10 shadow-lg">
          <img className="w-[30%]" src="img/linkedln.jpg" alt="" />
          <p>blabla@gmail</p>
        </div>
        <div className="mt-10 flex items-center gap-10 shadow-lg">
          <img className="w-[30%]" src="img/linkedln.jpg" alt="" />
          <p>blabla@gmail</p>
        </div>
        <div className="mt-10 flex items-center gap-10 shadow-lg">
          <img className="w-[30%]" src="img/linkedln.jpg" alt="" />
          <p>blabla@gmail</p>
        </div>
      </div>
    </div>
  );
}
