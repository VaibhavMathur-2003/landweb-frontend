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

      <div
        id="sidebar-mini"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-20 bg-black border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <div className="flex flex-col justify-between items-center gap-y-2 py-4 h-full">
          <div className="mb-4 mx-auto">
            <svg
              className="w-50 max-h-28 mx-auto text-indigo-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z"
                clipRule="evenodd"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between">
            <div className="hs-tooltip [--placement:right] inline-block">
              <button
                type="button"
                onClick={() => logout()}
                className="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="50"
                  height="50"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <circle
                      cx="45"
                      cy="45"
                      r="45"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(230,62,50)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                    />
                    <path
                      d="M 70.958 46.112 c 0.018 -0.027 0.029 -0.057 0.046 -0.084 c 0.051 -0.084 0.1 -0.168 0.138 -0.259 c 0.016 -0.038 0.023 -0.079 0.037 -0.118 c 0.029 -0.084 0.06 -0.166 0.077 -0.255 c 0.026 -0.129 0.04 -0.262 0.04 -0.395 s -0.014 -0.266 -0.04 -0.395 c -0.018 -0.088 -0.049 -0.171 -0.077 -0.255 c -0.014 -0.039 -0.021 -0.08 -0.037 -0.118 c -0.038 -0.091 -0.088 -0.176 -0.138 -0.259 c -0.016 -0.027 -0.028 -0.058 -0.046 -0.084 c -0.073 -0.109 -0.156 -0.211 -0.249 -0.303 L 60.605 33.482 c -0.781 -0.781 -2.047 -0.781 -2.828 0 c -0.781 0.781 -0.781 2.047 0 2.828 l 6.69 6.69 H 39.863 c -1.104 0 -2 0.896 -2 2 s 0.896 2 2 2 h 24.604 l -6.69 6.69 c -0.781 0.781 -0.781 2.047 0 2.828 c 0.391 0.391 0.902 0.586 1.414 0.586 s 1.023 -0.195 1.414 -0.586 l 10.103 -10.103 C 70.801 46.323 70.884 46.221 70.958 46.112 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 49.887 55.336 c -1.104 0 -2 0.896 -2 2 v 6.602 H 26.704 V 26.062 h 21.183 v 6.602 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 v -8.602 c 0 -1.104 -0.896 -2 -2 -2 H 24.704 c -1.104 0 -2 0.896 -2 2 v 41.875 c 0 1.104 0.896 2 2 2 h 25.183 c 1.104 0 2 -0.896 2 -2 v -8.602 C 51.887 56.231 50.991 55.336 49.887 55.336 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(255,255,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap"
                  role="tooltip"
                >
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 min-h-screen overflow-x-auto">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
          src="https://videos.pexels.com/video-files/2408284/2408284-hd_1280_720_24fps.mp4"
        />
      </div>
      <div className="relative z-10 p-4 text-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-full md:w-1/2 bg-gray-800 bg-opacity-70 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="flex items-center py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-2xl mr-2">+</span>
              Create Page
            </button>
          </div>

          <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
            <div className="p-8">
              <h5 className="text-3xl font-bold text-green-500 mb-8">
                Web Pages
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPages && filteredPages.length > 0 ? (
                  filteredPages.map((page) => (
                    <div
                      key={page._id}
                      className="bg-gray-600 hover:shadow-white border border-blue-200 border-solid bg-opacity-90 p-6 rounded-lg hover:shadow-lg transition duration-200 ease-in-out"
                    >
                      <Link to={`/editor/${page._id}`}>
                        <h6 className="text-lg text-center font-semibold mb-4 text-white">
                          {page.name}
                        </h6>
                        <div className="text-center text-indigo-400 mb-4">
                          <svg
                            className="w-20 h-20 mx-auto"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z"
                              clipRule="evenodd"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </Link>

                      <div className="flex justify-between text-blue-400 hover:text-blue-500 font-medium">
                        <Link
                          to={`/editor/${page._id}`}
                          className="hover:text-blue-500 transition duration-300"
                        >
                          Edit
                        </Link>
                        <button
                          className="text-red-400 hover:text-red-500 transition duration-300"
                          onClick={() => handleDeletePage(page._id)}
                        >
                          Delete
                        </button>
                      </div>
                      <Link to={`/host/${page._id}`}>
                        <button className="hidden mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full">
                          Host
                        </button>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">No Pages Found</p>
                )}
              </div>
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
