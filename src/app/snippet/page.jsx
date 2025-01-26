import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const CreatenippetPage = () => {
  return (
    <>
        <div className=' px-4'>
        <h1>Create Snippet</h1>
        <div className="">
        <div className=''>
        <Label>Title</Label>
        <Input type="text" id="title" placeholder="Title" />
        </div>
        </div>
        </div>
    </>
  )
}

export default CreatenippetPage