import React, { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import moment from "moment";
import Tags from "../Tags";

interface BlogMetaData {
  id: string;
  title: string;
  date: Timestamp;
  overview: string;
  tags: number[];
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
              <div className="text-sm mt-2 font-extralight">
                {blog.tags.map((tag) => (
                  <span className="mr-2" key={Tags[tag]?.id}><button className="border rounded-3xl px-2">{Tags[tag]?.name}</button></span>
                ))}
              </div>
              <p className="text-sm italic mt-2 font-extralight">
                {moment(blog.date.toDate()).format("MMMM Do YYYY")}
              </p>
              <p className="text-sm mb-5 font-extralight">{blog.overview}</p>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default BlogPosts;
