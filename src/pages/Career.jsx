<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Opportunities</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="min-h-screen bg-gray-100">
    <div class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <h1 class="text-4xl font-bold text-center mb-10">Career Opportunities</h1>
            
            <div class="mb-8 flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="Search jobs..." class="flex-grow p-2 border rounded">
                <select class="w-full sm:w-auto p-2 border rounded">
                    <option value="">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="London">London</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Toronto">Toronto</option>
                </select>
                <select class="w-full sm:w-auto p-2 border rounded">
                    <option value="">All Departments</option>
                    <option value="Technology">Technology</option>
                    <option value="Analytics">Analytics</option>
                    <option value="Design">Design</option>
                    <option value="Management">Management</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div class="bg-white shadow-md rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-2">Software Engineer</h2>
                    <p class="text-gray-600 mb-2">New York, NY</p>
                    <p class="text-gray-600 mb-4">Technology</p>
                    <button class="w-full bg-blue-500 text-white p-2 rounded">Apply Now</button>
                </div>
                <div class="bg-white shadow-md rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-2">Data Analyst</h2>
                    <p class="text-gray-600 mb-2">San Francisco, CA</p>
                    <p class="text-gray-600 mb-4">Analytics</p>
                    <button class="w-full bg-blue-500 text-white p-2 rounded">Apply Now</button>
                </div>
                <div class="bg-white shadow-md rounded-lg p-6">
                    <h2 class="text-xl font-semibold mb-2">UX Designer</h2>
                    <p class="text-gray-600 mb-2">London, UK</p>
                    <p class="text-gray-600 mb-4">Design</p>
                    <button class="w-full bg-blue-500 text-white p-2 rounded">Apply Now</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
