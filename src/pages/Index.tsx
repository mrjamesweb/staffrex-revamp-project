
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  Briefcase, 
  Target, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Connect Talent with Opportunity",
      subtitle: "Your Premier Staffing Solutions Partner",
      description: "We bridge the gap between exceptional talent and outstanding opportunities, creating success stories for both candidates and employers.",
      image: "photo-1581092795360-fd1ca04f0952"
    },
    {
      title: "Building Tomorrow's Workforce",
      subtitle: "Expert Recruitment & Staffing",
      description: "From temporary staffing to permanent placements, we provide comprehensive workforce solutions tailored to your business needs.",
      image: "photo-1498050108023-c5249f4df085"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Permanent Staffing",
      description: "Find the right talent for long-term success with our comprehensive permanent staffing solutions."
    },
    {
      icon: Clock,
      title: "Temporary Staffing",
      description: "Flexible workforce solutions to meet your short-term and project-based staffing needs."
    },
    {
      icon: Target,
      title: "Executive Search",
      description: "Specialized recruitment for senior-level positions and executive roles across industries."
    },
    {
      icon: Shield,
      title: "Contract Staffing",
      description: "Skilled professionals for contract positions with complete compliance and support."
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served", icon: Briefcase },
    { number: "10,000+", label: "Candidates Placed", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Client Satisfaction", icon: Star }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(https://images.unsplash.com/${heroSlides[currentSlide].image}?auto=format&fit=crop&w=1920&q=80)`
          }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light text-blue-100">
              {heroSlides[currentSlide].subtitle}
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <stat.icon className="mx-auto mb-4 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" size={40} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive staffing solutions designed to meet your unique business requirements and drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">StaffRex?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Expert industry knowledge and deep market insights",
                  "Rigorous screening and qualification processes",
                  "Dedicated support throughout the entire process",
                  "Proven track record of successful placements",
                  "Customized solutions for every business need",
                  "Long-term partnerships built on trust and results"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
                  <Link to="/about">
                    Learn More About Us <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Professional team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-green-500" size={32} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Partner with StaffRex today and discover how our expertise can drive your business forward. 
            Let's build success together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
              <Link to="/careers">
                View Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
