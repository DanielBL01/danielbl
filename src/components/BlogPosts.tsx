import React, { useState, useEffect } from "react";
import { DocumentReference, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import moment from "moment";
import { TagsIdToName } from "../Tags";
import Fuse from "fuse.js";

interface BlogMetaData {
  id: string;
  title: string;
  date: Timestamp;
  overview: string;
  tags: number[];
  ref: DocumentReference;
}

const searchOptions = {
  keys: ["title", "overview"],
  threshold: 0.3
};

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
    if (searchTerm === "") {
      setFilteredBlogMetaData(blogMetaData);
    } else {
      const fuse = new Fuse(blogMetaData, searchOptions);
      const fuzzyResult = fuse.search(searchTerm);
      setFilteredBlogMetaData(fuzzyResult.map((result) => result.item));
    }
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
            "border border-gray-300 p-2 rounded-xl bg-white dark:bg-gray-700 w-full sm:w-3/4 md:w-1/2 lg:w-1/2 mx-auto"
          }
        />
      </div>
      <hr className="mt-2" />
      <br />
      {noTitlesMatched ? (
        <p>Even with fuzzy search, your search was unsuccessful... Try again!</p>
      ) : (
        filteredBlogMetaData.map((blog) => (
          <ul>
            <li key={blog.id}>
              <Link
                to={`/blog/${blog.ref.id}`}
                className="text-xl hover:underline"
              >
                {blog.title}
              </Link>
              <div className="text-sm mt-2 font-extralight">
                {blog.tags.map((tag) => (
                  <span className="mr-2">
                    <button className="border rounded-3xl px-2 hover:bg-blue-400">
                      <Link to={`/topics/${TagsIdToName.get(tag)}`}>
                        {TagsIdToName.get(tag)}
                      </Link>
                    </button>
                  </span>
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
