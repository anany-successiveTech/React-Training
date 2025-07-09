"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [productFound, setProductFound] = useState([]);

  const products = [
    {
      id: 1,
      name: "Mouse",
      description:
        "A smooth, ergonomic mouse with Bluetooth connectivity and long battery life.",
      price: 29.99,
    },
    {
      id: 2,
      name: "Keyboard",
      description:
        "A tactile keyboard with RGB lighting and custom switch options.",
      price: 59.99,
    },
    {
      id: 3,
      name: "Headphones",
      description:
        "Over-ear headphones with active noise cancellation and rich audio quality.",
      price: 99.99,
    },
    {
      id: 4,
      name: "Hub",
      description:
        "A multi-port hub with HDMI, USB-A, SD card reader, and Ethernet.",
      price: 24.99,
    },
    {
      id: 5,
      name: "Monitor",
      description:
        "A 27-inch ultra HD monitor with adjustable stand and vibrant display.",
      price: 199.99,
    },
  ];
  const { id } = useParams();

  
  // console.log(id);
  useEffect(() => {
    setProductFound(products.find((item) => item.id == id));
  }, []);
  // console.log(products.find((item) => item.id === id));

  if (!id) {
    return <p>Product not found</p>;
  }
  return (
 <div className="product-detail-container">
  <h3 className="product-detail-heading">{productFound.name}</h3>
  <p className="product-detail-price">Rs.{productFound.price}</p>
  <p className="product-detail-description">{productFound.description}</p>

  <Link href="/assignment-3/question-6" className="home-link">
    <span>
      <i className="fa-solid fa-arrow-left"></i>
    </span>{" "}
    Back
  </Link>
</div>

  );
};

export default Page;
