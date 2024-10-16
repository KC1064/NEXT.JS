import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center flex-col">
    <h1>Hello I am The Login page</h1>
    <div className="w-max gap-4 flex mt-2">
      <Link href="/">
        <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">
          Home
        </button>
      </Link>
      <Link href="about">
        <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">
          Login
        </button>
      </Link>
      <Link href="login">
        <button className="h-max w-max px-2 py-1 bg-blue-500 rounded-lg">
          About
        </button>
      </Link>
    </div>
  </div>
  );
}
