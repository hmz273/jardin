"use client"
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

import jardin from "./@jardin/page";
import sirayane from "./@sirayane/page";
import tempX from "./@tempX/page";
import tempY from "./@tempY/page";

import { siteinfo } from "@/constants"
import { useState } from "react";

const myFont = localFont({ src: "../../public/Branch/Branch.otf"})
const quicksand = Quicksand({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Define available templates
  const templates = {
    jardin: jardin,
    sirayane: sirayane,
    tempX: tempX,
    tempY: tempY,
    // Add more templates as needed
  };

  // State to store the selected template
  const [selectedTemplate, setSelectedTemplate] = useState(Object.keys(templates)[0]);

  // Function to handle template change
  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  // Retrieve the component for the selected template
  const SelectedTemplateComponent = templates[selectedTemplate];

  return (
    <html lang="en">
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

      </head>
      <body className={myFont.className}>
      <select className="ml-96" value={selectedTemplate} onChange={handleTemplateChange}>
          {Object.keys(templates).map((templateName) => (
            <option key={templateName} value={templateName}>{templateName}</option>
          ))}
        </select>

      {/* Render the selected template component */}
      {SelectedTemplateComponent && <SelectedTemplateComponent />}
        {/* Render children if no template component is found */}
        {!SelectedTemplateComponent && children}

      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/datepicker.js"></script>
      <script src="../path/to/flatpickr.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
      
      </body>
    </html>
  );
}
