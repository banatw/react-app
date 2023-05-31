import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const ProductAdd = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const navigate = useNavigate();
    

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

export default ProductAdd