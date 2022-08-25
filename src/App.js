import { useState, useMemo, useRef } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleAdd = () => {
        setProducts([
            ...products,
            {
                name,
                price: Number(price),
            },
        ]);

        setName("");
        setPrice("");

        nameRef.current.focus();
    };

    const total = useMemo(() => {
        return products.reduce((result, prod) => result + prod.price, 0);
    }, [products]);

    return (
        <div className="App">
            <div>
                <input
                    ref={nameRef}
                    value={name}
                    type="text"
                    placeholder="Enter name..."
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    value={price}
                    type="text"
                    placeholder="Enter price..."
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button onClick={handleAdd}>Add</button>
            <p>Total: {total}</p>

            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
