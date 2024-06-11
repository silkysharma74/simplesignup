import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Listing = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setItems(response.data.products);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Product Listing</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listing;
