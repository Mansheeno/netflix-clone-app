import React from "react";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";
import { UserAuth } from "../../context/AuthContext";

export default function Account() {
  const { user, logOut }: any = UserAuth();

  const handleLogout = () => {
    logOut();
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={animation}
      viewport={{ once: true }}
    >
      <div className="w-full text-white">
        <div className="bg-black/60 fixed top-0 left-0 h-[550px] w-full"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/e344a6cb-13be-47fd-81e2-a9ee63826d08/UA-en-20230220-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
          className="w-full object-cover h-[400px]"
        />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
          <p className="mt-2 text-lg">Welcome, {user?.email || "Guest"}</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 mt-4 rounded font-bold"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* ✅ Placeholder since SavedShows depended on Firebase */}
      <div className="p-4 text-white">
        <h2 className="text-xl font-semibold mb-2">Saved Shows</h2>
        <p className="text-gray-400">No saved shows yet (Firebase removed).</p>
      </div>
    </motion.div>
  );
}
