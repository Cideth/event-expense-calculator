import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "모임 정산 앱",
  description: "모임 비용을 쉽게 정산하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
