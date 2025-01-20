"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";

import {
  FormLabel,
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveUserDetails, signUp } from "@/app/actions/auth";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  address: z.object({
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    country: z.string().min(1, "Country is required"),
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  instagram: z.string().optional(),
  // picture: z.instanceof(File).optional(),
//   productInterests: z
//     .array(z.string().optional())
//     .refine((value) => value.some((item) => item), {
//       message: "You have to select at least one item.",
//     }),
});

// const items = [
//   {
//     id: 1,
//     label: "Groceries",
//   },
//   {
//     id: 2,
//     label: "Beauty",
//   },
//   {
//     id: 3,
//     label: "FootWears",
//   },
//   {
//     id: 4,
//     label: "Gadgets",
//   },
//   {
//     id: 5,
//     label: "Clothings",
//   },
//   //   gender?
// ];

const ReviewerSignup = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: { city: "", state: "", country: "" },
      email: "",
      password: "",
      instagram: ""
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { result, error } = await signUp(data.email, data.password);

    if (result) {
      toast({
        description: "You have been successfully created",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
      const user = {
        uid: result.user.uid,
        role: "reviewer",
        ...data,
      };
      console.log(user, "===user===");
      await saveUserDetails(user);
      console.log(result, "---res");
    }
    if (error) {
      toast({
        description: "Failed to signup",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    }
  });

  return (
      <Form {...form}>
        <form onSubmit={onSubmit} className="my-2">
          {/* <div className="mb-4">
            <Button variant="outline" className="w-full" onClick={handleSubmit}>
              <FcGoogle />
              Continue with Google
            </Button>
          </div>
          <div className="flex justify-center gap-x-2 items-center">
            <Separator />
            <p>or</p>
            <Separator />
          </div> */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col md:flex-row justify-between my-4">
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
          <div className="flex flex-col md:flex-row  justify-between gap-x-2 mb-4">
            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  {/* dropdown  */}
                  <FormControl>
                    <Input placeholder="state" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  {/* dropdown  */}
                  <FormControl>
                    <Input placeholder="country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram handle</FormLabel>
                  {/* dropdown  */}
                  <FormControl>
                    <Input placeholder="@username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <div className="mb-4">
            <FormField
              control={form.control}
              name="productInterests"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      Product Interests
                    </FormLabel>
                    <FormDescription>
                      Select the items you want purchase from your instagram
                      vendors
                    </FormDescription>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="productInterests"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                // checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </Form>
  );
};

export default ReviewerSignup;
