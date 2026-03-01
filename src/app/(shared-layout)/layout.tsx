import { Navbar } from "@/components/web/navbar";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/* <h1>This is the shared layout</h1> */}
      {children}
    </>
  );
}
