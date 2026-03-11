export const dynamic = 'force-dynamic'; // <- add this to force dynamic render


import HomeClient from "@/components/ui/HomeClient";
import { getMovies } from "@/services/movie.service";


// Server Component có thể dùng async/await thoải mái
export default async function HomePage() {
  try {
    // Gọi API lấy phim ngay tại Server
    const moviesData = await getMovies();

    // Truyền dữ liệu phim xuống Client Component qua props
    return <HomeClient initialMovies={moviesData} />;
  } catch (error) {
    console.error("Lỗi fetch phim:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Có lỗi xảy ra khi tải danh sách phim. Vui lòng thử lại sau.</p>
      </div>
    );
  }
}