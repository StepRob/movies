const Movie = ({ movie }) => {
    function getGenreColor(genre) {
        switch (genre) {
            case 'Drama':
                return 'bg-blue-300 text-blue-700';
            case 'Action':
                return 'bg-orange-300 text-orange-800';
            case 'Crime':
                return 'bg-rose-300 text-rose-900';
            default:
                return 'bg-gray-300 text-gray-700';
        }
    }
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2 className="font-bold text-2xl mb-6 text-blue-950 dark:text-neutral-100">{movie.title}</h2>
            <p className="py-6 dark:text-neutral-200">{movie.description}</p>
            <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-neutral-100 dark:text-blue-600 ${getGenreColor(movie.genre)}`}>
                {movie.genre}
            </span>
        </div>
    )
}
export default Movie