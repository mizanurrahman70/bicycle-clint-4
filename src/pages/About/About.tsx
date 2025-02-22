import React from 'react';
import { Bike, Users, Trophy, Wrench, Truck, HeartHandshake } from 'lucide-react';

const stats = [
  {
    icon: <Bike size={24} />,
    value: "10,000+",
    label: "Bikes Sold"
  },
  {
    icon: <Users size={24} />,
    value: "50,000+",
    label: "Happy Customers"
  },
  {
    icon: <Trophy size={24} />,
    value: "15+",
    label: "Awards Won"
  }
];

const features = [
  {
    icon: <Bike className="text-indigo-600" size={24} />,
    title: "Premium Selection",
    description: "Curated collection of top-quality bikes from renowned brands worldwide"
  },
  {
    icon: <Wrench className="text-indigo-600" size={24} />,
    title: "Expert Service",
    description: "Professional maintenance and customization by certified technicians"
  },
  {
    icon: <Truck className="text-indigo-600" size={24} />,
    title: "Fast Delivery",
    description: "Quick and secure shipping with real-time tracking"
  },
  {
    icon: <HeartHandshake className="text-indigo-600" size={24} />,
    title: "Customer First",
    description: "Dedicated support team committed to your satisfaction"
  }
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=3540&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Passionate about cycling since 1995, delivering quality bikes and exceptional service to riders worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're dedicated to making cycling accessible to everyone by providing high-quality bikes, expert guidance, and outstanding service. Our passion for cycling drives us to help every rider find their perfect match and enjoy the freedom of two wheels.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who drive our mission forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop"
              },
              {
                name: "Michael Chen",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop"
              },
              {
                name: "Emily Rodriguez",
                role: "Lead Designer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3387&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;