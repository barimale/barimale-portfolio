import { useEffect, useState, useContext } from "react";
import Desktop from "./components/Desktop";
import AppState from "./context/AppState";
import {useTimedImage} from "./hooks/useTimedImage";
import { getAverageColorFromImageUrl } from "./util/imageUtilities";
import AppContext from "./context/AppContext";
import App from "./App.jsx";
import { usePreloadImages } from "./hooks/usePreloadImages.js";

const images = [
  "/assets/Startup.png"
];

function ResourcedApp() {
  const [ isLoading, setIsLoading ] = useState(true);
  const { start, ready, progress } = usePreloadImages(images);

  useEffect(() => {
    start(); // ręczne rozpoczęcie preloadingu
  }, []);
  
    useEffect(() => {
    if (ready) {
      setIsLoading(false);
    }
  }, [ready]);

  return (
    isLoading ? (
      <div style={{
        display:'flex',
        justifyContent:  'center',
        verticalAlign: 'center',
        height: '100vh',
        width: '100%',
        flexDirection : 'column',
        alignItems:'center'}}>
        <div style={{
          padding: '20px',
        }}>Loading... {Math.round(progress * 100)}%</div>
      </div>
    ):(
      <App/>
    )
  );
}

export default ResourcedApp;
