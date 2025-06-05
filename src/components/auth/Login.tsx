"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DialogContainer } from "../global/DialogContainer";
import ReviewerLogin from "./ReviewerLogin";
import VendorLogin from "./VendorLogin";

const Login = () => {
  return (
     <DialogContainer
          title={
            <p>
              <span>Sign up for </span>
              <span className="text-pink-500">insta</span>
              <span className="text-indigo-600">Review</span>
            </p>
          }
          description=""
          button={<Button>Log In</Button>}
        >
          <Tabs defaultValue="reviewer">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reviewer">Login as a Reviewer</TabsTrigger>
              <TabsTrigger value="vendor">Login as a Vendor</TabsTrigger>
            </TabsList>
            <TabsContent value="reviewer">
              <Card>
                <CardContent className="space-y-2 mt-10">
                  <ReviewerLogin />
                </CardContent>
              </Card>
            </TabsContent>
    
            <TabsContent value="vendor">
              <Card>
                <CardContent className="space-y-2 mt-10">
                  <VendorLogin />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContainer>
  );
};

export default Login;
