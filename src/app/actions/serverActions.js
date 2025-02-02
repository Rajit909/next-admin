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