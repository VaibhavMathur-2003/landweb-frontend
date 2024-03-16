import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage, deletePage } from "./redux/actions/pageAction";
import Popup from "./Popup";

const Home = () => {
  const { authStore } = useSelector((state1) => state1);
  const { user } = authStore;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreatePage = ({ name, description }) => {
    createPage(name, user)(dispatch);
    setIsModalOpen(false);
  };

  const handleDeletePage = (pageId) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      dispatch(deletePage(pageId, user));
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    // Perform any additional logout actions
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gradient-to-b from-blue-700 to-indigo-900 text-white px-4 py-6 rounded-sm">
        <h2 className="text-2xl font-bold mb-4">Land Web</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Create your website in minutes
            </Link>
          </li>
          <li>
            <button
              onClick={() => logout()}
              className="block text-white hover:text-red-300 transition duration-300 ease-in-out font-semibold border-solid border-2 border-red-500 rounded-md p-1.5 absolute bottom-10 bg-red-800"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100 overflow-x-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            {/* Button to open modal */}
            <button
              className="flex items-center py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-2xl mr-2">+</span>
              Create Page
            </button>
          </div>

          {/* Pages Section */}
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <div className="p-8">
              <h5 className="text-3xl font-bold text-blue-700 mb-4">
                Web Pages
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pages && pages.length > 0 ? (
                  pages.map((page) => (
                    <Link
                    to={`/editor/${page._id}`}
                    className=""
                  >
                    <div
                      key={page._id}
                      className="bg-gray-100 p-4 rounded-md hover:shadow-2xl transition duration-200 ease-in-out"
                    >
                      <h6 className="text-lg font-semibold mb-2">
                        {page.name}
                      </h6>
                      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="45" y="10" width="10" height="80" fill="#FF5733"/>
  <rect x="10" y="45" width="80" height="10" fill="#33FF57"/>
  <rect x="35" y="10" width="10" height="40" fill="#3388FF"/>
  <rect x="55" y="50" width="10" height="40" fill="#FFC300"/>
</svg>

                      {/* <p className="text-gray-700 mb-4">{page.slug}</p> */}
                      <div className="flex justify-between text-blue-500 hover:text-blue-700 font-medium">
                        {/* Edit link */}
                       
                          Edit
                        
                        {/* Delete button */}
                        <button
                          className="text-red-500 hover:text-red-700 font-medium"
                          onClick={() => handleDeletePage(page._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500">No Page</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <Popup
          onSave={handleCreatePage}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
