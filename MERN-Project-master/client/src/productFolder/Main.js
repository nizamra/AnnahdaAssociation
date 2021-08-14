import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AllProds from '../views/ProductsList';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // code from Lana
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/belt")
    //         .then(res => {
    //             setToDoTasks(res.data.filter((eachTask) => {
    //                 return eachTask.status === "toDo"
    //             }))

    //             setDoingTasks(res.data.filter((eachTask) => {
    //                 return eachTask.status === "doning"
    //             }))

    //             setDoneTasks(res.data.filter((eachTask) => {
    //                 return eachTask.status === "done"
    //             }))
    //         })
    //         .catch(err => console.log(err))
    // }, [someThingChanged])

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            {loaded && <AllProds products={products} setProducts={setProducts} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;