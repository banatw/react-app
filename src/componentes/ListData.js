import React, { useState,useEffect } from 'react'


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


  

  return (
    <div>
        <div><h1>API</h1></div>
        <table>
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
                  <td><button>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
    </div>
  )
}

export default ListData