import { useState, useEffect, useMemo } from "react";

function heavyComputation(num: number): number {
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}

const useMemoExample = () => {
  const [num, setNum] = useState<number>(1);
  const [isDark, setDark] = useState<boolean>(false);

  const doubleNumber = useMemo(() => heavyComputation(num), [num]);

  const themeStyle = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000",
  };

  useEffect(() => {
    console.log("Theme was changed");
  }, [isDark]);

  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />

      <button
        onClick={() => setDark((prev) => !prev)}
        style={{ fontSize: "24px", ...themeStyle }}
      >
        Change Theme
      </button>
      <h1>{doubleNumber}</h1>
    </>
  );
};

export default useMemoExample;
