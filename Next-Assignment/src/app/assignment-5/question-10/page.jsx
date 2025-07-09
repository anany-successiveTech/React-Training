"use client";

import withLogger from "@/hoc/withLogger";
import LoggerExample from "@/component/loggerExample";
import "@/app/styles/a5q10.css";

const LoggedExample = withLogger(LoggerExample);

export default function Question15Page() {
  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">Question 15: withLogger</h1>
      <LoggedExample />
    </div>
  );
}
