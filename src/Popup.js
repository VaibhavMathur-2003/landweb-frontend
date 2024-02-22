import React, { useState } from "react";

const Popup = ({ onSave, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    onSave({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Page</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="name"
            name="name"
            placeholder="Name of Page"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <input
            type="text"
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="description"
            name="description"
            placeholder="Description of Page"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-2 py-2 px-6 border border-gray-300 rounded-md text-lg font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="py-2 px-6 border border-transparent rounded-md text-lg font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
