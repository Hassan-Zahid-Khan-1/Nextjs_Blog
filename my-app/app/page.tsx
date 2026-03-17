import Link from "next/link";

export default function Home() {
  return (
   <>



 <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">A place for ideas</p>
    <h1 className="font-display text-5xl sm:text-6xl font-bold text-stone-900 leading-tight mb-6">Stories worth<br/><span className="italic text-stone-500">reading.</span></h1>
    <p className="text-stone-500 max-w-md mx-auto text-base leading-relaxed">Thoughtful essays on design, technology, and the world we&apos;re building together.</p>
  </section>



   <Link href="/blog"><h1 className=" italic text-stone-500 text-4xl font-bold mb-8 mx-4 text-center hover:text-stone-600">Read All Blogs</h1></Link>
   
</>
  );
}
