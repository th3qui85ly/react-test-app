import React from "react";
import "../assets/styles.css";
// import ReactDOM from "react-dom";

const Wishlist = () => {
    const [count,setCount] = React.useState(0);
    const [query, setQuery] = React.useState("");
    const [items, setItems] = React.useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    }

    const addItem = () => {
            const payload = {
                item: query,
                status: false,
            }
    
            let updatedList = [...items, payload];
            setItems(updatedList);
            setCount(count + 1);
    }

    if(count > 3){
        return (
        <>
        <h3>"You cannot add more than 3 items to wishlist"</h3>
        </>
        )
       }

    return (
        <>
            {/* <div>{query}</div> */}
            <input 
            placeholder="Add item to wishlist"
            onChange={handleChange}
            value={query}
            />
            <button onClick={addItem}>Add</button>
            {
                items.map(({ item, status }) => (
                    <div>{item}</div>
                ))
            }
        </>      
    );
};

export default Wishlist;