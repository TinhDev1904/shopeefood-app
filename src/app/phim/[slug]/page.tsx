import { getMovieDetail } from "@/services/movie.service";
import Image from "next/image";
import { Play, Plus, Star, Calendar } from "lucide-react";
import ServerData from "@/interfaces/ServerData";

interface MovieDetail {
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  poster_url: string;
  thumb_url: string;
  year: number;
  quality: string;
  time: string;
  episodes: {
    server_name: string;
    server_data: ServerData[];
  }[];
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = (await getMovieDetail((await params).slug));
  const movie: MovieDetail = data.movie
  console.log(movie);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. Hero Section: Backdrop mờ phía sau */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={movie.poster_url}
          alt={movie.name}
          fill
          className="object-cover opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* 2. Thông tin phim đè lên Backdrop */}
        <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row gap-8 items-end">
          <div className="relative w-48 md:w-64 aspect-[2/3] shrink-0 shadow-2xl rounded-lg overflow-hidden border border-white/10">
            <Image
              src={movie.poster_url}
              alt={movie.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">{movie.name}</h1>
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="text-green-500 font-bold">{movie.quality}</span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {movie.year}
              </span>
              <span className="border border-white/40 px-2 rounded text-xs">
                18+
              </span>
              <span>{movie.time}</span>
            </div>
            <p className="max-w-2xl text-zinc-300 line-clamp-3 md:line-clamp-none">
              {/* Xóa thẻ HTML nếu có */}
            </p>

            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-zinc-200 transition">
                <Play fill="black" size={20} /> Xem ngay
              </button>
              <button className="flex items-center gap-2 bg-zinc-600/80 text-white px-8 py-3 rounded font-bold hover:bg-zinc-700 transition backdrop-blur-md">
                <Plus size={20} /> Danh sách của tôi
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Phần Danh sách tập phim (Nếu là phim bộ) */}
      <div className="p-10">
        <h3 className="text-2xl font-bold mb-6">Chọn tập phim</h3>
        <div className="flex flex-wrap gap-3">
          {data.episodes?.[0]?.server_data?.map(
            (ep: ServerData, index: number) => (
              <button
                key={index}
                className="px-6 py-2 bg-zinc-800 border border-zinc-700 rounded hover:bg-primary hover:border-primary transition"
              >
                Tập {ep.name}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
