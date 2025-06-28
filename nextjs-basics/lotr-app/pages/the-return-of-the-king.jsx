
import  { useRouter }  from "next/router"
import   Image  from "next/image"
import { volumes } from "../f25e013e-5e94-48da-9c90-a0e315ad4db1/lib/data.js"

const TheReturnOfTheKing = () => {
    const router = useRouter()

    const data = volumes?.find(({slug}) => slug === "the-return-of-the-king")

    return (
        <>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <ul>
            {data.books.map(book => {
                return <li key={book.ordinal}>
                {book.title}, {book.ordinal}
              </li>
            })}
        </ul>

        <Image  
                src={data.cover}
                width={140}
                height={230}
                alt="The return of the King"/>
       
        <button type="button" onClick={() => router.back()}>Previous Page</button>
        </>
        )
}

export default TheReturnOfTheKing