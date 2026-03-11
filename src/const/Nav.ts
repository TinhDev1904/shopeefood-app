import NavItem from "@/interfaces/NavItem";

export const NAV_CATEGORIES: NavItem[] = [
  { label: "Phim Lẻ", slug: "phim-le" },
  { label: "Phim Bộ", slug: "phim-bo" },
  { label: "Anime", slug: "anime" },
  { label: "Chiếu Rạp", slug: "chieu-rap" },
  { label: "Quốc gia", slug: "quoc-gia" },
  { label: "Năm", slug: "nam" },
  { label: "Xem thêm", slug: "xem-them",  sub: [
    { label: "Thể loại", slug: "the-loai" },
    { label: "Quốc gia", slug: "quoc-gia" },
    { label: "Năm", slug: "nam" }
  ]},
  ]as const;