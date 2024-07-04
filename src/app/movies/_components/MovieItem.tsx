import { Movie } from "@/app/types/movieType";
import React from "react";

interface MovieItemProps {
  data: Movie[];
}

const MovieItem: React.FC<MovieItemProps> = ({ data }) => {
  return <div></div>;
};

export default MovieItem;
