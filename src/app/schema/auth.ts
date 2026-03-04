import z from "zod";
export const SignUpSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(20),
  name: z.string().min(2).max(50),
});

// login only requires email and password
export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(20),
});
