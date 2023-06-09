import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
}

function BlogPost(): JSX.Element {
  const { blogID } = useParams<{ blogID: string }>();
  const navigate = useNavigate();

  if (!blogID) {
    return <div>Invalid Blog ID</div>;
  }

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // Don't forget to change collection from "testRef" to "blogRef" in production push
        const docRef = doc(db, "blogRef", blogID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const documentsData = docSnap.data() as Blog;
          setBlog(documentsData);
        } else {
          navigate("/blog");
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
      <p className="text-3xl mb-2">{blog.title}</p>
      <p className="inline font-extralight">{blog.author}</p>
      <p className="inline italic font-extralight">
        {" "}
        {moment(blog.date.toDate()).format("MMMM Do YYYY")}
      </p>
      <p className="inline font-extralight"> • {blog.duration} min read</p>
      <hr className="mt-2 mb-5" />
      {ReactHtmlParser(DOMPurify.sanitize(blog.content))}
    </div>
  );
}

export default BlogPost;
