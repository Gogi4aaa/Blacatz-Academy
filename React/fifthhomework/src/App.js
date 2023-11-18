import { useState } from 'react';
import './App.css';
import Product from './components/Product';

export default function App() {
  const DEF_PRODUCT = {id: '1', name: '', price: '', quantity: '', description: ''}
  const [products, setProducts] = useState([
    { id: '1', name: 'banana', price: '10', quantity: '2', description: '1' }
  ])
  const[product, setProduct] = useState(DEF_PRODUCT)
  const [isFormOrList, setIsFormOrList] = useState('list');
  const [haveName, setHaveName] = useState(false)
  const [isInEditMode,setIsInEditMode] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product)


  function showForm() {
    return (
      <div className='row mt-4'>
        <div className='col-12'>
          <input
            type='text'
            className='form-control mb-3'
            placeholder='Име на продукта'
            name='name'
            onInput={(e)=> handleInput(e)}
            value={updatedProduct.name}
          />
          {haveName && (<p className='text-danger'>Enter product name</p>)}
          <input
            type='text'
            className='form-control mb-3'
            placeholder='Цена на продукта'
            name='price'
            onInput={(e)=> handleInput(e)}
            value={updatedProduct.price}
          />
          <input
            type='text'
            className='form-control mb-3'
            placeholder='Количество на продукта'
            name='quantity'
            onInput={(e)=> handleInput(e)}
            value={updatedProduct.quantity}
          />
          <textarea
            type='text'
            className='form-control mb-3'
            placeholder='Описание'
            name='description'
            rows={7}
            onInput={e => handleInput(e)}
            value={updatedProduct.description}
          />
          <button onClick={()=>{
            
            if(updatedProduct.name == ''){
              setHaveName(true)
            }
            else{
              setIsFormOrList('list')
              
              if(isInEditMode){
                setIsInEditMode(false)
                let pr = updatedProduct;
                products.pop(updatedProduct)
                products.push(pr)
              }
              else{
                  let filteredProduct = products.find(product => product.id == products.length + 1)
                  console.log(filteredProduct);
                  if(filteredProduct != undefined){
                    products.push({...updatedProduct, id: products.length + 2}) 
                  }
                  else{
                    products.push({...updatedProduct, id: products.length + 1}) 
                  }
                
                setProducts([...products])
              }
              
              
              setHaveName(false)
              
            }
          }} className='btn btn-success'>{isInEditMode ? 'Update' : 'Create'}</button>
        </div>
      </div>
    )
  }

function handleInput(event){
  const {name,value} = event.target;
  setUpdatedProduct({...updatedProduct, [name]: value})
}

function deleteProduct(index){
  const newProducts = [...products]
  newProducts.splice(index, 1)
  setProducts(newProducts)
}

function editProduct(p){
  setIsFormOrList('form')
  setIsInEditMode(true)
  setUpdatedProduct(p)
}

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
          {!isInEditMode && <button onClick={()=>{
            setIsFormOrList('form');
            setUpdatedProduct(product)
          }} className='btn btn-primary'>Добави продукт</button>}
        </div>
      </div>
      {isFormOrList == 'list' ? <Product products={products} deleteProduct={deleteProduct} editProduct={editProduct}/> : showForm()}

    </div>
  );
}
