import React, { useState } from "react";
import '../App.css'

const UpdatedComp = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return <OriginalComponent count={count} incrementCount={incrementCount} />;
  };

  return NewComponent;
};

export default UpdatedComp;
