'use client'
import { useState } from 'react'

const NewBookComponent = () =>{

    const [bookData, setBookData] = useState({
        nome: '',
        sku: '',
        descricao: '',
        preco: ''
      });

      const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
          ...bookData,
          [name]: value,
        });
    }
        const handleSubmit = async (e) => {
          debugger
            e.preventDefault();
            try {
              const res = await fetch('https://localhost:7241/Book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData),
              });
              const resJson = await res.json();                
              console.log(resJson)
              if (res.ok) {                
                setResponseMessage('Livro salvo com sucesso');
                setBookData({
                  nome: '',
                  sku: '',
                  descricao: '',
                  preco: ''
                })
              } else {
                setResponseMessage('Falha ao salvar livro');
              }
            } catch (error) {
              console.error(error);
              setResponseMessage('An error occurred');
            }
          };

    return (
        <div>   
            <div className="ml-50 mr-50 mt-25">
            <h1 className="bg-blue-200 text-2xl font-bold pl-5">Books</h1>
            <form onSubmit={handleSubmit}>
              <table className ="table-auto w-full border-collapse border border-gray-200" >
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">SKU</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Descricao</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Preço</th>
                  </tr>
                </thead>
                <tbody>          
                    <tr className='w-full'>
                      <td className="border border-gray-300 px-4 py-2 text-left">
                        <input 
                        className='w-full h-full'
                        type="text"
                        id="nome"
                        name="nome"
                        onChange={handleChange}
                        value={bookData.nome}
                        />
                        </td>
                      <td className="border border-gray-300 px-4 py-2 text-left">
                      <input 
                        className='w-full h-full'
                        type="text"
                        id="sku"
                        name="sku"
                        value={bookData.sku}
                        onChange={handleChange}
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-left">
                      <input 
                        className='w-full h-full'
                        type="text"
                        id="descricao"
                        name="descricao"
                        value={bookData.descricao}
                        onChange={handleChange}
                        />
                      </td>
                      <td className="border border-gray-300 text-left">
                      <input 
                        className='w-full h-full'
                        type="text"
                        id="preco"
                        name="preco"
                        value={bookData.preco}
                        onChange={handleChange}
                        />
                      </td>                      
                    </tr>          
                </tbody>
              </table>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">Save</button>
              </form>
              {responseMessage && <p className="mt-4">{responseMessage}</p>}
              </div>
              </div>

    )
}

export default NewBookComponent