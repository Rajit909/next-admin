import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snnipet.findMany();
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
        {
            snippets.map((snippet, index) => (
              <div key={index} className=" border rounded-md border-purple-500 bg-gray-200 shadow-md flex items-center justify-between mx-4 p-4 mb-2 hover:translate-y-1 hover:transition-all">
                <div>
                  <h2>{snippet.title}</h2>
                  <p>{snippet.code}</p>
                </div>
                <div>
                  <Link href={`/snippet/${snippet.id}`}>
                    <Button variant="outline">View</Button>
                  </Link>
                </div>
              </div>
            ))
        }
      </div>
   </>
  );
}
