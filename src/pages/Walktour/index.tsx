import React, { useState } from 'react';
import { Walktour } from 'walktour';
import './index.scss'; 
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const [isTourOpen, setIsTourOpen] = useState(false); 
  const navigate = useNavigate();

  const handleStartTour = () => {
    setIsTourOpen(true); 
  };

  const handleClose = () => {
    setIsTourOpen(false); 
  };

  const steps = [
    {
      selector: '#step-one',
      title: 'Step 1',
      description: 'This is the first step of the tour.',
    },
    {
      selector: '#step-two',
      title: 'Step 2',
      description: 'This is the second step of the tour.',
    },
    {
      selector: '#step-three',
      title: 'Step 3',
      description: 'This is the third step of the tour.',
    },
  ];

  return (
    <div className="tour-container">
      <button className="tour-button" onClick={handleStartTour}>
        Start Walktour
      </button>

      <div id="tour-container">
        <div id="step-one" className="step-element">Step One</div>
        <div id="step-two" className="step-element">Step Two</div>
        <div id="step-three" className="step-element">Step Three</div>
      </div>

      <Walktour
        steps={steps}
        isOpen={isTourOpen}
        customCloseFunc={handleClose} 
        initialStepIndex={0}
        zIndex={1000}
      />
     <a onClick={()=>navigate(-1)} > ← Go Back</a>
    </div>
  );
};

export default App;