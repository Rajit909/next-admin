import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';

const CreateSnippetPage = () => {
  const createSnnipet = async (formData) => {
    'use server';
    const title = formData.get('title');
    const code = formData.get('code');

    // Add required fields for Prisma model
    const snippet = await prisma.snnipet.create({
      data: {
        title,
        code,
        status: 1, 
        modified_by: 1, 
        fininacial_year_id: 1
      },
    });

    console.log('Snippet created successfully:', snippet);
    redirect(200, '/');
  };

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
