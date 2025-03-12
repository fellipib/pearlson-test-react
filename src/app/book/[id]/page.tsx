import BookComponent from "@/app/components/bookComponent";
import HeaderComponent from "@/app/components/headerComponent";
import { Book } from "@/app/types/types";


export default async function BookPage({
    params,
  }: {
    params: Promise<{ id: number }>
  }) {

    
    const { id } = await params
    const data = await fetch(`https://localhost:7241/Book/${id}`)
    const book: Book = await data.json()
    
    return (
        <div>
           <HeaderComponent />
           <BookComponent book={book}/>
        </div>
    )
}