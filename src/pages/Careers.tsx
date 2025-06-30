
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Search, 
  Filter,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Heart,
  Shield,
  Coffee
} from "lucide-react";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const jobCategories = ["All", "Technology", "Sales", "Operations", "HR", "Finance"];

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹12-18 LPA",
      description: "Join our technology team to build innovative staffing solutions and help shape the future of recruitment.",
      requirements: ["React, Node.js", "AWS/Cloud", "3+ years experience"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Business Development Manager",
      department: "Sales",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹10-15 LPA",
      description: "Drive business growth by building relationships with clients and identifying new opportunities in the staffing industry.",
      requirements: ["B2B Sales", "Relationship Building", "Staffing Experience"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Talent Acquisition Specialist",
      department: "HR",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description: "Source, screen, and recruit top talent across various industries and help build amazing teams.",
      requirements: ["Recruitment", "Interviewing", "ATS Knowledge"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Operations Manager",
      department: "Operations",
      location: "Pune",
      type: "Full-time",
      experience: "5-7 years",
      salary: "₹15-20 LPA",
      description: "Lead operational excellence initiatives and ensure smooth delivery of staffing services to clients.",
      requirements: ["Operations Management", "Process Improvement", "Team Leadership"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Financial Analyst",
      department: "Finance",
      location: "Chennai",
      type: "Full-time",
      experience: "2-3 years",
      salary: "₹8-12 LPA",
      description: "Analyze financial data, prepare reports, and support strategic decision-making processes.",
      requirements: ["Financial Analysis", "Excel/SQL", "CA/CFA preferred"],
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹7-11 LPA",
      description: "Develop and execute marketing strategies to enhance brand visibility and generate leads.",
      requirements: ["Digital Marketing", "Content Creation", "Analytics"],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths, mentorship programs, and skill development opportunities."
    },
    {
      icon: Shield,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous leave policies."
    },
    {
      icon: Coffee,
      title: "Great Workplace",
      description: "Modern office spaces, team events, and a collaborative work environment."
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.department === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of a dynamic team that's revolutionizing the staffing industry. 
              Build your career while helping others build theirs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">With Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe in investing in our people and creating an environment where everyone can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <benefit.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search & Filters */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore exciting career opportunities and find your next role with us.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search jobs by title or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {jobCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  <Filter className="mr-2" size={16} />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <Badge variant="secondary" className="mb-2">{job.department}</Badge>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      {job.posted}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-blue-600" />
                      <span className="text-gray-700">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-blue-600" />
                      <span className="text-gray-700">{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap size={16} className="text-blue-600" />
                      <span className="text-gray-700">{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign size={16} className="text-blue-600" />
                      <span className="text-gray-700">{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                    <Briefcase className="mr-2" size={16} />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No jobs found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Application <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined application process ensures a smooth experience from application to onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", description: "Submit your application and resume through our career portal." },
              { step: "02", title: "Initial Screening", description: "Our HR team will review your application and conduct an initial screening." },
              { step: "03", title: "Interview Process", description: "Multiple rounds of interviews with hiring managers and team members." },
              { step: "04", title: "Welcome Aboard", description: "Complete onboarding and join our amazing team!" }
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
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
            <Users className="mr-2" size={20} />
            Submit General Application
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
