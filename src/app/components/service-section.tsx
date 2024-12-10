import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-pink-50 py-12">
      {/* Container for the content, centers content and limits width */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          On s’occupe de <span className="text-blue-500">tout</span>
        </h2>
        {/* Section Subtitle */}
        <p className="text-gray-500 text-sm md:text-base mb-10">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Service 1 */}
          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.41 1.5 1.297 1.5 2.304v4.37a2.625 2.625 0 01-2.625 2.625h-13.5A2.625 2.625 0 013 15.185v-4.37c0-1.007.616-1.894 1.5-2.304m15.75 0a2.625 2.625 0 00-1.5-4.848m1.5 4.848h-18m3.75 0a2.625 2.625 0 011.5-4.848m0 0a2.625 2.625 0 013 0m-3 0h3m6 10.5h.008v.008H12v-.008zm-3.75 0h.008v.008H8.25v-.008zm7.5 0h.008v.008h-.008v-.008z"
                />
              </svg>
            }
            title="Livraison & Reprise"
            description="Selon vos besoins"
          />

          {/* Service 2 */}
          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 20.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V10.5m-15 9.75h15m-15 0H3m18 0h-1.5M10.5 7.5l1.029-3.086a.75.75 0 011.422 0L14 7.5m-3.5 0h3.878c.346 0 .657.224.743.556l1.304 4.565a.361.361 0 01-.35.454H8.925a.361.361 0 01-.35-.454l1.304-4.565a.75.75 0 01.743-.556H10.5z"
                />
              </svg>
            }
            title="Nettoyage"
            description="Selon vos besoins"
          />

          {/* Service 3 */}
          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h10.5m-10.5 3h7.5m-7.5 3h10.5m-10.5 3h7.5M3 6.75h.008v.008H3V6.75zm0 3h.008v.008H3V9.75zm0 3h.008v.008H3v-.008zm0 3h.008v.008H3v-.008z"
                />
              </svg>
            }
            title="Commande Illimitée"
            description="Tout est possible"
          />

          {/* Service 4 */}
          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a3 3 0 106 0m-6 0h6m-6 0H4.5m9 0h5.25M7.5 7.5h9m-9 0H6.272c-.3 0-.546.21-.61.504l-.832 3.745a.698.698 0 00.21.668c.12.114.28.183.448.183H6.75m10.5-5.1h1.728c.3 0 .546.21.61.504l.832 3.745a.698.698 0 01-.21.668.686.686 0 01-.448.183H17.25m-10.5 0h10.5"
                />
              </svg>
            }
            title="Transport & Enlèvement"
            description="On s’occupe de tout."
          />
        </div>
      </div>
    </section>
  );
};

// Reusable ServiceCard Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    {icon}
    <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500 mt-2">{description}</p>
  </div>
);

export default ServicesSection;
