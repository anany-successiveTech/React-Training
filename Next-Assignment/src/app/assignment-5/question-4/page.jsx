import PaginatedList from "./paginatedList";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        4. Build a registration form with two password fields. Implement
        controlled components for both password inputs. Add a validation rule to
        ensure that the two passwords match before allowing the form submission.
      </p>
      <div
        style={{
          maxWidth: 700,
          margin: "2rem auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Posts with Pagination</h1>
        <PaginatedList initialData={data} itemsPerPage={5} />
      </div>
    </div>
  );
}
