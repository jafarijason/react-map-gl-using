import React, { useState } from 'react';
import ReacMApGL, { Marker } from 'react-map-gl'
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
  const clickHandler =(mahal)=>{
    alert(JSON.stringify(mahal))
  }
  console.log(myToken)
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
              onClick={()=>clickHandler(mahal)}
            />
          </Marker>
        ))
      }
    </ReacMApGL>
  );
}

export default Map;