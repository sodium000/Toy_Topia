import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const sendmessage = () => {
  Swal.fire({
    title: "Thank you for feedback",
    icon: "success",
    draggable: true
  });
}

export default function ContactUsToy() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFE3F2] via-[#FFF7D6] to-[#E0F7FF] flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">


      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">

        <div className="absolute -top-6 -left-6 w-28 h-28 bg-pink-300 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-10 right-10 text-yellow-400 text-5xl">⭐</div>
        <div className="absolute bottom-10 left-10 text-pink-400 text-4xl">🧸</div>


        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FF6B9D] drop-shadow-md">
          Contact Our Toy Show 🎈
        </h1>
        <p className="text-center text-gray-600 mt-2 text-sm sm:text-base font-medium">
          We're excited to hear from you! Let's make playtime magical ✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10 md:mt-12">

          <div className="space-y-7">

            <div className="flex items-start gap-3 sm:gap-4">
              <FaMapMarkerAlt className="text-[#FF6B9D] text-2xl sm:text-3xl shrink-0" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#FF6B9D]">Visit Us</h2>
                <p className="text-gray-700 text-sm sm:text-base">105 Pragati Sarani, Middle Badda, Dhaka-1212</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <FaPhoneAlt className="text-[#FFA726] text-2xl sm:text-3xl shrink-0" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#FFA726]">Call Us</h2>
                <p className="text-gray-700 text-sm sm:text-base">+1 (800) 123-TOYS</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <FaEnvelope className="text-[#42C1E8] text-2xl sm:text-3xl shrink-0" />
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#42C1E8]">Email Us</h2>
                <p className="text-gray-700 text-sm sm:text-base">hello@toyshow.com</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="bg-white border-4 border-[#FFD5F2] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg space-y-4 sm:space-y-5 md:space-y-6">

            <div>
              <label className="block font-medium text-[#FF6B9D] mb-1">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-medium text-[#FFA726] mb-1">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-xl border-2 border-yellow-200 focus:border-yellow-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-medium text-[#42C1E8] mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 outline-none"
                placeholder="Write something fun! 🎨"
              ></textarea>
            </div>

            <button onClick={sendmessage} className="w-full bg-[#FF6B9D] text-white font-bold py-3 rounded-xl text-lg hover:bg-[#ff578e] transition shadow-md">
              Send Message 💌
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
