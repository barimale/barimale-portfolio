import { useContext } from "react";
import AppScreenFrame from "./UI/AppScreenFrame";
import { Menu } from "../content/menu";
import AppContext from "../context/AppContext";
import About from "./Apps/About";
import Nuget from "./Apps/Nuget";
import Projects from "./Apps/Projects";
import Github from "./Apps/Github";

const AppScreen = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.About.open && (
        <AppScreenFrame
          appInfo={Menu[0]}
          className=""
          isActive={state.About.top}
          isMaximized={state.About.fullscreen}
          isMinimized={state.About.minimize}
        >
          <About isMaximized={state.About.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Projects.open && (
        <AppScreenFrame
          appInfo={Menu[1]}
          className=""
          isActive={state.Projects.top}
          isMaximized={state.Projects.fullscreen}
          isMinimized={state.Projects.minimize}
        >
          <Projects isMaximized={state.Projects.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Nuget.open && (
        <AppScreenFrame
          appInfo={Menu[2]}
          className=""
          isActive={state.Nuget.top}
          isMaximized={state.Nuget.fullscreen}
          isMinimized={state.Nuget.minimize}
        >
          <Nuget isMaximized={state.Nuget.fullscreen} />
        </AppScreenFrame>
      )}
            {state.Github.open && (
        <AppScreenFrame
          appInfo={Menu[3]}
          className=""
          isActive={state.Github.top}
          isMaximized={state.Github.fullscreen}
          isMinimized={state.Github.minimize}
        >
          <Github isMaximized={state.Github.fullscreen} />
        </AppScreenFrame>
      )}
    </>
  );
};

export default AppScreen;
