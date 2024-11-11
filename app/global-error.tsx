// app/global-error.tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="p-4">
          <h2>전체 앱에서 치명적인 에러가 발생했습니다!</h2>
          <p>{error.message}</p>
          <button onClick={reset}>다시 시도</button>
        </div>
      </body>
    </html>
  );
}
