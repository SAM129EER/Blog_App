export default function Home() {
  return (
    <div className="flex flex-col
    justify-between ">
      <h1>Shared Layout</h1>
      <p>
        This page is rendered in the shared layout, which is defined in
        <code>app/layout.tsx</code>.
      </p>
      <p>
        The shared layout is used for all pages in the app, except for those
        that define their own layout. This allows you to have a consistent
        header, footer, or other elements across your app, while still allowing
        for page-specific layouts when needed.
      </p>
    </div>
  );
}
