"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveSnippet = async (id, code) => {
    await prisma.snnipet.update({
        where: {
            id
        },
        data: {
            code
        }
    });
    revalidatePath(`/snippet/${id}`);
    redirect(`/snippet/${id}`)
}


export const deleteSnippet = async (id) => {
    await prisma.snnipet.delete({
        where: {
            id
        }
    }),
    revalidatePath("/");
    redirect("/")
}



const createSnnipet = async (message, formData) => {
    const title = formData.get('title');
    const code = formData.get('code');

    if(typeof title !== "string" || !code) {
        return {message: "Title and code are required"}
    }

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
    console.log("snippet", snippet);
    redirect('/');
  };