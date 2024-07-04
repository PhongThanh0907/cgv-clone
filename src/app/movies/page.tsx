"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import React, { useState } from "react";

const MOVIE = {
  NOW: 1,
  COMING: 2,
};

const Movies = () => {
  const [typeMovie, setTypeMovie] = useState(MOVIE.NOW);
  return (
    <div>
      <Breadcrumbs
        currentPage={
          typeMovie === MOVIE.NOW ? "Phim Đang Chiếu" : "Phim Sắp Chiếu"
        }
      />

      <div className="default-screen">
        <div className="flex justify-between items-end pt-7 pb-3 border-b-2 border-black">
          <span className="text-3xl">
            {typeMovie === MOVIE.NOW ? "Phim Đang Chiếu" : "Phim Sắp Chiếu"}
          </span>

          <span
            onClick={() =>
              setTypeMovie(typeMovie === MOVIE.NOW ? MOVIE.COMING : MOVIE.NOW)
            }
            className="text-gray-500 uppercase cursor-pointer hover:text-gray-700 duration-300"
          >
            {typeMovie === MOVIE.NOW ? "phim sắp chiếu" : "phim đang chiếu"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movies;
