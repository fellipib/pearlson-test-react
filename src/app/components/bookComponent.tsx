import { Book } from '../types/types';

interface BookComponentProps {
    book: Book;
}

    export default function BookComponent({ book }: BookComponentProps) {    
    return (
        <div>   
            <div className="ml-50 mr-50 mt-25">
            <h1 className="bg-blue-200 text-2xl font-bold pl-5">Book</h1>
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
                        {book.nome}                        
                        </td>
                      <td className="border border-gray-300 px-4 py-2 text-left">                      
                        {book.sku}                        
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-left">                      
                        {book.descricao}                        
                      </td>
                      <td className="border border-gray-300 text-left">                     
                        {book.preco}
                        
                      </td>                      
                    </tr>          
                </tbody>
              </table>
              </div>
              </div>

    )
}