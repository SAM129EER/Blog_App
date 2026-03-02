"use client";
import { SignUpSchema } from "@/app/schema/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
 function onSubmit(data: any) {   console.log(data);
 }

  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">Sign Up</CardTitle>
          <CardDescription  className="flex items-center justify-center gap-2">Sign up to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FieldGroup className="gap-y-4">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Full Name</FieldLabel>
                    <Input aria-invalid={!!fieldState.error} placeholder="Enter your full name" {...field} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]}></FieldError>
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input aria-invalid={!!fieldState.error} placeholder="Enter your email" {...field} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]}></FieldError>
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input aria-invalid={!!fieldState.error} placeholder="Enter your password" type="password" {...field} />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]}></FieldError>
                    )}
                  </Field>
                )}
              />
              <Button className="cursor-pointer" type="submit">Sign Up</Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
