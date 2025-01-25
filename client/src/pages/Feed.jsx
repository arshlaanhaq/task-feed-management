  import React, { useState, useEffect, useRef } from "react";
  import axios from "axios";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";

  const Feed = () => {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const fileInputRef = useRef(null); 

    // Fetch feeds from the server
    const fetchFeeds = async () => {
      try {
        const res = await axios.get("https://task-management-vcao.onrender.com/api/feed", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
        alert("Failed to load feeds. Please try again later.");
      }
    };

    useEffect(() => {
      fetchFeeds();
    }, []);

    const handleUpload = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
      setisLoading(true);

      try {
        const cloudinaryRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );

        await axios.post(
          "https://task-management-vcao.onrender.com/api/feed",
          {
            imgurl: cloudinaryRes.data.secure_url,
            caption,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setCaption(""); // Clear the caption
        setImage(null); // Clear the image state
        fileInputRef.current.value = ""; // Reset the file input
        setisLoading(false);
        fetchFeeds(); // Refresh the feed after a new post
      } catch (error) {
        console.error("Error uploading post:", error);
        alert("Failed to upload post. Please try again later.");
        setisLoading(false);
      }
    };

    return (
      <div className="h-screen flex flex-col justify-between gap-4">
        <div>
          <Navbar />
          <div className="flex justify-center">
            {/* Post Form */}
            <form onSubmit={handleUpload} className="flex flex-col space-y-4 w-full md:w-[30%] mt-6">
              <input
                type="file"
                ref={fileInputRef} 
                onChange={(e) => setImage(e.target.files[0])}
                className="p-2 border cursor-pointer"
                required
              />
              <input
                type="text"
                placeholder="Caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="p-2 border"
                required
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Posting..." : "Post"}
              </button>
            </form>
          </div>

          {/* Posts Preview */}
          <div className="mt-8 flex gap-2 flex-wrap justify-center">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="p-4 border rounded-lg w-full md:w-[30%]">
                  <img
                    src={post.imgurl}
                    alt="Post preview"
                    className="w-full aspect-video object-cover"
                  />
                  <p className="mt-2 text-gray-700">{post.caption}</p>
                </div>
              ))
            ) : (
              <p>No posts to display. Be the first to post!</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Feed;
