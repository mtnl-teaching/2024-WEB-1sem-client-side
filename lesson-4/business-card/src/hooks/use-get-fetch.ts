import { useEffect, useState } from "react";

const SERVER_BASE_URL = "http://localhost:3000";

export default function useGetFetch(subPath: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isCorrect = true;

    const getData = async () => {
      const response = await fetch(SERVER_BASE_URL + subPath);
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
  }, [subPath]);

  return [data, setData] as const;
}
