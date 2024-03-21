import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage, deletePage } from "../redux/actions/pageAction";
import Popup from "./Popup";

const Home = () => {
  const { authStore } = useSelector((state1) => state1);
  const { user } = authStore;
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredPages = pages.filter((page) =>
  page.name.toLowerCase().includes(searchQuery.toLowerCase())
);

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
        <h2 className="text-2xl font-bold mb-4 flex">
          <svg
            class="w-10 h-10 text-[#7CFC00]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="240"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z"
              clip-rule="evenodd"
              fill="currentColor"
            />
          </svg>
          Land Web
        </h2>
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
          <div className="mb-4 flex justify-between">
            <input
              type="text"
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
              {filteredPages && filteredPages.length > 0 ? (
                  filteredPages.map((page) =>  (
                    <Link to={`/editor/${page._id}`} className="">
                      <div
                        key={page._id}
                        className="bg-gray-100 p-4 rounded-md hover:shadow-2xl transition duration-200 ease-in-out"
                      >
                        <h6 className="text-lg text-center font-semibold mb-2">
                          {page.name}
                        </h6>
                        {/* <img className="rounded-md border-lime-600 border-4 border-solid my-2.5" src={cardimg} alt="" /> */}
                        <div className="text-center text-lg text-center font-semibold mb-2">
                        <svg
                          class="w-100 max-h-28 text-indigo-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="240"
                          height="240"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z"
                            clip-rule="evenodd"
                            fill="currentColor"
                          />
                        </svg>
                        </div>
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
                        <Link to={`/host/${page._id}`}>
                          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full hidden">
                            Host
                          </button>
                        </Link>
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
