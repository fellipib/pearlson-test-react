'use client'

import React, { useEffect, useState } from 'react';
import { Book } from '../types/types';
import { useRouter } from 'next/navigation';



const BooksListComponent = () => {

  const router = useRouter();
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
      const fetchBooks = async () =>{
        const res = await fetch('https://localhost:7241/book')
        const data = await res.json()
        setBooks(data)
      }
  
      fetchBooks();
    }, []);

    const handleNew = () =>{
      router.push('/book/newBook')
    }

    const handleRedirect = (id: number) =>{
      debugger
      router.push(`/book/${id}`)             
    }

    async function handleDelete (id: number) {
      debugger
            try {
              const res = await fetch(`https://localhost:7241/Book/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
              });              
              //faria um toast aqui avisando sobre o retorno mas vou deixar só um console.log()              
              console.log(res)
              //criaria um useeffect pra atualizar o state books depois de apagar, assim só re-renderiza o componente e nao a pagina toda.
              location.reload();
            } catch (error) {
              console.error(error);              
            }            
    }

  return (
    <div className="ml-50 mr-50 mt-25">
    <h1 className="bg-blue-200 text-2xl font-bold">Books</h1>
    <p className="bg-blue-200 text-1xl font-bold">Click on a book name to see its details or change it</p>
      <table className ="table-auto w-full border-collapse border border-gray-200" >
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Id</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
            <th className="border border-gray-300 px-4 py-2 text-left">SKU</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Descricao</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Preço</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4" onClick={handleNew}>Add new</button>
            </th>
          </tr>
        </thead>
        <tbody>          
          {books.map((row: Book) => (
            <tr key={row.id} className='w-full'>
              <td className="border border-gray-300 px-4 py-2 text-left">{row.id}</td>
              <td className="border  border-gray-300 px-4 py-2 text-left">
                <button 
                className='w-full bg-yellow-200 hover:bg-yellow-500 font-bold py-2 px-4'
                onClick={() => handleRedirect(row.id)}
                >
                {row.nome}
                </button>
                </td>
              <td className="border border-gray-300 px-4 py-2 text-left">{row.sku}</td>
              <td className="border border-gray-300 px-4 py-2 text-left">{row.descricao}</td>
              <td className="border border-gray-300 px-4 py-2 text-left">{row.preco}</td>
              <td className="border border-gray-300 px-4 py-2 text-left">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4" onClick={() => handleDelete(row.id)}>Delete me!</button>
                </td>

            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default BooksListComponent