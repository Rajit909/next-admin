import EditSnippetForm from '@/components/EditSnippetForm';
import { prisma } from '@/lib/prisma';
import React from 'react'

const EditSnnipet = async ({params}) => {
    const { id } = await params;
    const snippet = await prisma.snnipet.findUnique({
        where: {
            id: parseInt(id)
        }
    })
  return (
    <>
        <div className='m-5'>
          <h1 className=' font-bold uppercase underline'>Title: {snippet.title}</h1>
       <EditSnippetForm snippet={snippet}/>
        </div>
    </>
  )
}

export default EditSnnipet