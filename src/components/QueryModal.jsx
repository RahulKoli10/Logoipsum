const QueryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Modal box */}
      <div className="relative bg-[#F6F8FF] rounded-xl w-full max-w-lg p-8 z-10">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-2">
          Let’s Connect
        </h2>

        <p className="text-gray-600 mb-8">
          Share your idea, question, or request — I'll respond soon.
        </p>

        <form className="space-y-6">
          <input
            placeholder="First Name"
            className="w-full bg-white px-4 py-4 rounded-md outline-none"
          />
          <input
            placeholder="Last Name"
            className="w-full bg-white px-4 py-4 rounded-md outline-none"
          />
          <textarea
            placeholder="Description"
            rows="4"
            className="w-full bg-white px-4 py-4 rounded-md outline-none resize-none"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-md">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default QueryModal;
