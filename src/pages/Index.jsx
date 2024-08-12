import { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Accenture</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Jobs</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5" />
            <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white p-4">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Jobs</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl mb-8">Discover exciting career opportunities at Accenture</p>
          <Button className="bg-white text-purple-700 hover:bg-gray-100">
            Explore Jobs
          </Button>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((job) => (
              <div key={job} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                <p className="text-gray-600 mb-4">New York, NY</p>
                <Button className="w-full">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join Accenture?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Work on cutting-edge projects and technologies</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p>Continuous learning and career development opportunities</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p>Make a difference in various industries worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Accenture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
