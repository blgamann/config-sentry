"use client";

import { useState, useEffect } from "react";
import { handleAsyncOperation } from "@/utils/error-handler";

export default function ClientErrors() {
  const [errorType, setErrorType] = useState<string | null>(null);

  const handleApiError = async () => {
    const result = await handleAsyncOperation(async () => {
      const res = await fetch("https://non-existing-api.com");
      return res.json();
    }, "클라이언트 API 호출 실패");

    if (!result.success) {
      console.log("API 호출 실패");
    }
  };

  const handleAsyncError = async () => {
    const result = await handleAsyncOperation(async () => {
      throw new Error("비동기 작업 실패" + Math.random());
    }, "비동기 작업 중 에러 발생");

    if (!result.success) {
      console.log("비동기 작업 실패");
    }
  };

  useEffect(() => {
    if (errorType === "effect") {
      handleAsyncOperation(async () => {
        console.log("useEffect 내부 에러 발생" + Math.random());
        throw new Error("useEffect 내부 에러" + Math.random());
      }, "useEffect 내부 에러 발생");
    }
  }, [errorType]);

  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <button
          onClick={handleApiError}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          API 에러 테스트
        </button>

        <button
          onClick={handleAsyncError}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          비동기 작업 에러 테스트
        </button>

        <button
          onClick={() => setErrorType("effect")}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          useEffect 에러 테스트
        </button>

        <button
          onClick={async () => {
            const result = await handleAsyncOperation(async () => {
              const obj: any = null;
              obj.nonExistentMethod();
              return true;
            }, "런타임 에러 발생");

            if (!result.success) {
              console.log("런타임 에러 발생");
            }
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          런타임 에러 테스트
        </button>
      </div>
    </div>
  );
}
