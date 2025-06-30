
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  Clock, 
  Target, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Briefcase,
  Search,
  UserCheck,
  Settings
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Users,
      title: "Permanent Staffing",
      description: "Find the right talent for long-term success with our comprehensive permanent staffing solutions.",
      features: [
        "Executive search and selection",
        "Mid-level professional recruitment",
        "Entry-level talent acquisition",
        "Specialized industry expertise",
        "Complete background verification",
        "Post-placement support"
      ],
      image: "photo-1581092795360-fd1ca04f0952"
    },
    {
      icon: Clock,
      title: "Temporary Staffing",
      description: "Flexible workforce solutions to meet your short-term and project-based staffing needs.",
      features: [
        "Project-based assignments",
        "Seasonal workforce solutions",
        "Emergency coverage",
        "Skill-specific temporary roles",
        "Quick turnaround time",
        "Flexible contract terms"
      ],
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      icon: Target,
      title: "Executive Search",
      description: "Specialized recruitment for senior-level positions and executive roles across industries.",
      features: [
        "C-suite executive recruitment",
        "Board of directors search",
        "Senior management positions",
        "Confidential search processes",
        "Global talent network",
        "Leadership assessment"
      ],
      image: "photo-1483058712412-4245e9b90334"
    },
    {
      icon: Shield,
      title: "Contract Staffing",
      description: "Skilled professionals for contract positions with complete compliance and support.",
      features: [
        "Contract-to-hire options",
        "Independent contractor placements",
        "Compliance management",
        "Payroll administration",
        "Benefits coordination",
        "Performance monitoring"
      ],
      image: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "Talent Sourcing",
      description: "Proactive identification and engagement of top talent across various channels."
    },
    {
      icon: UserCheck,
      title: "Background Verification",
      description: "Comprehensive screening and verification services to ensure quality hires."
    },
    {
      icon: Briefcase,
      title: "HR Consulting",
      description: "Strategic HR advisory services to optimize your workforce management."
    },
    {
      icon: Settings,
      title: "Workforce Solutions",
      description: "End-to-end workforce management and optimization strategies."
    }
  ];

  const industries = [
    "Information Technology",
    "Banking & Financial Services",
    "Healthcare & Pharmaceuticals",
    "Manufacturing & Engineering",
    "Retail & E-commerce",
    "Telecommunications",
    "Education & Training",
    "Real Estate & Construction"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive staffing solutions designed to meet your unique business requirements 
              and drive organizational success across all levels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img 
                    src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Supporting services to enhance your recruitment process and workforce management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans across diverse industries, ensuring specialized knowledge and tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <p className="text-center font-medium text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to ensure the best fit for both clients and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understanding Requirements", description: "Detailed consultation to understand your specific needs and culture." },
              { step: "02", title: "Talent Sourcing", description: "Strategic sourcing from our network and active market research." },
              { step: "03", title: "Screening & Assessment", description: "Rigorous evaluation including skills, cultural fit, and background checks." },
              { step: "04", title: "Placement & Support", description: "Seamless onboarding support and ongoing relationship management." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your staffing needs and create a customized solution that drives results.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
