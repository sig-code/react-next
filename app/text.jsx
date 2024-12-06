"use client";

import { useEffect } from "react";


export const ClientComponent = () => {
  const hasVisited =
    typeof window !== "undefined" && !!localStorage.getItem("hasVisited");

  useEffect(() => {
    if (!hasVisited) localStorage.setItem("hasVisited", "true");
  }, []);

  const text = hasVisited ? "また会えて嬉しいです" : "はじめまして";

  return (
    <span>
      {text}、テストさん
    </span>
  );
};
