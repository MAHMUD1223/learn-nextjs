export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs about {params.slug[0]}</h1>;
  }
  return <h1>Home page of docs</h1>;
}
