'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loginUser = async (username: string, password: string) => {
    try {
        const userData = await prisma.user.findFirst({
            where: {
                username: username,
                password: password
            }
        });
        return {
            success: true,
            userData
        }
    } catch (error) {
        return {
            success: false,
            message: error
        }
    }
}

export const regisUser = async (username: string, password: string, fullname: string) => {
    try {
        const newData = {username, password, fullname};
        const result = await prisma.user.create({
            data: newData
        })
        return {
            success: true,
            result
        }        
    } catch (error) {
       return {
            success: false
       } 
    }  
}