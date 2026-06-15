import { redirect } from "next/navigation";

export default function Home() {
  // 사용자가 메인 홈페이지(/)로 접속하면 자동으로 Investment Deck의 첫 번째 페이지(Page 1)로 이동시킵니다.
  redirect("/page/1");
}
