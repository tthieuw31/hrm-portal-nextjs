"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";

const ErrorPage = () => {
  const router = useRouter();

  const handleRetry = () => {
    router.refresh(); // Refresh trang để thử lại
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>There was an error processing your request. Please try again.</p>
      <Button
        type="primary"
        onClick={handleRetry}
        style={{ marginTop: "20px" }}
      >
        Retry
      </Button>
    </div>
  );
};

export default ErrorPage;
