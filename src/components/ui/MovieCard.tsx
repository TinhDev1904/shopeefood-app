"use client";

import Image from "next/image";
import Link from "next/link";
import Movie from "@/interfaces/Movie";
import { Play } from "lucide-react"; // Cài lucide-react nếu chưa có

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  // Đường dẫn ảnh từ API (giả sử dùng domain của phimimg.com)

  return (
    <Link href={`/phim/${movie.slug}`} className="group relative block">
      {/* Container Ảnh */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-zinc-900 shadow-md transition-all duration-300 group-hover:shadow-primary/20">
        <Image
          src={movie.poster_url}
          alt={movie.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay khi Hover: Hiện nút Play và mờ nền */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
            <Play fill="currentColor" size={24} />
          </div>
        </div>

        {/* Badge Năm sản xuất */}
        <div className="absolute top-2 right-2 rounded bg-black/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md">
          {movie.year}
        </div>
      </div>

      {/* Thông tin phim bên dưới */}
      <div className="mt-3">
        <h3 className="truncate text-sm font-semibold text-zinc-100 transition-colors group-hover:text-primary">
          {movie.name}
        </h3>
        <p className="text-xs text-zinc-500">{movie.originName}</p>
      </div>
    </Link>
  );
};

export default MovieCard;