export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-6">
      <div className=" text-center sm:text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
       
        <p className="text-xs text-stone-400 text-center">© {new Date().getFullYear()} Inkwell. All rights reserved.</p>
      </div>
    </footer>
  );
}