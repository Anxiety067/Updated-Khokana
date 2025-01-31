import React from "react";

const About = () => {
  return (
    <div className="w-full">
      {/* Partnership Section */}
      <div className="w-full bg-white mt-16">
        <div className="max-w-4xl mx-auto py-12 px-6 text-center space-y-12">
          <div>
            <h2 className="text-xl font-medium mb-8">
              This mapping has been produced in the partnership of
            </h2>
            <div className="flex justify-center items-center gap-8">
              <a 
                href="https://cemsoj.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/cemsoj.jpg" alt="CEMSOJ logo" className="h-20" />
              </a>
              <a 
                href="https://aipnee.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/aipnee.jpg" alt="APINEE logo" className="h-20" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-8">In Collaboration with</h2>
            <div className="flex justify-center items-center gap-8">
              <a 
                href="https://www.savenepavalley.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/savenepavalley.jpg"
                  alt="savenepavalley logo"
                  className="h-16"
                />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-8">With Support From</h2>
            <div className="flex justify-center items-center gap-8">
              <a 
                href="https://rightsandresources.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Right+Resources.jpg"
                  alt="Right+Resources logo"
                  className="h-16"
                />
              </a>
              <a 
                href="https://www.manushyafoundation.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Manushya Foundation.jpg"
                  alt="Manushya Foundation logo"
                  className="h-16"
                />
              </a>
              <a 
                href="https://www.defenderscollaborative.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Environmental Defenders Colaborative.jpg"
                  alt="Environmental Defenders Collaborative logo"
                  className="h-16"
                />
              </a>
            </div>
          </div>

          <p className="text-gray-700 mt-12 text-center max-w-3xl mx-auto">
            If you have any comments on the mapping, you can send them to us at cemsoj@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;