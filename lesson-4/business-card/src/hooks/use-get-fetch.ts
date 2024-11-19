import { useEffect, useState } from "react";

// TODO:
// We need to fix typing
// Fix URL.

const SERVER_BASE_URL = "http://localhost:3000";

export default function useGetFetch(subPath: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(SERVER_BASE_URL + subPath);
      const body = await response.json();
      setData(body);
    };

    getData();

    // Cleanup function
    return () => {
      setData([]);
    };
  }, []);

  return [data, setData] as const;
}
