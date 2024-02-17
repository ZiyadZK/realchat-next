'use server';

import { redirect } from "next/navigation";

export const goTo = (url: string) => {
    redirect(url);
}
