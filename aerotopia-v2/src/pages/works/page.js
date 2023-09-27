import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 1,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-7">Project Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden mb-6 hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl hover:text-purple-600"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-1000 ease-out hover:opacity-90 hover:shadow-2xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <PopupWidget />
    </div>
  );
}
