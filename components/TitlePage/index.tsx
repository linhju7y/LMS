import { useAuth } from "~/context/auth";

export default function TitlePage({ title }: { title: string }) {
  const { getTitlePage } = useAuth();
  getTitlePage(title);

  return <></>;
}
