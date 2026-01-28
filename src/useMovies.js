import { useState, useEffect } from "react";
const KEY = "bdc2dbfe";

export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callBack?.();
    const controller = new AbortController();

    async function fetchingData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal },
        );

        if (!response.ok)
          throw new Error("Something went wrong when fetching the data");

        const data = await response.json();

        if (data.Response === "False") throw new Error("movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    // onCloseMovie();
    fetchingData();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
