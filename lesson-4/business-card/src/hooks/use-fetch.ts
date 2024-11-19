import { useEffect, useState } from "react";

const SERVER_BASE_URL = "http://localhost:3000";

type HTTP_METHOD = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

export default function useFetch<T>(
  initialValue: T,
  subPath: string,
  method: HTTP_METHOD,
  headers?: HeadersInit
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    let isCorrect = true;

    const getData = async () => {
      const response = await fetch(SERVER_BASE_URL + subPath, {
        method,
        headers,
      });

      const body = await response.json();

      if (isCorrect) {
        setData(body);
      }
    };

    getData();

    // Cleanup function
    return () => {
      isCorrect = false;
    };
  }, [subPath, method, headers]);

  return [data, setData] as const;
}
