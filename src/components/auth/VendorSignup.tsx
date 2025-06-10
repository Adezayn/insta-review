"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  FormLabel,
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveVendorsDetails, signUp } from "@/app/actions/auth";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { redirectToDashboard } from "@/utils/functions";
import LoadingSpinner from "../global/LoadingSpinner";
import { Checkbox } from "../ui/checkbox";
import { categoriesList } from "@/utils/content";

const formSchema = z.object({
  name: z.string().min(1, "Business name is required"),
  address: z.object({
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    country: z.string().min(1, "Country is required"),
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  instagram: z.string().optional(),
  category:  z.array(z.string())
});


const VendorSignup = () => {
   const router = useRouter();
   const userRole = "vendor"
   const [isLoading, setIsLoading] = useState(false);
   const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: { city: "", state: "", country: "" },
      email: "",
      password: "",
      instagram: "",
      category: []
    },
  });


 const onSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true);
    try{
        const { result, error } = await signUp(data.email, data.password);
        if(result) {
            toast({
                description: "You have been successfully created",
                className: cn(
                "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
                ),
            });
            const user = {
                uid: result.user.uid,
                role: userRole,
                ...data,
            };
          console.log(user, "===user===");
            await saveVendorsDetails(user);
            console.log(result, "---res");
            redirectToDashboard(userRole, router)
        }
        if (error) {
            toast({
              description: "Failed to signup",
              className: cn(
                "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
              ),
            });
        }
    }catch(error){

    }finally{
      setIsLoading(false);
    }
  });
  return (
    <div>
      {isLoading && <LoadingSpinner />}
            <Form {...form}>
        <form onSubmit={onSubmit} className="my-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="Business Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
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
           <div className="mb-4">
            <FormField
              control={form.control}
              name="category"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      Category
                    </FormLabel>
                    <FormDescription>
                      Select the categories your business fall down
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2">
                    {categoriesList.map((item) => (
                    <FormField
                      key={item.name}
                      control={form.control}
                      name="category"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.name}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                // checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default VendorSignup;
