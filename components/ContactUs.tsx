"use client";

import {
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

type FormType = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
};

export default function ContactUs() {
  const { toast } = useToast()

  const [forms, setForms] = useState<FormType>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForms(prevForms => ({
      ...prevForms,
      [name]: value
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if(!forms.email){
        setError("Please enter your email!");
        return;
    }
    if(!forms.firstName){
        setError("Please enter your first name!");
        return;
    }
    if(!forms.lastName){
        setError("Please enter your last name!");
        return;
    }
    if(!forms.message){
        setError("Please enter your message to send the email!");
        return;
    }

    const templateParams = {
        from_name: forms.firstName + ' ' + forms.lastName,
        to_name: 'GEPS Support Team',
        message: forms.message,
        email: forms.email,
    }

    setIsLoading(true);
    emailjs
        .send( 
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
            templateParams,
            {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            },
        )
        .then(
            function (response) {
                setForms({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: ""
                })
                setIsLoading(false);
                setSuccess("Your message has been sent successfully. We will get back to you soon.");
                toast({
                    title: "Message submitted",
                    description:
                      "You have successfully submitted your message. We will keep in touch with you with the speed of light :)",
                });
            },
            function (error) {
                setError("Some error occurred. Please send us a direct email using the address below.")
                toast({
                    title: "Something went wrong",
                    description:
                      "There is an error while submitting the form, Please try again later :(",
                    variant: "destructive",
                });
                console.log(error);
                setIsLoading(false);
            }
        )
  }

  return (
    <section className="relative">
      <div className="absolute inset-0 blur-xl h-[580px] header-bg"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        <Card className="relative backdrop-blur-3xl bg-transparent rounded-xl p-6 text-white/90 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-800/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <CardHeader>
            <CardDescription className="text-3xl font-bold text-white/90 mb-2">
              Get in touch with us
              <div className="text-xl font-normal">Write to us at support@gepstoken.com</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white/70">First Name</Label>
                  <Input
                    id="firstName"
                    value={forms.firstName}
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={handleInputChange}
                    required
                    className="bg-transparent text-white/90 border-white/10 focus:border-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white/70">Last Name</Label>
                  <Input
                    id="lastName"
                    value={forms.lastName}
                    name="lastName"
                    placeholder="Enter your last name"
                    onChange={handleInputChange}
                    className="bg-transparent text-white/90 border-white/10 focus:border-white/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/70">Email</Label>
                <Input
                  id="email"
                  value={forms.email}
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={handleInputChange}
                  required
                  className="bg-transparent text-white/90 border-white/10 focus:border-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/70">Message</Label>
                <Textarea
                  id="message"
                  required
                  value={forms.message}
                  onChange={handleInputChange}
                  name="message"
                  maxLength={200}
                  placeholder="Enter your message"
                  className="bg-transparent text-white/90 border-white/10 focus:border-white/30 min-h-[100px]"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <Button
                type="submit"
                className="w-full md:w-auto px-6 py-3 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}