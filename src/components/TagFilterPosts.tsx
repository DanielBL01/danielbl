import React, { useState, useEffect } from "react";
import { DocumentReference, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import moment from "moment";
import { TagsIdToName } from "../Tags";

interface BlogMetaData {
  id: string;
  title: string;
  date: Timestamp;
  overview: string;
  tags: number[];
  ref: DocumentReference;
}

function TagFilterPosts({
  blogMetaData,
}: {
  blogMetaData: BlogMetaData[];
}): JSX.Element {
  return (
    <div>
      {(
        blogMetaData.map((blog) => (
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
                    <button className="border rounded-3xl px-2">
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

export default TagFilterPosts;