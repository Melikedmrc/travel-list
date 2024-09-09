import { useState } from "react"

export default function Form({onAddItems}) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity]=useState(1);
    

    // handleSubmit fonksiyonu, form gönderildiğinde çağrılır.
    const handleSubmit = (e) => {
        e.preventDefault();      // Formun varsayılan yenilenmesini engeller.

        if (!description) return;

        const newItem={
            description, quantity, packed:false, id:Date.now()
        };
        // Yeni item nesnesi oluşturulduktan sonra konsola yazdırılır
        console.log(newItem);

        // Yeni item handleAddItems fonksiyonu ile listeye eklenir
        onAddItems(newItem)
        setDescription("")
        setQuantity(1)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>  {/* Form submit edildiğinde handleSubmit fonksiyonu tetiklenir */}
            <h3>What do you need for your trip?  </h3>
            <select  
                value={quantity}
                onChange={(e)=>setQuantity(Number(e.target.value))}
             >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                value={description}
                placeholder="Item..."
                onChange={(e) => setDescription(e.target.value)} // Input alanı her değiştiğinde description state'i güncellenir.
            />
            <button>
                Add
            </button>

        </form>

    )
}