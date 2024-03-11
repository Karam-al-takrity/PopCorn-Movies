import { useState , useEffect } from "react";

const KEY = "12a48180";
export default function useMovie(
    query,
) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
   

    useEffect(
        () => {
            // callback?.();

        const controller = new AbortController();
        const fetchMovies = async () => {
          try {
            setIsLoading(true);
            setError("");
    
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
              { signal: controller.signal }
            );
    
            if (!res.ok)
              throw new Error("Something went wrong with fetching movies");
    
            const data = await res.json();
    
            if (data.Response === "False") throw new Error("Movie not found");
            setMovies(data.Search);
            setError("");
          } catch (err) {
            console.error(err.message);
            if (err.message !== "AbortError") {
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        };
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }
        fetchMovies();
    
        return () => {
          controller.abort();
        };
      }, [query]);
      
      return {movies , isLoading , error}
}