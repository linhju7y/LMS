import { useEffect } from "react";
import { useWrap } from "~/wrapper/wrap";

export default function TitlePage({ title }: { title: string }) {
  const { getTitlePage } = useWrap();
  useEffect(() => {
    getTitlePage(title);
  }, []);

  return <></>;
}
