import React, { useState } from 'react';
import './App.css'
import Loodingscreen from './Component/Loodingscreen';
import Comps from './Component/comp';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingEnd = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading ? <Loodingscreen endLoading={handleLoadingEnd} /> : <Comps />}
    </div>
  );
};

export default App;
