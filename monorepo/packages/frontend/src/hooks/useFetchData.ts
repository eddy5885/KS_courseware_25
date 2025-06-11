import { useState, useEffect } from "react";
import type { DataType } from "../pages/hooks";

const useFetchData = (page: number, pageSize: number, orderStatus: string) => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const options = {
        pageIndex: page,
        pageSize: pageSize,
        order_status: orderStatus,
      };
      const response = await fetch("/api/ten/getorderlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
      });
      const result = await response.json();
      setData(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, orderStatus]);

  return { data, loading, total, refreshData: fetchData };
};

export default useFetchData; 