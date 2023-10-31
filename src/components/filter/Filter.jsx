function Filter({ genres, search, setSearch, selectedGenres, setSelectedGenres }) {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    type="search"
                    name="searchmovie"
                    className="pl-10 w-full mt-1 px-4 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1"
                    placeholder="Buscar película por nombre o descripción"
                    required
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="py-6">
                <label
                    className="block text-sm font-semibold text-blue-950 mb-5"
                >
                    Filtrar película por género
                </label>
                {genres.map((genre, index) => (
                    <div className="inline-flex items-center mr-6 mb-4" key={index}>
                        <label
                            className="relative flex items-center rounded-full cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:bg-slate-400 hover:checked:before:bg-sky-500 hover:before:opacity-10"
                                value={genre} onChange={e => {
                                    if (e.target.checked) {
                                        setSelectedGenres([...selectedGenres, e.target.value]);
                                    } else {
                                        setSelectedGenres(selectedGenres.filter(g => g !== e.target.value));
                                    }
                                }}
                            />
                            <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </label>
                        <label
                            className="mt-px px-1 cursor-pointer text-sm text-blue-950 font-medium select-none"
                        >
                            {genre}
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Filter