import { Separator } from '@radix-ui/react-separator';
import { Input } from "../ui/input";
import React, { useState } from 'react';
import {
  FormLabel,
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { signIn, getUserDetails, signInWithGoogle } from '@/app/actions/auth';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { redirectToDashboard } from '@/utils/functions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { z } from 'zod';
import LoadingSpinner from '../global/LoadingSpinner';

const VendorLogin = () => {
  const router = useRouter();
  const userRole = "vendors"
  const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: { city: "", state: "", country: "" },
      email: "",
      password: "",
      instagram: "",
      productInterests: [],
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      const { result, error } = await signIn(data.email, data.password);
      console.log(result, "====result===")
      if (error) {
        toast({
          description: "Ooops try again 🙁",
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
        });
        return console.log(error, "===err");
      }
      // else successful
      if (result) {
        toast({
          description: "You can login 🎉",
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
        });

        // Fetch role from Firestore
        const { user } = await getUserDetails(result.user.uid, userRole);
        const role = user && user?.role;
        console.log(role, '=role of user on email login=')
        // Redirect based on role
       redirectToDashboard(role, router)
        console.log(result, "---res");
      }
    } catch (error) {
      console.error("Unexpected error during login:", error);
      toast({
        description: "Something went wrong. Please try again later.",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    } finally {
      setIsLoading(false);
    }
  });

  const handleClick = async () => {
    const { result, error } = await signInWithGoogle(userRole);
    if (error) {
      toast({
        description: "Ooops try again 🙁",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    }
    // else successful
      if (result) {
        toast({
          description: "You can login 🎉",
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
        });

        // Fetch role from Firestore
        const { user } = await getUserDetails(result.user.uid, userRole);

        console.log(user, "===user in login component===")
        const role = user && user?.role;
        console.log(role, '=role of user on google signin=')
        // Redirect based on role
        redirectToDashboard(role, router);
      }
  };
    return (
        <div>
            <div className="mb-4">
                <Button variant="outline" className="w-full" onClick={handleClick}>
                <FcGoogle />
                Continue with Google
                </Button>
            </div>
            <Form {...form}>
                <form onSubmit={onSubmit} className="x-space-4">
                <div className="flex justify-center gap-x-2 items-center">
                    <Separator />
                    <p>or</p>
                    <Separator />
                </div>
                <div className="mb-4">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        {/* dropdown  */}
                        <FormControl>
                            <Input type="email" placeholder="email" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="mb-4">
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Password</FormLabel>
                        {/* dropdown  */}
                        <FormControl>
                            <Input
                            type="password"
                            placeholder="password"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button type="submit" size="lg">
                    Log In
                </Button>
                </form>
            </Form>
               {isLoading && <LoadingSpinner />}
        </div>
    )
}

export default VendorLogin;