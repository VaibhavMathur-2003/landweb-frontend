import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage, deletePage } from "./redux/actions/pageAction";
import Popup from "./Popup";
import { useLogout } from "./Context/useLogout";
import { useAuthContext } from "./Context/useAuthContext";

const Home = () => {
  const user = useAuthContext();
  const {logout} = useLogout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  const handleCreatePage = ({ name, description }) => {
    createPage(name, user)(dispatch);
    setIsModalOpen(false);
  };

  const handleDeletePage = (pageId) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      dispatch(deletePage(pageId, user));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-64 bg-gradient-to-b from-blue-700 to-indigo-900 text-white px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Land Web</h2>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:text-white">
              Create your website in minutes.
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/signin" className="hover:text-white">
            <button onClick={()=>logout()} className="hover:text-white">
              Logout
            </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4 bg-gray-100 overflow-x-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <button
              className="flex items-center py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-2xl mr-2">+</span>
              Create Page
            </button>
          </div>
          {/* Pages Section */}
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <div className="p-8">
              <h5 className="text-3xl font-bold text-blue-700 mb-4">Web Pages</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pages && pages.length > 0 ? (
                  pages.map((page) => (
                    <div key={page._id} className="bg-gray-100 p-4 rounded-md">
                      <h6 className="text-lg font-semibold mb-2">{page.name}</h6>
                      <p className="text-gray-700 mb-4">{page.slug}</p>
                      <div className="flex justify-between">
                        <Link
                          to={`/editor/${page._id}`}
                          className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                          Edit
                        </Link>
                        <button
                          className="text-red-500 hover:text-red-700 font-medium"
                          onClick={() => handleDeletePage(page._id)}
                        >
                          Delete
                        </button>
                      </div>
                      <button className="text-center bg-blue-600 text-white rounded-lg p-1 mt-3 w-full">
                      React Code
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No Page</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
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
