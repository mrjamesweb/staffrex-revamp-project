
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart, Eye, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with complete honesty and transparency in all our interactions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building long-term relationships based on trust and mutual success."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our approaches to meet changing market needs."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "photo-1581092795360-fd1ca04f0952",
      description: "15+ years of experience in talent acquisition and workforce solutions."
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "photo-1581091226825-a6a2a5aee158",
      description: "Expert in operational excellence and client relationship management."
    },
    {
      name: "Amit Patel",
      position: "Senior Recruitment Manager",
      image: "photo-1483058712412-4245e9b90334",
      description: "Specialized in executive search and senior-level placements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">StaffRex</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with a vision to revolutionize the staffing industry, StaffRex has been 
                connecting exceptional talent with outstanding opportunities for over 15 years.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that the right people in the right roles can transform businesses 
                and create lasting success stories. Our commitment to excellence and deep 
                understanding of market dynamics sets us apart in the industry.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="About StaffRex" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <Target className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To bridge the gap between exceptional talent and outstanding opportunities, 
                  creating value for both candidates and employers through innovative staffing 
                  solutions and personalized service excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  <Eye className="text-purple-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the most trusted and preferred staffing partner, recognized for our 
                  expertise, integrity, and commitment to delivering transformational workforce 
                  solutions that drive business success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape our relationships with clients and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <value.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced team of professionals is dedicated to delivering exceptional results for our clients and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "500+", label: "Companies Served" },
              { number: "10,000+", label: "Successful Placements" },
              { number: "25+", label: "Industry Sectors" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
