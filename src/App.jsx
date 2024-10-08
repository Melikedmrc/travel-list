import './App.css'
import Logo from "./component/Logo";
import Form from "./component/Form";
import PackingList from "./component/PackingList";
import Stats from "./component/Stats";
import { useState } from "react"

function App() {
  const [items, setItems] = useState([]);
  const numItems=items.length;

  // handleAddItems fonksiyonu, yeni bir öğeyi mevcut items listesine ekler.
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem(){
    const confirmed=window.confirm(
      "Are you sure want to delete all items?"
    )
    if (confirmed) setItems([])
  }
  

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearItem} />
      <Stats items={items} />
    </div>

  )
}

export default App
