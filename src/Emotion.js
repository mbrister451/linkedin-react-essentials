import { useState, useEffect } from 'react';

export function Emotion(props) {
  
  const[emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  })

  return (
    <>
      <h1>Currently I feel { emotion }</h1>
      <button onClick={ () => setEmotion("frustrated") }>
        Frustrate
      </button>
      <button onClick={ () => setEmotion("sleepy") }>
        Doze
      </button>
    </>
  );
}

