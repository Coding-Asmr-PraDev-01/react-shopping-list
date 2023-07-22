import { useState } from "react";
import Item from "./Components/Item";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addList = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (ind) => {
    const filteredList = list.filter((item, index) => index !== ind);
    setList(filteredList);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div className="wrapper">
        <div className="inputBx">
          <form onSubmit={addList}>
            <input type="text" value={input} onChange={handleInputChange} />
            <button className="add-btn">Add</button>
          </form>
        </div>
        <ul className="list-items">
          {list.map((item, ind) => {
            return (
              <Item
                key={ind}
                ind={ind}
                item={item}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
