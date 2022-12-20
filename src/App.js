import React, { useState, useEffect, Fragment } from 'react';


function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, [count]);

  return (
    <Fragment>
      return <h1>I've rendered {count} times!</h1>;

    </Fragment>
  );
}

export default App;
