import { useRouter } from "next/router";

export default function TitlePage({ title }: { title: string }) {
  // Get path and slug
  const router = useRouter();
  const slug = router.query.slug;
  let path: string = router.pathname;
  let pathString: string[] = path.split("/");
  path = pathString[pathString.length - 1];

  console.log("Path: ", path);
  // --------------- //

  return (
    <div className="title-page">
      <h6 className="text">{title}</h6>
    </div>
  );
}
