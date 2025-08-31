import React from "react";
import axios from "axios";
import { IMovies } from "../../types/type";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";
import Movie from "../movie/Movie";

interface IProps {
  title: string;
  fetchURL: string;
  rowId: number;
}

export default function Row({ title, fetchURL, rowId }: IProps) {
  const [movies, setMovies] = React.useState<IMovies[]>([]);

  React.useEffect(() => {
    axios.get(fetchURL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowId);
    if (slider) slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowId);
    if (slider) slider.scrollLeft += 500;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={animation}
      viewport={{ once: true }}
      className="my-4"
    >
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative">
        {/* Left arrow */}
        <MdChevronLeft
          size={40}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"
          onClick={slideLeft}
        />

        {/* Movie slider */}
        <div
          id={"slider" + rowId}
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth space-x-2 px-4"
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 cursor-pointer"
            >
              <Movie item={item} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <MdChevronRight
          size={40}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"
          onClick={slideRight}
        />
      </div>
    </motion.div>
  );
}
