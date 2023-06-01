import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';


const ListData = () => {
  const [products,setProducts] = useState([]);


  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData()
  },[])

  const hapus = async(id) => {
    await fetch(`http://localhost:5000/products/${id}`,{
            method : "DELETE",
        })
    fetchData();
  }

  return (
    <div>
        <div><NavLink to={`/add`}><button className='button is-success'>Add</button></NavLink></div>
        <table className='table is-fullwitdh'>
          <thead>
            <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p=>(
              <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td><NavLink to={`/edit/${p.id}`}><button className='button is-link'>Edit</button></NavLink></td>
                  <td><button onClick={() => hapus(p.id)} className='button is-danger'>Hapus</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
    </div>
  )
}

export default ListData