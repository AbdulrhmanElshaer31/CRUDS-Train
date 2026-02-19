export default function Loader() {
    return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
    <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div> 
    <div className="absolute inset-2 rounded-full border-4 border-black border-b-transparent animate-spin [animation-direction:reverse]"></div>
  </div>
    )
}