import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useApiStore } from "../store/useApiStore";
import Loader from "../components/Loader";

const Dashboard = () => {
  const { user, token, clearAuth } = useAuthStore();
  const { isLoading, graphqlRequest, error } = useApiStore();
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    // Fetch links
    const fetchLinks = async () => {
      try {
        const data = await graphqlRequest(
          `
            query Links {
              links {
                id
                url
                category
                created_at
              }
            }
          `
        );
        setLinks(data.links);
        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.links.map((link) => link.category).filter(Boolean)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        // Error handled by useApiStore
      }
    };
    fetchLinks();
  }, [user, graphqlRequest]);

  const handleAddLink = async (e) => {
    e.preventDefault();
    try {
      const data = await graphqlRequest(
        `
          mutation CreateLink($input: LinkInput!) {
            createLink(input: $input) {
              id
              url
              category
              created_at
            }
          }
        `,
        { input: { url, category: category || null } },
        { Authorization: `Bearer ${token}` }
      );
      setLinks([...links, data.createLink]);
      if (category && !categories.includes(category)) {
        setCategories([...categories, category]);
      }
      setUrl("");
      setCategory("");
    } catch (err) {
      // Error handled by useApiStore
    }
  };

  const handleDeleteLink = async (id) => {
    try {
      await graphqlRequest(
        `
          mutation DeleteLink($id: Int!) {
            deleteLink(id: $id)
          }
        `,
        { id },
        { Authorization: `Bearer ${token}` }
      );
      setLinks(links.filter((link) => link.id !== id));
    } catch (err) {
      // Error handled by useApiStore
    }
  };

  const handleLogout = () => {
    clearAuth();
    window.location.href = "/login";
  };

  const initials = user
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  const filteredLinks = filterCategory
    ? links.filter((link) => link.category === filterCategory)
    : links;

  return (
    <div className="min-h-screen bg-gray-100">
      <Loader isLoading={isLoading} />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6"></div>

        {/* Add Link Form */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
          <h3 className="text-lg font-bold text-blue-500 mb-4">
            Add a New Link
          </h3>
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          <form onSubmit={handleAddLink} className="flex flex-col gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL (e.g., https://example.com)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              required
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category (optional)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white p-3 rounded-lg hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              Add Link
            </button>
          </form>
        </div>

        {/* Filter Links */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
          <h3 className="text-lg font-bold text-blue-500 mb-4">Filter Links</h3>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Links List */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg font-bold text-blue-500 mb-4">Your Links</h3>
          {filteredLinks.length === 0 ? (
            <p className="text-gray-500">No links added yet.</p>
          ) : (
            <ul className="space-y-4">
              {filteredLinks.map((link) => (
                <li
                  key={link.id}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.url}
                    </a>
                    {link.category && (
                      <p className="text-gray-500 text-sm">
                        Category: {link.category}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">
                      Added: {new Date(link.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteLink(link.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
