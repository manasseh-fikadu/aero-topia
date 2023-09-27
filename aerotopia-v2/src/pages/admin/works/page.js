import React, { useState } from "react";
import AdminLayout from "../AdminLayout";

function AddWorks() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [project, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteProjectId, setDeleteProjectId] = useState(null);

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
      id: 4,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id commodo mauris.",
      image:
        "https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const projectIndex = projects.findIndex(
    (project) => project.id === selectedProject
  );

  const handleEditButtonClick = () => {
    setTitle(selectedProject.title);
    setDescription(selectedProject.description);
    setImage(selectedProject.image);
    setIsEditing(true);
  };

  const handleDeleteButtonClick = () => {
    setDeleteProjectId(selectedProject.id);
    setIsDeleteModalOpen(true);
  };

  console.log("selectedProject", selectedProject);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      const updatedProjects = projects.map((project) => {
        if (project.id === selectedProject.id) {
          return {
            ...project,
            title,
            description,
            image,
          };
        } else {
          return project;
        }
      });
      setProjects(updatedProjects);
    } else {
      // add new project
      const newProject = {
        id: Math.random(),
        title,
        description,
        image,
      };
      setProjects([...projects, newProject]);
    }
    setIsEditing(false);
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <body className="bg-gray-900">
      <AdminLayout />
      <div className="px-6 pt-6 2xl:container ml-20">
        <div className="flex h-[100vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 ml-48">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-xl overflow-hidden mb-6 hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl hover:text-purple-600"
                  onMouseEnter={() => setSelectedProject(project.id)}
                  onMouseLeave={() => setSelectedProject(null)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-1000 ease-out hover:opacity-90 hover:shadow-2xl"
                  />
                  <div className="p-4">
                    {selectedProject === project.id && (
                      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => {
                            setIsModalOpen(true);
                            handleEditButtonClick();
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            setIsModalOpen(true);
                            handleDeleteButtonClick();
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedProject}</h2>
              {isEditing && (
                <form onSubmit={handleFormSubmit}>
                  <label htmlFor="title" className="block font-bold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border-gray-400 border rounded py-2 px-3 mb-3 w-full"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  <label htmlFor="description" className="block font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="border-gray-400 border rounded py-2 px-3 mb-3 w-full"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label htmlFor="image" className="block font-bold mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    className="border-gray-400 border rounded py-2 px-3 mb-3 w-full"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setIsEditing(false);
                      setIsModalOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                </form>
              )}
              {isDeleteModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
                    <p>Are you sure you want to delete this project?</p>
                    <div className="flex justify-end mt-6">
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => {
                          setIsDeleteModalOpen(false);
                          setIsModalOpen(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          const updatedProjects = projects.filter(
                            (project) => project.id !== deleteProjectId
                          );
                          setProjects(updatedProjects);
                          setIsDeleteModalOpen(false);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </body>
  );
}

export default AddWorks;
