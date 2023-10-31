import MovieList from "@/components/home/MovieList";
export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <MovieList />
      </div>
    </main>
  )
}
