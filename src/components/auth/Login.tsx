'use client'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { DialogContainer } from '../global/Dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FormLabel, Form, FormField, FormItem, FormControl, FormMessage} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from '../ui/separator';
import { signIn } from '@/utils/auth';

    const formSchema = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    });

const Login = () => {

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
    const {result, error} =  await signIn( data.email, data.password)
     if (error) {
       return console.log(error, "===err");
     }

     // else successful
     console.log(result, "---res");
   });
  return (
    <DialogContainer
      title={
        <p>
          <span>Log In to </span>
          <span className="text-pink-500">insta</span>
          <span className="text-indigo-600">Review</span>
        </p>
      }
      description=""
      button={<Button>Log In</Button>}
    >
      <div className="mb-4">
        <Button variant="outline" className="w-full">
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
                    <Input type="password" placeholder="password" {...field} />
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
    </DialogContainer>
  );
}

export default Login