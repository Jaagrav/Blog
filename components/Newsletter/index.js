import { FiRss } from "react-icons/fi";

export default function Newsletter() {
  return (
    <div className="bg-black/50 p-6 rounded-[3rem] mt-6">
      <div className="text-white text-4xl">
        Get notified everytime I post!!!
      </div>
      <div className="text-2xl opacity-50 text-white mt-2">
        Subscribe to my newsletter and never miss my upcoming articles
      </div>
      <div className="grid grid-cols-[1fr_auto] mt-4 gap-4">
        <input
          type="email"
          className="outline-none p-4 rounded-[15px] text-xl border-2 border-transparent focus:border-pink-400 bg-stone-700/50 text-white"
          placeholder="Enter email address"
        />
        <button className="px-12 bg-pink-400 rounded-[15px] text-2xl">
          <FiRss />
        </button>
      </div>
    </div>
  );
}
