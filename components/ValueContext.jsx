/*

Value Context component is used to avoid prop drilling and provide global state management. 
The context is used to pass the information about the amount of each product and the relevant functions to set their values.
It is used to identify the connection between the product sliders and the basket.


*/



import React, { createContext, useState } from 'react';

const ValueContext = createContext();

const ValueProvider = ({ children }) => {
  const [standardPadCount, setStandardPadCount] = useState(0);
  const [superPadCount, setSuperPadCount] = useState(0);
  const [superPlusPadCount, setSuperPlusPadCount] = useState(0);
  const [dailyPadCount, setDailyPadCOunt] = useState(0);
  const [superDailyPadCount, setSuperDailyPadCount] = useState(0);
  const [miniTamponCount, setMiniTamponCount] = useState(0);
  const [standardTamponCount, setStandardTamponCount] = useState(0);
  const [superTamponCount, setSuperTamponCount] = useState(0);



  return (
    <ValueContext.Provider value={{ standardPadCount, superPadCount, superPlusPadCount, dailyPadCount, superDailyPadCount, miniTamponCount, standardTamponCount, superTamponCount, 
                                    setStandardPadCount, setSuperPadCount, setSuperPlusPadCount, setDailyPadCOunt, setSuperDailyPadCount, setMiniTamponCount, setStandardTamponCount, setSuperTamponCount }}>
      {children}
    </ValueContext.Provider>
  );
};

export { ValueContext, ValueProvider };
