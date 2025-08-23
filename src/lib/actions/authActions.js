"use server"
import { signIn, signOut } from "@/auth"

export const login = async () => {
    await signIn('google', {redirectTo: 'https://dishcraft-sigma.vercel.app/dishes'})
}

export const logout = async () => {
    await signOut({redirectTo: 'https://dishcraft-sigma.vercel.app/dishes'})
}