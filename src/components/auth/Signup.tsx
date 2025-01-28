import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DialogContainer } from "../global/DialogContainer";
import ReviewerSignup from "./ReviewerSignup";
import VendorSignup from "./VendorSignup";

export const Signup = () => {
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
      button={<Button>Sign Up</Button>}
    >
      <Tabs defaultValue="reviewer">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="reviewer">Signup as a Reviewer</TabsTrigger>
          <TabsTrigger value="vendor">Signup as a Vendor</TabsTrigger>
        </TabsList>
        <TabsContent value="reviewer">
          <Card>
            <CardContent className="space-y-2 mt-10">
              <ReviewerSignup />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendor">
          <Card>
            <CardContent className="space-y-2 mt-10">
              <VendorSignup />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContainer>
  );
};
