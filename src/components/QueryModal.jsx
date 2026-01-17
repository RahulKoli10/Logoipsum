import queryX from "../assets/queryX.png"
const QueryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Modal box */}
      <div className="relative bg-[#F6F8FF] rounded-xl w-full max-w-lg mx-4 p-4 sm:p-6 lg:p-8 z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-4"
          aria-label="Close modal"
        >
          <img src={queryX} alt="Close" className="h-5 w-5" />
        </button>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 pr-8">
          Let's Connect
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8">
          Share your idea, question, or request — I'll respond soon.
        </p>

        <form className="space-y-3 sm:space-y-4 md:space-y-6">
          <input
            placeholder="Full Name"
            type="text"
            className="w-full bg-white px-3 py-2.5 sm:py-3 sm:px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full bg-white px-3 py-2.5 sm:py-3 sm:px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            placeholder="Phone Number"
            type="tel"
            className="w-full bg-white px-3 py-2.5 sm:py-3 sm:px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <textarea
            placeholder="Description"
            rows="4"
            className="w-full bg-white px-3 py-2.5 sm:py-3 sm:px-4 rounded-md outline-none resize-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition text-sm sm:text-base font-medium">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default QueryModal;
