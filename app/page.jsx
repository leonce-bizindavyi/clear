import { Suspense } from "react";
import Home from "./ui/home";

export default function Page() {
  return (
    <main>
      <Suspense>
        <Home />
      </Suspense>
    </main>
  );
}
