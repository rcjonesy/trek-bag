import Button from "./Button";
import { useRef, useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      // Ensure we still don't add to the list by exiting (guard function)
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  // When you click on a button in a form, it will by default try and submit the form which is an event
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button type="submit">Add to list</Button>
    </form>
  );
}
