import { useState, useRef, useEffect } from "react";

const UseRefExample = () => {
  const [name, setName] = useState<string>("");
  //   const [count, setCount] = useState<number>(0);

  const renderCount = useRef<number>(0);

  useEffect(() => {
    // setCount(prev => prev + 1)
    renderCount.current++;
  });

  return (
    <>
      <div>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          name=""
          id=""
        />
        <div>My name is: {name}</div>
        <div>Rerender Count: {renderCount.current}</div>
      </div>
    </>
  );
};

export default UseRefExample;
