

export default function Footer() {
  return (
    <footer className="text-gray-300 py-8 mt-10 border-t border-gray-500 border-opacity-30 bg-[#0B2A3C]">
      
      <div className="text-center italic text-sm mb-2">
        Building experiences, one line of code at a time.
      </div>

      
      <div className="text-center text-xs">
        © {new Date().getFullYear()} akto. All rights reserved.
      </div>
    </footer>
  );
}

