import { useEffect, useState } from "react";

const SERVER_BASE_URL = "http://localhost:3000";

type HTTP_METHOD = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

export default function useFetch<T>(
  initialValue: T,
  subPath: string,
  method: HTTP_METHOD,
  body: unknown,
  headers?: HeadersInit
): { data: T; loading: boolean; error: string } {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    let isCorrect = true;

    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(SERVER_BASE_URL + subPath, {
          method,
          headers,
          body: JSON.stringify(body),
        });

        const returnedBody = await response.json();

        if (isCorrect) {
          setData(returnedBody);
        }

        setLoading(false);
      } catch (error) {
        // We try to stringify the error.
        setError(`${error}`);
      }
    };

    getData();

    // Cleanup function
    return () => {
      isCorrect = false;
    };
  }, [subPath, method, headers, body]);

  return { data, loading, error };
}
