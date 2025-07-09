import PaginatedList from "./paginatedList";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }, 
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Posts with Pagination</h1>
      <PaginatedList initialData={data} itemsPerPage={5} />
    </div>
  );
}
