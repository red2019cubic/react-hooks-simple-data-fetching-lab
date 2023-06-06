// create your App component here

import React, { useEffect, useState } from "react";


function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [randomDogImage, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <>
    <p>{isLoaded}</p>
    <img src={randomDogImage.message} alt="A Random Dog"/>
    </>
    );
  }
}

export default App;
