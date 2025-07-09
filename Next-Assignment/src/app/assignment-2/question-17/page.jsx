"use client";

import React, { useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand("copy");

      if (successful) {
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
      } else {
        console.error("Copy command was unsuccessful");
      }
    } catch (err) {
      console.error("Error copying text:", err);
    }

    document.body.removeChild(textarea);
  };

  return { copied, copy };
};

const Page = () => {
  const { copied, copy } = useClipboard();
  const textToCopy = "Hello! Copy this text.";

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        17. Build a custom hook named useClipboard for copying text to the
        clipboard. Implement a useClipboard hook that takes a text value as a
        parameter. Use the document.execCommand API to copy the provided text to
        the clipboard. Return a success status and methods to trigger the
        copying action. Develop a component that uses the useClipboard hook to
        provide a copy button for text.
      </p>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>{textToCopy}</p>
        <button onClick={() => copy(textToCopy)}>Copy</button>

        {copied && <p style={{ color: "green" }}>Copied!</p>}
      </div>
    </div>
  );
};

export default Page;
