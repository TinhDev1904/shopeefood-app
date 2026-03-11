import Movie from "@/interfaces/Movie";
import MovieCard from "../ui/MovieCard";

interface SectionProps {
  heading: string;
  type: {
    items: Movie[];
  };
}

const Section = ({ heading, type }: SectionProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 text-white uppercase tracking-wider">
          {heading}
        </h2>
        <button className="text-sm text-zinc-400 hover:text-primary transition">
          Xem tất cả
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
        {type?.items?.map((movie: Movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Section;