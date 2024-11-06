export default function page({params}){
    console.log(params.user);
    return (
        <div className="h-screen w-full text-5xl flex justify-center items-center">
            {params.user}
        </div>
    )
}