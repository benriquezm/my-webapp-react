/*function App () {
  return <h2>Hi, I am a Car!</h2>;
}*/

import { useEffect, useState } from "react";

import MessageComponent from "./components/MessageComponent/MessageComponent";
import Button from "./components/Buttons/Button";

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
      <div className="bd-content ps-lg-4">
        <div className="padre">
          <Button
            buttonTag="anchor"
            classButton="primary"
            hyperlink="#"
            isOutline={false}
            valueButton="Link"
          />
          <Button
            buttonTag="button"
            classButton="primary"
            isOutline={false}
            valueButton="Button"
            typeButton="submit"
          />
          <Button
            buttonTag="input"
            classButton="primary"
            isOutline={false}
            valueButton="Input"
            typeButton="button"
          />
          <Button
            buttonTag="input"
            classButton="primary"
            isOutline={false}
            valueButton="Submit"
            typeButton="submit"
          />
          <Button
            buttonTag="input"
            classButton="primary"
            isOutline={false}
            valueButton="Reset"
            typeButton="reset"
          />
        </div>
        <div className="padre">
          <Button
            buttonTag="button"
            classButton="primary"
            isOutline={true}
            valueButton="Primary"
            typeButton="button"
          />
          <Button
            buttonTag="button"
            classButton="secondary"
            isOutline={true}
            valueButton="Secondary"
            typeButton="button"
          />
          <Button
            buttonTag="button"
            classButton="success"
            isOutline={true}
            valueButton="Success"
            typeButton="button"
          />
        </div>
        <div className="padre">
          <Button
            buttonTag="button"
            classButton="primary"
            isOutline={false}
            valueButton="Primary"
            typeButton="button"
            sizeButton="btn-lg"
          />
          <Button
            buttonTag="button"
            classButton="secondary"
            isOutline={false}
            valueButton="Secondary"
            typeButton="button"
            sizeButton="btn-lg"
          />
          <Button
            buttonTag="button"
            classButton="primary"
            isOutline={false}
            valueButton="Primary"
            typeButton="button"
            sizeButton="btn-sm"
          />
          <Button
            buttonTag="button"
            classButton="secondary"
            isOutline={false}
            valueButton="Secondary"
            typeButton="button"
            sizeButton="btn-sm"
          />
        </div>
      </div>
    </>
  );
};

export default App;
