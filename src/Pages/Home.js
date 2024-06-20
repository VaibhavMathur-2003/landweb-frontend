import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage, deletePage } from "../redux/actions/pageAction";
import Popup from "./Popup";

const templates = [
  {
    id: ':2z',
    title: 'Contact Information',
    imgSrc: 'https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400_1.png',
    style: 'Simple',
  },
  {
    id: ':30',
    title: 'RSVP',
    imgSrc: 'https://ssl.gstatic.com/docs/templates/thumbnails/1kkUjv3G7-PgOEUPMTiKvKResxGxS7MTsy5Amj4b0Trw_400_1.png',
    style: 'Lively',
  },
  {
    id: ':31',
    title: 'Party Invite',
    imgSrc: 'https://ssl.gstatic.com/docs/templates/thumbnails/1m0UYQl1LSGxl3sGsh9_xjim4hUYQ8BO_zbvcFXv1Qug_400_1.png',
    style: 'Lively',
  },
  {
    id: ':32',
    title: 'T-Shirt Sign Up',
    imgSrc: 'https://ssl.gstatic.com/docs/templates/thumbnails/134dbGrMBrHFEfdPk5UpsZWEBZb7xJrOKRdESE58Fvcg_400_1.png',
    style: 'Plum',
  },
  {
    id: ':33',
    title: 'Event Registration',
    imgSrc: 'https://ssl.gstatic.com/docs/templates/thumbnails/1pM0fD5FWTXCGw4h0g1WSP8Nj3mS56l1EaCZAec-p2uc_400_1.png',
    style: 'Lively',
  },
];


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
    <div className="bg-gray-900 text-white p-0 min-h-screen">
      <nav className="bg-gray-900">
        <div className="mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="my-auto mx-auto">
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
            </div>
            <div className="flex flex-2 w-full max-[700px]:hidden justify-center">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                    placeholder="Search"
                    type="search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
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
      </nav>
      <div className="bg-gray-700 py-3 px-3">
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Templates</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
          {templates && templates.length > 0 ? (

            templates.map((page) => (
              <div key={page.id} className="p-0 ">
                <div className="relative mb-0">
                  <div className=""></div>
                  <img
                    src={page.imgSrc}
                    alt={page.title}
                    className="w-full h-40 object-cover "
                  />
                </div>
                <h3 className="text-white text-center my-3 bg-gray-700">
                  {page.title}
                </h3>
              </div>
            ))): <div></div>}
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg py-4 mx-auto">
        <div className="mb-8 flex justify-between mx-5">
          <h2 className="text-2xl font-semibold">Your Pages</h2>
          <button
            className="flex items-center py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="text-2xl mr-2">+</span>
            New Page
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-5">
          {filteredPages && filteredPages.length > 0 ? (
            filteredPages.map((page) => (
              <div key={page.id} className="p-0 ">
                <Link to={`/editor/${page._id}`}>
                  <div className="relative mb-0">
                    <div className=""></div>
                    <video
                      preload="auto"
                      playsInline
                      loop
                      muted
                      autoPlay
                      src="https://videos.pexels.com/video-files/856885/856885-hd_1920_1080_30fps.mp4"
                      alt={page.name}
                      className="w-full h-40 object-cover "
                    />
                  </div>
                </Link>

                <div className="flex justify-between">
                  <Link to={`/editor/${page._id}`}>
                    <h3 className="text-white text-center my-3 bg-gray-900">
                      {page.name}
                    </h3>
                  </Link>
                  <h3
                    onClick={() => handleDeletePage(page._id)}
                    className="text-red-500 text-center my-3 bg-gray-900 cursor-pointer"
                  >
                    Delete
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div>No Page</div>
          )}
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
