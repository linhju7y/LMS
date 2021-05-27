import { useEffect } from "react";
import { useAuth } from "~/context/auth";

export default function TitlePage({ title }: { title: string }) {
  const { getTitlePage } = useAuth();
  useEffect(() => {
    getTitlePage(title);
  }, []);

  return <></>;
}
