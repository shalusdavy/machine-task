import { React, useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [tast, setask] = useState("");

  useEffect(() => {
    axios.get("http:localhost:3003/tast").then((response) => {
      setask(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setask({ ...tast, [name]: value });
  };
  return (
    <div className="container">
      <h2 class="task-heading">Task Type 1: Text Editor</h2>

      <div className="input-container">
        <textarea
          id="textTask"
          class="task-input"
          placeholder="Enter text here"
          value={tast.title}
          onChange={handleChange}
        ></textarea>
      </div>

      <h2 class="task-heading">Task Type 2: Add and Remove Inputs</h2>
      <div id="dynamicInputs">
        <div class="input-container">
          <input type="text" class="task-input" placeholder="Input 1" />
          <button class="add-remove-input" onclick="addInput(this)">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
