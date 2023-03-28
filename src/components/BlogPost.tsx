import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Timestamp, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import moment from "moment";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

interface Blog {
  author: string;
  content: string;
  date: Timestamp;
  title: string;
  duration: number;
  overview: string;
}

function BlogPost(): JSX.Element {
  const { blogID } = useParams<{ blogID: string }>();

  if (!blogID) {
    return <div>Invalid Blog ID</div>;
  }

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docRef = doc(db, "blogs", blogID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const documentsData = docSnap.data() as Blog;
          setBlog(documentsData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, [blogID]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p className="text-3xl">{blog.title}</p>
      <p className="inline">{blog.author}</p>
      <p className="inline italic">
        {" "}
        {moment(blog.date.toDate()).format("MMMM Do YYYY")}
      </p>
      <p className="inline"> • {blog.duration} min read</p>
      <hr className="mt-2" />
      <br />
      {ReactHtmlParser(DOMPurify.sanitize(blog.content))}
    </div>
  );
}

export default BlogPost;
