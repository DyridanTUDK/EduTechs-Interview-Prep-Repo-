import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css"

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>This a reuseable modal component</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={()=>setOpen(false)}>
          <h2>This is a reuseable Modal</h2>
          <button onClick={()=>setOpen(false)}>Confirm</button>
      </Modal>
    </div>
  );
}