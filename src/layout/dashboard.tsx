import { Inter } from "next/font/google";
import "../app/globals.css";
import Sidebar from "@/components/sidebar";

export default function DashBoard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar children={children} />
      {/* {children} */}
    </div>
  );
}
