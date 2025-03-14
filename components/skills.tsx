const Skills = () => {
  return (
    <div className="p-8 font-serif text-wrap">
      {/* Skills & Experience Section */}
      <div className="mt-10">

      <h2 className="text-5xl custom-font text-amber-500 mb-8 text-center ">Skills</h2>

        <div className="space-y-4 text-gray-300 text-lg items-center text-center">
          <p><span className="text-amber-400 font-semibold">Languages:</span> C, C++, Java, Rust, Python, JavaScript, TypeScript, React, HTML5, CSS3</p>
          <p><span className="text-amber-400 font-semibold">Frameworks:</span> Next.js, Node.js, Express.js, Tailwind</p>
          <p><span className="text-amber-400 font-semibold">Developer Tools:</span> Git, VS Code, Bash, Vercel, Render, Neovim</p>
          <p><span className="text-amber-400 font-semibold">Databases:</span> MongoDB, MySQL, PostgreSQL, Prisma</p>
          <p><span className="text-amber-400 font-semibold">Soft Skills:</span> Problem-Solving, Analytical Thinking, Team Collaboration</p>
        </div>


        {/* Experience Section */}
        <h2 className="text-5xl custom-font text-amber-500 mb-8 mt-1 text-center">Experience</h2>

        <div className="space-y-6 items-center text-center">
          {/* Mined Hackathon */}
          <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700">
            <h4 className="text-2xl text-amber-400 font-semibold">🏆 Mined Hackathon (2025)</h4>
            <p className="text-gray-300 mt-2">
              Led a team of <span className="text-yellow-400 font-medium">4 developers</span> to build
              <span className="text-yellow-400 font-medium"> SmartRoute Optimizer</span>, an AI-powered logistics tool that optimizes delivery routes 
              using <span className="text-yellow-400 font-medium">K-Means clustering</span>.  
            </p>
            <p className="text-gray-300 mt-2">
              - Implemented a <span className="text-yellow-400 font-medium">Flask</span>-based backend to handle real-time route calculations.  
              - Used <span className="text-yellow-400 font-medium">Google Maps API</span> for distance and time estimations.  
              - Achieved a <span className="text-yellow-400 font-medium">15% reduction</span> in delivery times compared to traditional methods.  
            </p>
          </div>

          {/* Techvaganza Web Developer */}
          <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700">
            <h4 className="text-2xl text-amber-400 font-semibold">💻 Web Developer - Techvaganza, NIT Srinagar (May 2024 – Oct 2024)</h4>
            <p className="text-gray-300 mt-2">
              Designed and deployed a <span className="text-yellow-400 font-medium">Tkinter-based registration system</span> 
              and a <span className="text-yellow-400 font-medium">QR code scanner</span> to streamline event check-ins for 
              <span className="text-yellow-400 font-medium"> 1000+ attendees</span>.
            </p>
            <p className="text-gray-300 mt-2">
              - Engineered a secure database system using <span className="text-yellow-400 font-medium">PostgreSQL</span>.  
              - Built an intuitive UI with <span className="text-yellow-400 font-medium">Tkinter</span> for seamless user interactions.  
              - Integrated automated entry validation, reducing manual verification time by <span className="text-yellow-400 font-medium">40%</span>.  
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Skills;
