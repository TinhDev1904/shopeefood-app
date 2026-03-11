import { apiFetch } from "@/libs/api";

async function getMovies(){
    const res = await apiFetch("/danh-sach/phim-moi-cap-nhat-v2?page=1");
    if (!res.ok) {
        throw new Error("Failed to fetch movies");
    }
    return res.json();
}

const getMovieDetail = async (slug: string) => {
  const res = await apiFetch(`/phim/${slug}`); // Ví dụ API OPhim
  
  if (!res.ok) throw new Error("Không tìm thấy phim");
  return res.json();
};

export { getMovies, getMovieDetail };