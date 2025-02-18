'use client'

import { use } from "react"

export default async function ProductId({ params }) {
    const par = use(params)
    console.log(par)
    const resp = await fetch(`https://dummyjson.com/products/${id}`)
    const product = await resp.json()

    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Страница товара с ID: {id}</h2>
            <div className="mx-auto w-1/2">
                <img src={product.images[0]} alt="" />
                <p>{product.title}</p>
                <p>{product.description}</p>
            </div>

        </div>
    )
}
