import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";

export default function Movie({ item }: any) {
  const [like, setLike] = React.useState<boolean>(false);
  const [saved, setSaved] = React.useState<boolean>(false);

  const saveShow = () => {
    setLike(!like);
    setSaved(true);

    // Get saved movies from localStorage
    const storedMovies = JSON.parse(localStorage.getItem("savedMovies") || "[]");

    // Check if already saved
    const exists = storedMovies.some((movie: any) => movie.id === item.id);

    if (!exists) {
      const updatedMovies = [
        ...storedMovies,
        {
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        },
      ];
      localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
    }
  };

  return (
    <motion.div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={animation}
      viewport={{ once: true }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </motion.div>
  );
}
