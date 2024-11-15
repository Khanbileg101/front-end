import Image from "next/image";
import React , { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
        <div className="flex justify-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx08qXc7em3bErCvg5mVkd6iKkU0PVoDcDw&s" 
            alt="Khanbileg's Profile Picture"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-sm"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-6 text-gray-600">Khanbileg's CV</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Contact</h2>
          <p className="text-gray-600">Email: khanbileg7@example.com</p>
          <p className="text-gray-600">Utas: 89420515</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Education</h2>
          <p className="text-gray-600">Current: Student</p>
          <p className="text-gray-600">School: Nest IT school</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Programming Languages: C++, java, javascript</li>
            <li>Web Development: HTML, CSS, React, Next.js</li>
            <li>Version Control: Git</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Experience</h2>
          <p className="text-gray-600">Responsibilities: baihgue</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Projects</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li><b>Project Name:</b> 9-r angin group project: automatic dog feeding machine</li>
          </ul>
        </section>
      </div>
    </div>
  );
};