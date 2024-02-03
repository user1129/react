import { useState, useCallback, useMemo, useEffect, useRef } from "react";

const UseCallbackExample = () => {
  const [num, setnum] = useState(1);
  const [dark, isDark] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  //   const getItems = (): number[] => [num + 1, num + 2, num + 3];
  const getItems = useCallback(() => [num + 1, num + 2, num + 3], [num]);
  if (ref.current) {
    alert("HEO");
  }
  const themeStyle = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };
  return (
    <>
      <input
        ref={ref}
        type="number"
        value={num}
        onChange={(e) => setnum(parseInt(e.target.value))}
      />
      <button onClick={() => isDark((dark) => !dark)} style={{ ...themeStyle }}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </>
  );
};

interface FunctionType {
  getItems: () => number[];
}

const List: React.FC<FunctionType> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Page UPDATED!");
  }, [getItems]);

  return (
    <>
      {items.map((el, key) => {
        return <li key={key}>{el}</li>;
      })}
    </>
  );
};

export default UseCallbackExample;
