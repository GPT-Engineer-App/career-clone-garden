import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');

  const jobListings = [
    { id: 1, title: "Software Engineer", location: "New York, NY", department: "Technology" },
    { id: 2, title: "Data Analyst", location: "San Francisco, CA", department: "Analytics" },
    { id: 3, title: "UX Designer", location: "London, UK", department: "Design" },
    { id: 4, title: "Project Manager", location: "Chicago, IL", department: "Management" },
    { id: 5, title: "Marketing Specialist", location: "Toronto, Canada", department: "Marketing" },
  ];

  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (location === '' || job.location.includes(location)) &&
    (department === '' || job.department === department)
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Career Opportunities</h1>
        
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select
            value={location}
            onValueChange={setLocation}
            className="w-full sm:w-auto"
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="London">London</option>
            <option value="Chicago">Chicago</option>
            <option value="Toronto">Toronto</option>
          </Select>
          <Select
            value={department}
            onValueChange={setDepartment}
            className="w-full sm:w-auto"
          >
            <option value="">All Departments</option>
            <option value="Technology">Technology</option>
            <option value="Analytics">Analytics</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
            <option value="Marketing">Marketing</option>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.location}</p>
              <p className="text-gray-600 mb-4">{job.department}</p>
              <Button className="w-full">Apply Now</Button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Career;
