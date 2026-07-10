import { useState } from "react";
import { badges } from "../../content/badges";
import resumeUrl from "/assets/Resume/CV-Mateusz-Wolnica.pdf";

const Nuget = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px]  h-full overflow-y-auto ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      <div
        className={`flex flex-col sm:gap-10 items-center sm:items-start justify-start`}
      >
        <p>Over 95k downloads!!</p>
        <div className=" flex flex-col sm:items-start items-center  gap-1 mt-4 sm:mt-14">
          <p
            className={` ${
              isMaximized ? " text-[40px]" : "text-[30px]"
            }`}
          >
            <a href="https://www.nuget.org/profiles/barimale" target="_blank">https://www.nuget.org/profiles/barimale</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nuget;
