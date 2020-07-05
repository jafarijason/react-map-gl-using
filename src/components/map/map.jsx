import React, { useState } from 'react';
import ReacMApGL from 'react-map-gl'
import myToken from './token';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 35.69439,
    longitude: 51.422151,
    zoom: 10
  })
  console.log(myToken)
  return (
    <ReacMApGL
      {...viewport}
      inViewportChange={(viewport) => setViewport({ viewport })}

      mapboxApiAccessToken={myToken}
      mapStyle="mapbox://styles/jafarib/ckc9bsrbz3h7f1jnze54wj23s"
    />
  );
}

export default Map;