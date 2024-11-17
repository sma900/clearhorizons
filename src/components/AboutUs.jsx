import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-white to-#ffff99 text-black py-12 px-6 md:px-16 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">About Clear Horizons</h2>
        <p className="mt-4 text-lg md:text-xl font-light">
          Illuminating paths and redefining possibilities for the visually impaired.
        </p>
      </div>

      {/* Founders Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      <div className="text-center">
  <div className="bg-black rounded-full w-32 h-32 mx-auto overflow-hidden flex items-center justify-center">
    <img
      src="https://via.placeholder.com/150"
      alt="Ibrahim"
      className="object-cover w-28 h-28 rounded-full"
    />
  </div>
  <h3 className="text-xl font-semibold mt-4">Syed Mohammad Ibrahim Ali</h3>
  <p className="text-sm font-light mt-2">
    Dedicated to creating opportunities for everyone.
  </p>
</div>

<div className="text-center">
  <div className="bg-black rounded-full w-32 h-32 mx-auto overflow-hidden flex items-center justify-center">
    <img
      src="https://via.placeholder.com/150"
      alt="Moaaz"
      className="object-cover w-28 h-28 rounded-full"
    />
  </div>
  <h3 className="text-xl font-semibold mt-4">Syed Moaaz Ahmed</h3>
  <p className="text-sm font-light mt-2">
    Focused on building a more inclusive future.
  </p>
</div>

      </div>

      {/* Motives Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center">Our Motive</h3>
        <p className="mt-6 text-lg leading-relaxed md:text-xl text-center md:text-left">
          Clear Horizons is more than an initiative—it’s a movement to bridge the gap between the visually 
          impaired and meaningful employment. We believe that every person, regardless of their abilities, 
          deserves the chance to shine in their chosen field. 
          By creating direct channels of communication between employers and blind individuals, we aim to 
          foster inclusivity, equality, and independence.
        </p>
      </div>

      {/* Future Propositions Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center">Future Propositions</h3>
        <p className="mt-6 text-lg leading-relaxed md:text-xl text-center md:text-left">
          Looking ahead, Clear Horizons envisions a comprehensive **Skill-Up Program**—a groundbreaking 
          initiative designed to elevate the employability of blind individuals. Through specialized training 
          sessions in cutting-edge technology, soft skills, and industry-focused certifications, we aim to 
          transform our candidates into pioneers in their fields. 
          Furthermore, we’re building a vibrant **community network** where collaboration, mentorship, 
          and growth opportunities flourish, ensuring that the impact of our mission grows exponentially.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg md:text-xl font-light">
          Together, let’s redefine possibilities and create a world where everyone thrives.
        </p>
        <button className="mt-6 bg-blue-700 hover:bg-purple-600 transition text-white py-2 px-6 rounded-full font-semibold text-lg">
          Join Our Mission
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
