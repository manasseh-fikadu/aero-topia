import React from "react";
import AdminLayout from "../AdminLayout";

function AddServices() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "We create modern and responsive web designs that engage your audience and deliver results.",
      icon: (
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
              clipRule="evenodd"
            />
          </svg>
        </i>
      ),
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "We develop native and cross-platform mobile apps that bring your ideas to life on all devices.",
      icon: (
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
            <path
              fillRule="evenodd"
              d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
              clipRule="evenodd"
            />
          </svg>
        </i>
      ),
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description:
        "We build custom e-commerce solutions to help you sell products and services online.",
      icon: (
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </i>
      ),
    },
  ];
  return (
    <body className="bg-gray-900">
      <AdminLayout />
      <div className="px-6 pt-6 2xl:container ml-20">
        <div className="flex h-[100vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 ml-48">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center hover:text-purple-500 transtion transition duration-1000 ease-in-out hover:shadow-2xl hover:scale-105"
                >
                  <div className="mr-4 text-2xl text-gray-500 hover:text-purple-500">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default AddServices;
