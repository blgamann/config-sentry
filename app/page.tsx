import ClientErrors from "./components/ClientErrors";
import ServerErrors from "./components/ServerErrors";

export default function ErrorTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">에러 테스트 페이지</h1>

      <div className="space-y-8">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">서버 컴포넌트 에러</h2>
          <ServerErrors />
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">클라이언트 컴포넌트 에러</h2>
          <ClientErrors />
        </div>
      </div>
    </div>
  );
}
