import React, { useState,useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const ProductEdit = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const submitData = async (e) => {
        e.preventDefault();
        const data = {name,price}
        await fetch('http://localhost:5000/products',{
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        navigate('/')
    }

    const getById  = async () => {
        let url = `http://localhost:5000/products/${id}`
        const response = await fetch(url)
        const data = await response.json()
        setName(data.name)
        setPrice(data.price)
    }

    useEffect(() => {
        getById();
    },[])

  return (
    <div>
        <form onSubmit={submitData}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value) }></input>
                </div>
            </div>
            <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input type="text" value={price}  onChange={(e) => setPrice(e.target.value) }></input>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ProductEdit