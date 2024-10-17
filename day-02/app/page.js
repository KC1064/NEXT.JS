//--------------Example 1-------------------------
// import Client_Ex from "@/components/Client_Ex";
// import Server_Ex from "@/components/Server_Ex";
// export default function Home() {
//   console.log("Hello from Server")
//   return (
//       <main className="flex h-screen justify-center flex-col gap-8 items-center sm:items-start">
//         Hello
//         <Client_Ex />
//         <Server_Ex/> 
//       </main>
//   );
// }

// import { Main } from "next/document";

//---------------Example 2-----------------------
// import Client_Ex from "@/components/Client_Ex";
// export default function Home() {
//   console.log("Hello from Server")
//   return (
//       <main className="flex h-screen justify-center flex-col gap-8 items-center sm:items-start">
//         Hello
//         <Client_Ex />
//       </main>
//   );
// }

"use client"

export default function Home(){
  function handleClick (){
    alert("Button Clicked")
  }
  return (
    <main className="min-h-screen flex justify-center items-center">
      <button onClick={handleClick} className="h-max w-max px-2 py-1 bg-white text-black">Click</button>
    </main>
  )
}
