'use client'

import Link from "next/link";
import '@/app/styles/products/products.css'

const Page = () => {
  const products = [
  {
    id: 1,
    name: "Mouse",
    description: "A smooth, ergonomic mouse with Bluetooth connectivity and long battery life.",
    price: 29.99,
  },
  {
    id: 2,
    name: "Keyboard",
    description: "A tactile keyboard with RGB lighting and custom switch options.",
    price: 59.99,
  },
  {
    id: 3,
    name: "Headphones",
    description: "Over-ear headphones with active noise cancellation and rich audio quality.",
    price: 99.99,
  },
  {
    id: 4,
    name: "Hub",
    description: "A multi-port hub with HDMI, USB-A, SD card reader, and Ethernet.",
    price: 24.99,
  },
  {
    id: 5,
    name: "Monitor",
    description: "A 27-inch ultra HD monitor with adjustable stand and vibrant display.",
    price: 199.99,
  },
];

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem", fontSize: "large" }}>
        6. Create a list of items (e.g., products, articles) in your application.
        Implement dynamic routing to display details for each item when clicked.
        Create a route parameter that represents the item's ID in the URL (e.g.,
        "/products/:id"). Fetch item details based on the route parameter and
        display them on the detail page. Add a "Go Back" button on the detail
        page to return to the list.
      </p>
      <div className="item-links">
       {products.map((item, index) => 
         <div key={index}>
          <h3>{item.name}</h3>
          <Link href={`question-6/${item.id}`}>Show Details</Link>
         </div>
      )}
      </div>
    </div>
  );
};

export default Page;
