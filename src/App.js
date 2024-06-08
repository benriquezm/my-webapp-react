/*function App () {
  return <h2>Hi, I am a Car!</h2>;
}*/

import { useEffect, useState } from "react";

import MessageComponent from "./components/MessageComponent/MessageComponent";

const App = () => {
  const [message, setMessage] = useState('Hi message by default'); // declaración estado por default
  const [dataDog, setDataDog] = useState({});

  console.log("state: ", dataDog);

  useEffect(() => {
    setMessage("Nuevo mensaje.");
    /** fecth react */
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
      .then(data => setDataDog(data.message))
  }, []);

  return (
    <>
      <h1>Test React Props</h1>
      <MessageComponent message={message} />
    </>
  );
};

export default App;
