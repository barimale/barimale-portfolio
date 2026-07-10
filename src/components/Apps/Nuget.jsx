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
        <p>The barimale NuGet profile features a collection of lightweight, practical .NET libraries designed to simplify everyday development tasks. The packages focus on configuration handling, API utilities, and developer productivity, offering clean APIs, minimal dependencies, and straightforward integration. Each library reflects an emphasis on clarity, maintainability, and solving real‑world problems with simple, effective code(over 95k downloads!!).</p>
        <p><a style={{color: 'blue'}} href="https://www.nuget.org/profiles/barimale" target="_blank">https://www.nuget.org/profiles/barimale</a></p>
      </div>
    </div>
  );
};

export default Nuget;
