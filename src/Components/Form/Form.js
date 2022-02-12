import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import { UPDATE_SETTINGS } from "../../constant/constants";
import "./Form.css";
function Form() {
  const [{}, dispatch] = useStateValue();
  const [direction, setDirection] = useState("");
  const [duration, setDuration] = useState(0);

  const handleSubmit = () => {
    dispatch({ type: UPDATE_SETTINGS, payload: { direction, duration } });
    setDirection("");
    setDuration(0);
  };
  return (
    <div className="Form">
      <section>
        <label>Duration:</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </section>
      <section>
        <label>Direction:</label>
        <label>
          <input
            type="radio"
            value="Forward"
            name="direction"
            checked={direction === "Forward"}
            onChange={() => setDirection("Forward")}
          />
          Forward
        </label>
        <label>
          <input
            type="radio"
            value="Reverse"
            name="direction"
            checked={direction === "Reverse"}
            onChange={() => setDirection("Reverse")}
          />
          Reverse
        </label>
      </section>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Form;
