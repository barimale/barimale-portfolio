import { useState } from "react";
import { badges } from "../../content/badges";
import resumeUrl from "/assets/Resume/CV-Mateusz-Wolnica.pdf";

const Github = ({ isMaximized }) => {
  return (
    <div
      className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px]  h-full overflow-y-auto ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      <div
        className={`flex flex-col sm:gap-10 items-center sm:items-start justify-start`}
      >
<p>The barimale GitHub profile showcases a collection of focused, practical .NET libraries built with clarity and developer experience in mind. The projects emphasize clean architecture, minimal dependencies, and straightforward APIs that make integration easy for real‑world applications. Across repositories, the theme is consistent: small, reliable tools that improve productivity, simplify configuration, and support everyday development workflows.</p>
        <p><a style={{color: 'blue'}} href="https://www.github.com/barimale" target="_blank">https://www.github.com/barimale</a></p>
      </div>
    </div>
  );
};

export default Github;
