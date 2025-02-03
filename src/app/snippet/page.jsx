import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/dist/server/api-utils';
import React, { useActionState } from 'react';

const CreateSnippetPage = () => {
  const [] = useActionState();
  

  return (
    <>
      <div className="px-4">
        <h1>Create Snippet</h1>
        <div>
          <form action={createSnnipet}>
            <div className="mb-4">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title" // Add name attribute
                placeholder="Title"
                required // Optional: ensures the field is filled
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="code">Code</Label>
              <Input
                type="text"
                id="code"
                name="code" // Add name attribute
                placeholder="Code"
                required // Optional: ensures the field is filled
              />
            </div>
            <Button className="mt-2" type="submit">
              Create
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSnippetPage;
