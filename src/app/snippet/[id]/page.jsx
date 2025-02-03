import { deleteSnippet } from '@/app/actions/serverActions';
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'


const SnnipetDetail = async ({params}) => {
    const { id } = await params;

    
    const snippet = await prisma.snnipet.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!snippet) notFound();


    const deleteSnippetAction = deleteSnippet.bind(null, snippet.id)
  return (
    <>
        <div className='mx-2 border border-purple-300 p-1 rounded-md mt-1'>
            <div className=' flex items-center justify-between p-2'>
            <h1 className='text-2xl font-bold'>{snippet.title}</h1>
                <div>
                    <Link href={`/snippet/${snippet.id}/edit`}>
                    <Button>Edit</Button>
                    </Link>
                    <form action={deleteSnippetAction}>
                    <Button variant="destructive" type="submit" className="ml-1">Delete</Button>
                    </form>
                </div>
                </div>            
            <pre className='bg-gray-200 rounded p-1 pb-4 mt-1'>{snippet.code}</pre>
        </div>
    </>
  )
}

export default SnnipetDetail