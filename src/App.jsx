import { useEffect, useState, useContext } from "react";
import Desktop from "./components/Desktop";
import AppState from "./context/AppState";
import {useTimedImage} from "./hooks/useTimedImage";
import { getAverageColorFromImageUrl } from "./util/imageUtilities";
import AppContext from "./context/AppContext";

function App() {
  const { image, visible, showImage } = useTimedImage(3);
  const [bg, setBg] = useState("");
  const { state } = useContext(AppContext);

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    showImage("/assets/Startup.png");
  }, []);

    useEffect(() => {
      getAverageColorFromImageUrl(image, (rgb) => {
        setBg(rgb);
      });
    }, [image]);

  return (
    <>
    {state.Common.hasToBeShutDown && (
      <div style={{backgroundColor: 'black', height: window.innerHeight + "px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <button style ={{color: 'white'}}onClick={()=>{window.location.reload()}}>Click to reload the system.</button>
      </div>
    )}
    {!state.Common.hasToBeShutDown && visible && (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: window.innerHeight + "px",
        backgroundColor: bg }}>
        <img src={image}/>
      </div>
    )}
    {!state.Common.hasToBeShutDown && !visible &&(
        <Desktop />)}
    </>
  );
}

export default App;
