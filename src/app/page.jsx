import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
      <div className=" container">
        <h1 className=" font-bold text-4xl">Home</h1>
        <div className=" flex items-center justify-center gap-4">
          <h1>Snippets</h1>
          <Link href={"/snippet"}>
            <Button>New</Button>
          </Link>
        </div>
      </div>
   </>
  );
}
