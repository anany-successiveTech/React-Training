"use client";
import React, { useState } from "react";

const ClipboardComponent = () => {
  const [copied, setCopied] = useState(false);
  const text = "Copy this text!";

  const copyText = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy"); // In one article i saw this implimentation apart from api
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={copyText}>Copy</button>
      {copied && <p>✅ Copied!</p>}
    </div>
  );
};

export default ClipboardComponent;
