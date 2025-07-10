"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginatedList({ itemsPerPage }) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPage = async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${(pageNum - 1) * itemsPerPage}&_limit=${itemsPerPage}`
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();

      setTotalCount(100); 

      setItems(data);
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <div>
      <h1>Paginated List (Page {page})</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong><br />
            {item.body}
          </li>
        ))}
      </ul>

      <Stack spacing={2} alignItems="center" marginTop="1rem">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, val) => setPage(val)}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
