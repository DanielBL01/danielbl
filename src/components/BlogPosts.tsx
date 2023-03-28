import React, { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import moment from "moment";

interface BlogMetaData {
  id: string;
  title: string;
  date: Timestamp;
  overview: string;
}

function BlogPosts({
  blogMetaData,
}: {
  blogMetaData: BlogMetaData[];
}): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogMetaData, setFilteredBlogMetaData] = useState<
    BlogMetaData[]
  >([]);

  useEffect(() => {
    setFilteredBlogMetaData(
      blogMetaData.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [blogMetaData, searchTerm]);

  const noTitlesMatched =
    searchTerm !== "" && filteredBlogMetaData.length === 0;

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={
            "border border-gray-300 p-2 rounded-xl bg-white dark:bg-gray-700"
          }
        />
      </div>
      <hr className="mt-2" />
      <br />
      {noTitlesMatched ? (
        <p>No titles matched your search input.</p>
      ) : (
        filteredBlogMetaData.map((blog) => (
          <ul>
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`} className="text-xl hover:underline">
                {blog.title}
              </Link>
              <p className="text-sm italic mt-2">
                {moment(blog.date.toDate()).format("MMMM Do YYYY")}
              </p>
              <p className="text-sm mb-5">
                {blog.overview}
              </p>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default BlogPosts;
