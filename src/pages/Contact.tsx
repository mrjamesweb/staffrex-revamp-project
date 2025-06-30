
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@staffrex.in",
      subtitle: "We'll respond within 24 hours",
      link: "mailto:info@staffrex.in"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subtitle: "Monday to Friday, 9 AM - 6 PM",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Bangalore, Karnataka",
      subtitle: "India - 560001",
      link: "#"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 9 AM - 6 PM",
      subtitle: "Sat: 10 AM - 2 PM",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your workforce? We're here to help you find the perfect staffing solution. 
              Let's start the conversation today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <info.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-gray-800 mb-2">{info.details}</p>
                  <p className="text-gray-600">{info.subtitle}</p>
                  {info.link !== "#" && (
                    <a 
                      href={info.link}
                      className="inline-block mt-3 text-blue-600 hover:text-purple-600 transition-colors duration-300 font-medium"
                    >
                      Contact Now →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 h-12"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2 h-12"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 h-12"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us more about your staffing needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Send Message <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Image & Info */}
            <div className="space-y-8">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="StaffRex Office"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Located in the heart of Bangalore, our modern office space reflects our commitment 
                    to innovation and excellence. We welcome you to visit us for a face-to-face 
                    consultation about your staffing needs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-blue-600" size={20} />
                      <span className="text-gray-700">Bangalore, Karnataka, India - 560001</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-blue-600" size={20} />
                      <span className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We understand that time is crucial in staffing decisions. That's why we guarantee:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Response to inquiries within 2 hours</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Initial consultation within 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Candidate profiles within 48 hours</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Urgent Staffing Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We understand that staffing emergencies can happen. For urgent requirements, 
            call our dedicated hotline for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
              <a href="tel:+919876543210">
                <Phone className="mr-2" size={20} />
                Call Now: +91 98765 43210
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
              <a href="mailto:urgent@staffrex.in">
                <Mail className="mr-2" size={20} />
                urgent@staffrex.in
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
