import React, { useState } from "react";
import Tour, { ReactourStep } from "reactour";
import './index.scss';
import { useNavigate } from "react-router-dom";

const ReactTourDemo: React.FC = () => {
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const navigate=useNavigate();

  const steps: ReactourStep[] = [
    {
      selector: ".step-one",
      content: <p>This is the first step. Welcome to the tour!</p>,
    },
    {
      selector: ".step-two",
      content: <p>This is the second step. You can add information here.</p>,
    },
    {
      selector: ".step-three",
      content: <p>This is the final step. Click the button to finish.</p>,
    },
  ];

  const openTour = () => setIsTourOpen(true);
  const closeTour = () => setIsTourOpen(false);

  return (
    <div className="tour-container">
      <button onClick={openTour} className="tour-button">
        Start Reactour
      </button>

      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        accentColor="#007bff"
        maskSpace={10}
        disableDotsNavigation={false}
        showNavigation={true}
        showCloseButton={true}
        rounded={5}
        nextButton={<button className="navigation-button">Next</button>}
        prevButton={<button className="navigation-button">Back</button>}
      />

      <div className="step-one step-element">
        <h4>Step 1: Welcome</h4>
      </div>
      <div className="step-two step-element">
        <input type="text" placeholder="Enter your name..." className="input-field" />
      </div>
      <div className="step-three step-element">
        <button className="submit-button">Submit</button>
      </div>
      <a onClick={()=>navigate(-1)} > ← Go Back</a>
    </div>
  );
};

export default ReactTourDemo;