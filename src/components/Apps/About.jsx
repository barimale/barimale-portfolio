import { useState } from "react";
import { badges } from "../../content/badges";
import resumeUrl from "/assets/Resume/CV-Mateusz-Wolnica.pdf";

const About = ({ isMaximized }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className={`flex flex-col gap-[35px] px-5 sm:px-[70px] py-[30px]  h-full overflow-y-auto ${
        isMaximized ? "pb-[100px] sm:pb-[50px]" : ""
      }`}
    >
      <div
        className={`flex sm:flex-row flex-col sm:gap-10 items-center sm:items-start justify-start`}
      >
        <img
          src="/assets/profilePic.jpeg"
          alt="profilePhoto"
          className="border-s-[2px] border-s-[#fafafa] border-t-[2px] border-t-[#fafafa] border-black border-[1px] w-[220px]"
        />
        <div className=" flex flex-col sm:items-start items-center  gap-1 mt-4 sm:mt-14">
          <h2
            className={` font-extrabold ${
              isMaximized ? " text-[40px]" : "text-[30px]"
            }`}
          >
            Wolnica Mateusz
          </h2>
          <h2
            className={` font-extrabold ${
              isMaximized ? " text-[25px]" : "text-[16px]"
            }`}
          >
            Software Developer
          </h2>
          <h4
            className={` text-red-700 ${
              isMaximized ? " text-[20px]" : "text-[16px]"
            }`}
          >
            📍 Zabrze, Poland.
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
        {badges.map((url, i) => {
          return <img src={url} alt="badge" key={i} style={{maxHeight: '28px'}}/>;
        })}
      </div>
      <div>
        <h4 className=" font-bold pb-3">About Me</h4>
        <p className=" before:ps-7">
          I have got 14 years of experience as a Backend Developer, including 4 years of experience as a Fullstack
          Developer. I have worked with various technologies, including .NET, C#, EF Core, NHibernate, Typescript,
          and React. I am a quick learner and I am not afraid of new challenges. 
          <span
            className={`text-blue-500 ps-2 cursor-pointer ${
              seeMore ? "hidden" : ""
            }`}
            onClick={() => setSeeMore((prev) => !prev)}
          >
            see more...
          </span>
        </p>
        {seeMore && (
          <>
            <p className=" pt-6">
              I am looking for a job where I can
              develop my skills and learn new technologies. I am open to new opportunities and I am willing to relocate. I
              am a team player and I am always ready to help my teammates.
            </p>
            <p className=" pt-6">
               I am also a Freelancer, a Startup Owner and
               a Github Contributor, so I had a chance to develop all apps I have always wanted to.
              <span
                className={`text-blue-500 ps-1 cursor-pointer ${
                  !seeMore ? "hidden" : ""
                }`}
                onClick={() => setSeeMore((prev) => !prev)}
              >
                (hide)
              </span>
            </p>
          </>
        )}
        <div className=" flex justify-center">
          <a
            target="_blank"
            href={resumeUrl}
            download
            className=" flex mt-10 w-fit justify-center items-center gap-[5px] p-[5px] text-sm border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] hover:border-e-[#dfdfdf]  hover:border-s-[grey]  hover:border-t-[grey] hover:border-b-[#dfdfdf] hover:bg-[#b5b5b5] transition-all "
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
