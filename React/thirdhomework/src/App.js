import React, { useState, useEffect } from "react";
import ProductsTable from "./componenets/ProductsTable";
import SearchBar from "./componenets/SearchBar";
import Cart from "./componenets/Cart";
import PlayersTable from "./componenets/PlayersTable";

export default function App() {
// const [products, setProducts] = useState([
//   {name: "banan", category: "plodove", price: '5.00', stock: "true"},
//   {name: "qbulka", category: "plodove", price: '2.00', stock: "false"},
//   {name: "pc", category: "computers", price: '900.00', stock: "true"},
//   {name: "mouse", category: "periferiq", price: '69.00', stock: "true"},
//   {name: "keyboard", category: "periferiq", price: '250.00', stock: "false"},
// ])
// const[initialProducts, setInitialProducts] = useState([
//   {name: "banan", category: "plodove", price: '5.00', stock: "true"},
//   {name: "qbulka", category: "plodove", price: '2.00', stock: "false"},
//   {name: "pc", category: "computers", price: '900.00', stock: "true"},
//   {name: "mouse", category: "periferiq", price: '69.00', stock: "true"},
//   {name: "keyboard", category: "periferiq", price: '250.00', stock: "false"},
// ]);
// const[isChecked, setIsChecked] = useState(false);
// const[productsToAdd, setProductsToAdd] = useState([]);
// const[totalPrice,setTotalPrice] = useState(0);

const [players, setPlayers] = useState([
  {name: "George", score: 50},
  {name: "Petur", score: 100},
  {name: "Stoyan", score: 70},
  {name: "Jordan", score: 20},
])
let result = 0;
let workOnResult = players.map(player => result += player.score)

const[totalResult, setTotalResult] = useState(result);
// let finalResult = result.map(x=> dfdf += x)
// console.log(dfdf);
// console.log(finalResult);
  // function handleCheck(check){
  //     setIsChecked(check.target.checked);
  // }

  // function handleSearch(e){
  //   if(e.target.value.length != 0){
  //     let filteredProducts = initialProducts.filter(product => product.name.includes(e.target.value))
  //     if(isChecked){
  //       filteredProducts = filteredProducts.filter(product => product.stock == 'true')
  //     }
  //     setProducts([...filteredProducts])
  //   }
  //   else{
  //       setProducts([...initialProducts])
  //   }
  // }

  // function addInCart(productName){
    
  //   console.log(productName);
  //   let productForAdd = products.filter(product => product.name == productName);
  //   setTotalPrice(totalPrice + parseFloat(productForAdd[0].price))
  //   console.log(productForAdd);
  //   productsToAdd.push(productForAdd);
  //   console.log(productsToAdd);
  //   console.log(initialProducts);
  //   setProductsToAdd([...productsToAdd])
    
  // }

  function handleIncrease(score, name){
    let player = players.filter(x => x.name == name && x.score == score);
    player.map(x => x.score += 1)
    setPlayers([...players])
    setTotalResult(result += 1)
  }

  function handleDecrease(score, name){
    let player = players.filter(x => x.name == name && x.score == score);
    player.map(x => x.score -= 1)
    setPlayers([...players])
    setTotalResult(result -= 1)
  }
  
  return (
    <div style={{textAlign: 'center'}}>
        {/* <SearchBar handleSearch={(e)=> handleSearch(e)} handleCheck={(check) => handleCheck(check)}/>
        {products.map(x =><ProductsTable name={x.name} category={x.category} price={x.price} stock={x.stock} addInCart={(name)=>addInCart(name)}/> )}
        <h1>My Cart</h1> <span>Total Price: {totalPrice}</span>
        <div style={{marginTop: '40px'}}>
            {productsToAdd.map(x => x.map(y => <Cart name={y.name} category={y.category} price={y.price} stock={y.stock}/>))}
        </div> */}
        {players.map(x => <PlayersTable name={x.name} score={x.score} handleIncrease={()=>handleIncrease(x.score, x.name)} handleDecrease={()=>handleDecrease(x.score, x.name)}/>)}
        <h1>Total Result: {totalResult}</h1>
    </div>
  );
}
