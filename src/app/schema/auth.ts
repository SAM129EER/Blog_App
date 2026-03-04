import z from "zod";
export const SignUpSchema = z.object({
  name: z
    .string()
    .min(1, "Enter full name")
    .min(2, "Full name must be at least 2 characters"),
  email: z.string().min(1, "Enter email").email("Enter valid email"),
  password: z
    .string()
    .min(1, "Enter password")
    .min(6, "Password must be at least 6 characters"),
});

// login only requires email and password
export const LoginSchema = z.object({
  email: z.string().min(1, "Enter email").email("Enter valid email"),
  password: z
    .string()
    .min(1, "Enter password")
    .min(6, "Password must be at least 6 characters"),
});
