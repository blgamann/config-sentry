import { handleAsyncOperation } from "@/utils/error-handler";

export default function ServerErrors() {
  const handleApiError = async (formData: FormData) => {
    "use server";

    const result = await handleAsyncOperation(async () => {
      const res = await fetch("https://non-existing-api.com");
      if (!res.ok) {
        throw new Error("API 응답 오류");
      }
      return res.json();
    }, "API 호출 실패");

    if (!result.success) {
      console.log("API 호출 실패:", result.error?.message);
    } else {
      console.log("API 호출 성공:", result.data);
    }
  };

  const handleDatabaseError = async (formData: FormData) => {
    "use server";

    const result = await handleAsyncOperation(async () => {
      throw new Error("데이터베이스 연결 실패 시뮬레이션");
    }, "DB 연결 실패");

    if (!result.success) {
      console.log("DB 연결 실패:", result.error?.message);
    } else {
      console.log("DB 연결 성공:", result.data);
    }
  };

  return (
    <div>
      <form action={handleApiError}>
        <button type="submit">API 에러 테스트</button>
      </form>

      <form action={handleDatabaseError}>
        <button type="submit">DB 에러 테스트</button>
      </form>
    </div>
  );
}
