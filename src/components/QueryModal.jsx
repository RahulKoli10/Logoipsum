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
      <div className="relative bg-[#F6F8FF] rounded-xl w-full max-w-lg p-4 sm:p-6 lg:p-8 z-10">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-4 "
        >
          <img src={queryX} alt="" className="h-5" />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Let’s Connect
        </h2>

        <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8">
          Share your idea, question, or request — I'll respond soon.
        </p>

        <form className="space-y-4 sm:space-y-6">
          <input
            placeholder="Full Name"
            type="text"
            className="w-full bg-white px-3 py-3 sm:px-4 sm:py-4 rounded-md outline-none"
          />
          <input
            placeholder="Email"
            type="Email"
            className="w-full bg-white px-3 py-3 sm:px-4 sm:py-4 rounded-md outline-none"
          />
          <input
            placeholder="Phone Number"
            type="text"
            className="w-full bg-white px-3 py-3 sm:px-4 sm:py-4 rounded-md outline-none"
          />
          <textarea
            placeholder="Description"
            rows="4"
            className="w-full bg-white px-3 py-3 sm:px-4 sm:py-4 rounded-md outline-none resize-none"
          />
          <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default QueryModal;
