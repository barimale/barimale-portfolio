import { useEffect, useState } from "react";
import Desktop from "./components/Desktop";
import AppState from "./context/AppState";
import {useTimedImage} from "./hooks/useTimedImage";
import { getAverageColorFromImageUrl } from "./util/imageUtilities";

function App() {
  const { image, visible, showImage } = useTimedImage(3);
  const [bg, setBg] = useState("");

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
    {visible && (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: window.innerHeight + "px",
        backgroundColor: bg }}>
        <img src={image}/>
      </div>
    )}
    {!visible &&(
      <AppState>
        <Desktop />
      </AppState>)}
    </>
  );
}

export default App;
