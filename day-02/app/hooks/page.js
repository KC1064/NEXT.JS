"use client"

import { useState } from "react"

export default function State(){
    const [count,setCount] = useState(0);
    return (
        <main className="min-h-screen flex justify-center items-center flex-col">
            <h1>{count}</h1>
            <button className="h-max w-max px-4 py-1 bg-white text-blue-500" onClick={()=>setCount(count+1)}>Click To Increment</button>
        </main>
    )
}