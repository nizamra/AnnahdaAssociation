import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Reg from '../personFolder/Register';
import Papa from '../personFolder/PersonForm';
import Mama from './ProductForm';
import AllProds from '../views/ProductsList';
// import Authinticator from '../context/AuthContext';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({ title: "", price: "", description: "" });
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
            });
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        console.log("product");
        console.log(product);
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                setProducts([...products, res.data]);
                setErrors({ title: "", price: "", description: "" });
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <Reg />
            <Papa />
            <Mama onSubmitProp={createProduct} allErrors={errors} initialTitle="" initialPrice="" initialDescription="" />
            <hr />
            {loaded && <AllProds products={products} setProducts={setProducts} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;