import React, { useState, useEffect } from 'react';
import ReacMApGL, { Marker, Popup } from 'react-map-gl'
import myToken from './token';
import * as mahalat from './Tehran_Mahalat.json'
import Pin from './pin'

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 35.69439,
    longitude: 51.422151,
    zoom: 10
  })
  const [selectedMahal, setSelectedMahal] = useState(null)
  const clickHandler = (mahal) => {
    setSelectedMahal(mahal)
  }
useEffect(()=>{
  const listener = event =>{
    if(event.key === "Escape"){
      setSelectedMahal(null)
    }
  }
  window.addEventListener("keydown",listener);
  return ()=>{
    window.removeEventListener("keydown",listener)
  }
},[])
  return (
    <ReacMApGL
      {...viewport}
      inViewportChange={(viewport) => setViewport({ viewport })}

      mapboxApiAccessToken={myToken}
      mapStyle="mapbox://styles/jafarib/ckc9bsrbz3h7f1jnze54wj23s"
    >
      {
        mahalat.RECORDS.map((mahal) => (
          <Marker
            key={mahal.id}
            longitude={mahal.geometry.cordinates[0]}
            latitude={mahal.geometry.cordinates[1]}
          >
            <Pin
              size={40}
              onClick={() => clickHandler(mahal)}
            />
          </Marker>
        ))
      }
      {
        selectedMahal ? <Popup
          longitude={selectedMahal.geometry.cordinates[0]}
          latitude={selectedMahal.geometry.cordinates[1]}
          onClose={()=>setSelectedMahal(null)}
         > 
         {selectedMahal.name  }
         </Popup>: null
      }
    </ReacMApGL>
  );
}

export default Map;