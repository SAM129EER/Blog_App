import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUp() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">Sign Up</CardTitle>
          <CardDescription>Sign up to create an account</CardDescription>
        </CardHeader>
      </Card>
      <h1>This is sign up page</h1>
    </>
  );
}
