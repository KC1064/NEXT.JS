import Link from "next/link";
export default function Users() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-3">
      <Link href={"/users/1"}>User 1</Link>
      <Link href={"/users/2"}>User 2</Link>
      <Link href={"/users/3"}>User 3</Link>
      <Link href={"/users/4"}>User 4</Link>
      <Link href={"/users/5"}>User 5</Link>
    </div>
  );
}
