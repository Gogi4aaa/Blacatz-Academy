import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import axios from 'axios';
import Theme from './components/Theme';
export default function App() {
  const API_URL = "https://blacatzacademy.com/api/posts";
  const DEFAULT_ARTICLE = {id: -1, title: '', content: '',author: ''}
  const fakeData = [
    {id: 1, title: "Статия1", content: "Контент", author: "Автор"},
    {id: 1, title: "Статия1", content: "Контент", author: "Автор"}
  ]
  const [view, setView] = useState('list');
  const[data, setData] = useState([]);
  const [article, setArticle] = useState(DEFAULT_ARTICLE);
  useEffect(()=>{
    loadArticles();
  }, [])

  function loadArticles(){
    axios.get(API_URL)
      .then(response => {
        setData(response.data)
      })
  }
  function create(){
    setArticle(DEFAULT_ARTICLE)
    setView('form')
  }
  function submitForm(){
    const url = article.id == -1 ? `${API_URL}` : `${API_URL}/${article.id}`;
    axios.post(url, article)
      .then(response =>{
        loadArticles();
        setView('list');
    })
  }
  function edit(a){
    setArticle(a);
    setView('form');
  }
  function showForm(){
    return(
      <div>
          <h1 className='text-center mb-3'>Form</h1>
          <input
          className='form-control mb-3' 
          type='text' 
          placeholder='Заглавие на статия' 
          name='title'
          value={article.title}
          onInput={e=>handleInput(e)}
          />
          <textarea 
          className='form-control mb-3' 
          type='text' 
          placeholder='Съдържание' 
          name='content'
          rows={10}
          cols={10}
          onInput={e=>handleInput(e)}
          value={article.content}
          />
          <input 
          className='form-control mb-3' 
          type='text' 
          placeholder='Автор' 
          name='author'
          onInput={e=>handleInput(e)}
          value={article.author}
          />
          <button onClick={()=>{
            submitForm()
            }} className='btn btn-success'>{article.id == -1 ? 'Create' : 'Update'}</button>
      </div>
  )
  }
  function handleInput(e){
    const {name, value} = e.target;
    setArticle({...article, [name]: value});
  }
  
  function deleteItem(id){
    axios.delete(`${API_URL}\\${id}`)
      .then(response =>{
        loadArticles();
      })
  }


  return (
    // <div className='container mt-5'>
    //   <button onClick={()=>{
    //     create()
    //   }} className='btn btn-primary mb-5'>Добави статия</button>
    //   {view == 'form' ? showForm() : <Table data={data} deleteItem={deleteItem} edit={edit}/>}
    // </div>
    <Theme />
  );
}


