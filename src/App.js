import React from "react";
import "./index.css";
import { siteData } from "./data";

export default function App() {
  return (
    <div className="font-sans p-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{siteData.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{siteData.tagline}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>{siteData.about}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        {siteData.projects.map((proj, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} className="text-blue-500" target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>📬 {siteData.contactEmail}</p>
      </section>
    </div>
  );
}
