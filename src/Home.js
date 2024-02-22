import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "./redux/actions/pageAction";

const Home = () => {
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");

  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;

  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    createPage(name)(dispatch);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-cyan-400 text-black p-4">
        <h2 className="text-2xl font-bold mb-4">Land Web</h2>
        <ul className="text-black">
          <li className="mb-2">
            <Link to="/" className="hover:underline">
            Create your website in minutes. 
            </Link>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg mb-8 shadow-lg">
          <h5 className="text-3xl font-bold mb-4 text-white">Create Page</h5>
          <div className="flex items-center">
            <label htmlFor="name" className="mr-4 w-24  font-semibold">
              Name
            </label>
            <input
              type="text"
              className={`flex-1 py-2 px-4 rounded-md ${
                isValid ? "border border-gray-300 focus:outline-none focus:border-indigo-500" : "border border-red-500 focus:outline-none focus:border-red-500"
              }`}
              id="name"
              name="name"
              placeholder="Name of Page"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isValid && (
              <p className="text-red-500 text-sm ml-4">Please provide a valid name.</p>
            )}
          </div>
          <div className="flex mt-3 items-center">
            <label htmlFor="name" className="mr-4 w-24  font-semibold">
              Description
            </label>
            <input
              type="text"
              className={`flex-1 py-2 px-4 rounded-md ${
                isValid ? "border border-gray-300 focus:outline-none focus:border-indigo-500" : "border border-red-500 focus:outline-none focus:border-red-500"
              }`}
              id="name"
              name="name"
              placeholder="description of Page"
              value={name}
              onChange={(e) => setDescription(e.target.value)}
            />
            {!isValid && (
              <p className="text-red-500 text-sm ml-4">Please provide a valid name.</p>
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="mr-2 py-2 px-6 border border-white rounded-md text-lg font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => setName("")}
            >
              Clear
            </button>
            <button
              type="button"
              className="py-2 px-6 border border-transparent rounded-md text-lg font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col">
            <div className="flex bg-gray-200 text-lg font-semibold py-3">
              <div className="w-2/6 px-4 text-gray-800">Name</div>
              <div className="w-2/6 px-4 text-gray-800">Description</div>
              <div className="w-1/6 px-4"></div>
            </div>
            <div>
              {pages ? (
                pages.map((page) => (
                  <div key={page._id} className="flex items-center border-b hover:bg-gray-100">
                    <div className="w-2/6 px-4 py-3 text-gray-700">{page.name}</div>
                    <div className="w-2/6 px-4 py-3 text-gray-700">{page.slug}</div>
                    <div className="w-1/6 px-4 py-3">
                      <Link
                        to={`/editor/${page._id}`}
                        className="text-blue-500 hover:text-blue-700 font-medium"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-center">No Page</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
