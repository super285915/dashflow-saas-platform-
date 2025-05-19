import { User } from "next-auth"
import { getErrorMessage } from "./utils"
import { hash, compare } from 'bcryptjs';
import { prisma } from './prisma';

export type AuthError = "CredentialsSignin" | "Default"

export const errors: Record<AuthError, string> = {
  CredentialsSignin: "Invalid credentials",
  Default: "Something went wrong",
}

export function getAuthError(error: string): string {
  return errors[error as AuthError] ?? errors.Default
}

export async function signInWithCredentials(email: string, password: string) {
  try {
    const response = await fetch("/api/auth/callback/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed")
    }

    return data as User
  } catch (error) {
    throw new Error(getErrorMessage(error))
  }
}

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

export async function createUser(data: { 
  email: string; 
  password: string; 
  name: string;
}) {
  const hashedPassword = await hashPassword(data.password);
  
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
    },
  });

  return { id: user.id, email: user.email, name: user.name };
}
