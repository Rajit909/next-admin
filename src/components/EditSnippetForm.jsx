"use client";
import { saveSnippet } from '@/app/actions/serverActions';
import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react'
import { Button } from './ui/button';
import {Snippet} from "@prisma/client"

const EditSnippetForm =  ({snippet}) => {
  console.log(snippet.code)
  const [code, setCode ] = useState(snippet.code);
  console.log("code", code)
  const changeEventHandler = (value)=>{
    setCode(value)
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)
  return (
    <>
    <div className='flex flex-col gap-4'>
      <form action={saveSnippetAction} className="flex items-center justify-between">
      <h1 className="font-bold text-xl">Your Code Editor:</h1>
      <Button type="submit">Save</Button>
      </form>
    <Editor
        height="40vh"
        theme='vs-dark'
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={changeEventHandler}
      />
    </div>
    </>
  )
}

export default EditSnippetForm