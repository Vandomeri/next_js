import Counter from "@/components/UI/Counter"
import Link from "next/link"

export default async function Products() {

    const resp = await fetch('https://dummyjson.com/products')
    const products = await resp.json()

    return (
        <div className="grid grid-cols-4">
            {products.products.map((el) => (
                <Link href={`/products/${el.id}`} key={el.id}>
                    <img className="w-full" src={el.images[0]} alt="" />
                    <p>{el.title}</p>
                    <p>{el.description}</p>
                    <Counter />
                </Link>
            ))}
        </div>
    )
}
