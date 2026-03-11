"use client";

import { useSyncUser } from "@/hooks/useSyncUser";
import Movie from "@/interfaces/Movie";
import Image from "next/image";
import Section from "../common/Section";

interface HomeClientProps {
  initialMovies: any; // Bạn nên thay 'any' bằng Interface Movie của bạn
}

export default function HomeClient({ initialMovies }: HomeClientProps) {
  // Logic đồng bộ User chạy ở Client
  const { user, status } = useSyncUser();

  // Xử lý các trạng thái chờ của User mà không chặn việc hiển thị Phim
  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Đang tải thông tin người dùng...
      </div>
    );
  }

  if (status === "syncing") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Đang đồng bộ dữ liệu vào hệ thống...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="flex justify-between items-center mb-8">
        
        {/* UserButton của Stack Auth chỉ chạy ở Client */}
        <div className="flex items-center gap-4">
          <span>Chào, {user?.displayName || "Bạn"}</span>
        </div>
      </header>

      <section>
      <Section heading="Phim Mới Cập Nhật" type={initialMovies} />
      </section>
    </main>
  );
}