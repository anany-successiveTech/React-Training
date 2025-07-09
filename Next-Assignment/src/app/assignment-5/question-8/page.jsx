"use client";

import Button from "@/component/ButtonSecond";
import { useState } from "react";
import "@/app/styles/a5q8.css";

const DemoPage = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        8. Create a reusable Button component that accepts props to apply
        different styles such as primary, secondary, and danger, along with
        click handlers. Demonstrate how to use this Button component within a
        sample Next.js application.
      </p>
      <div className="main-btn-box">
        <div className="boxOfBtn">
          <div className="q8-demo-container">
            <h2>Reusable Button Demo</h2>

            <div className="q8-button-row">
              <Button
                type="primary"
                onClick={() => setMessage("Primary clicked!")}
              >
                Primary
              </Button>
              <Button
                type="secondary"
                onClick={() => setMessage("Secondary clicked!")}
              >
                Secondary
              </Button>
              <Button
                type="danger"
                onClick={() => setMessage("Danger clicked!")}
              >
                Danger
              </Button>
            </div>

            {message && <p className="q8-message">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
