const SearchSidebar = ({ isOpen, closeSidebar }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50">
        <div className="bg-white text-black shadow-lg p-6 w-64 h-full">
          <button onClick={closeSidebar} className="text-gray-600 hover:text-black">✖</button>
          <h2 className="text-lg font-bold mb-4">Search</h2>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    );
  };
  
  export default SearchSidebar;
  