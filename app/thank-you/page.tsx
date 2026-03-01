export default function ThankYou() {
  return (
    <div className="pt-32 px-6 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">Thank You!</h1>
      <p className="text-gray-400 text-lg mb-8">
        Your enquiry has been received. Our team will contact you shortly.
      </p>

      <a
        href="/"
        className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
