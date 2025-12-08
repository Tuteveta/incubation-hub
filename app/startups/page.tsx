// app/startups/page.tsx
import dynamic from "next/dynamic";

const StartupsClient = dynamic(() => import("../components/StartupsClient"), { ssr: false });

export default function StartupsPage() {
  return <StartupsClient />;
}