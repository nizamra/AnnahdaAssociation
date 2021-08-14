import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../productFolder/ProductForm';
import EnhancedTable from './Products';
// import AllProds from '../views/ProductsList';
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
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', 
            product
            )
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
            <ProductForm onSubmitProp={createProduct} allErrors={errors} initialTitle="" initialCode="" initialStatus="" initialPrice="" initialDescription="" />
            <hr />
            {loaded && <EnhancedTable />}
        </div>
    )
}

export default Main;