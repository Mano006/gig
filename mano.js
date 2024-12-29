<html>
 <head>
  <title>
   Gig Worker Booking App
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet"/>
 </head>
 <body class="font-roboto bg-gray-100">
  <header class="bg-blue-600 text-white p-4">
   <div class="container mx-auto flex justify-between items-center">
    <h1 class="text-2xl font-bold">
     Gig Worker Booking
    </h1>
    <nav>
     <ul class="flex space-x-4">
      <li>
       <a class="hover:underline" href="#">
        Home
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Profile
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Bookings
       </a>
      </li>
      <li>
       <a class="hover:underline" href="#">
        Earnings
       </a>
      </li>
     </ul>
    </nav>
   </div>
  </header>
  <main class="container mx-auto p-4">
   <!-- Sign-up & Profile Creation -->
   <section class="bg-white p-6 rounded shadow-md mb-6">
    <h2 class="text-xl font-bold mb-4">
     Sign-up &amp; Profile Creation
    </h2>
    <form>
     <div class="mb-4">
      <label class="block text-gray-700" for="name">
       Name
      </label>
      <input class="w-full p-2 border border-gray-300 rounded" id="name" placeholder="Your Name" type="text"/>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700" for="contact">
       Contact Details
      </label>
      <input class="w-full p-2 border border-gray-300 rounded" id="contact" placeholder="Your Contact Details" type="text"/>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700" for="payment">
       Payment Information
      </label>
      <input class="w-full p-2 border border-gray-300 rounded" id="payment" placeholder="Your Payment Information" type="text"/>
     </div>
     <button class="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
      Sign Up
     </button>
    </form>
   </section>
   <!-- Booking Management -->
   <section class="bg-white p-6 rounded shadow-md mb-6">
    <h2 class="text-xl font-bold mb-4">
     Booking Management
    </h2>
    <div class="mb-4">
     <input class="w-full p-2 border border-gray-300 rounded" placeholder="Search gig workers by skills, availability, or ratings" type="text"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     <!-- Gig Worker Card -->
     <div class="bg-gray-100 p-4 rounded shadow-md">
      <img alt="Profile picture of a gig worker" class="w-24 h-24 rounded-full mx-auto mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/sVTkoOc5qrJHEd2bYfU8VuAcGGaC39uPq17UdTNHDDBAZheTA.jpg" width="100"/>
      <h3 class="text-lg font-bold text-center">
       John Doe
      </h3>
      <p class="text-center text-gray-600">
       Skill: Electrician
      </p>
      <p class="text-center text-gray-600">
       Rating: 4.5
      </p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full">
       Book Now
      </button>
     </div>
     <!-- Repeat for each gig worker -->
     <div class="bg-gray-100 p-4 rounded shadow-md">
      <img alt="Profile picture of a gig worker" class="w-24 h-24 rounded-full mx-auto mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/sVTkoOc5qrJHEd2bYfU8VuAcGGaC39uPq17UdTNHDDBAZheTA.jpg" width="100"/>
      <h3 class="text-lg font-bold text-center">
       Jane Smith
      </h3>
      <p class="text-center text-gray-600">
       Skill: Plumber
      </p>
      <p class="text-center text-gray-600">
       Rating: 4.7
      </p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full">
       Book Now
      </button>
     </div>
     <div class="bg-gray-100 p-4 rounded shadow-md">
      <img alt="Profile picture of a gig worker" class="w-24 h-24 rounded-full mx-auto mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/sVTkoOc5qrJHEd2bYfU8VuAcGGaC39uPq17UdTNHDDBAZheTA.jpg" width="100"/>
      <h3 class="text-lg font-bold text-center">
       Alice Johnson
      </h3>
      <p class="text-center text-gray-600">
       Skill: Gardener
      </p>
      <p class="text-center text-gray-600">
       Rating: 4.8
      </p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full">
       Book Now
      </button>
     </div>
    </div>
   </section>
   <!-- Earnings Transparency -->
   <section class="bg-white p-6 rounded shadow-md mb-6">
    <h2 class="text-xl font-bold mb-4">
     Earnings Transparency
    </h2>
    <div class="overflow-x-auto">
     <table class="min-w-full bg-white">
      <thead>
       <tr>
        <th class="py-2 px-4 border-b">
         Date
        </th>
        <th class="py-2 px-4 border-b">
         Service
        </th>
        <th class="py-2 px-4 border-b">
         Amount Paid
        </th>
        <th class="py-2 px-4 border-b">
         Transaction ID
        </th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td class="py-2 px-4 border-b">
         2023-01-01
        </td>
        <td class="py-2 px-4 border-b">
         Electrician Service
        </td>
        <td class="py-2 px-4 border-b">
         $100
        </td>
        <td class="py-2 px-4 border-b">
         TX1234567890
        </td>
       </tr>
       <tr>
        <td class="py-2 px-4 border-b">
         2023-02-15
        </td>
        <td class="py-2 px-4 border-b">
         Plumbing Service
        </td>
        <td class="py-2 px-4 border-b">
         $150
        </td>
        <td class="py-2 px-4 border-b">
         TX0987654321
        </td>
       </tr>
       <tr>
        <td class="py-2 px-4 border-b">
         2023-03-10
        </td>
        <td class="py-2 px-4 border-b">
         Gardening Service
        </td>
        <td class="py-2 px-4 border-b">
         $80
        </td>
        <td class="py-2 px-4 border-b">
         TX1122334455
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </section>
   <!-- Push Notifications -->
   <section class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl font-bold mb-4">
     Push Notifications
    </h2>
    <div class="space-y-4">
     <div class="bg-gray-100 p-4 rounded shadow-md">
      <p class="text-gray-700">
       Your booking with John Doe has been confirmed.
      </p>
     </div>
     <div class="bg-gray-100 p-4 rounded shadow-md">
      <p class="text-gray-700">
       Please provide feedback for your recent service with Jane Smith.
      </p>
     </div>
     <div class="bg-gray-100 p-4 rounded shadow-md">
      <p class="text-gray-700">
       New gig worker Alice Johnson is now available for booking.
      </p>
     </div>
    </div>
   </section>
  </main>
  <footer class="bg-blue-600 text-white p-4 mt-6">
   <div class="container mx-auto text-center">
    <p>
     © 2023 Gig Worker Booking. All rights reserved.
    </p>
   </div>
  </footer>
 </body>
</html>
Message Blackbox or Upload Image

Upload Files