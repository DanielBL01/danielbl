import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { collectionRef } from "../firebase-config";
import { Timestamp, getDocs, query, orderBy } from "firebase/firestore";
import BlogPosts from "./BlogPosts";

interface BlogMetaData {
  id: string;
  title: string;
  date: Timestamp;
}

function Blog(): JSX.Element {
  const [blogMetaData, setBlogMetaData] = useState<BlogMetaData[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const blogQueryByDate = query(collectionRef, orderBy("date", "desc"));
        const querySnapshot = await getDocs(blogQueryByDate);
        const documentsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            date: data.date,
          };
        });
        setBlogMetaData(documentsData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <BlogPosts blogMetaData={blogMetaData} />
    </div>
  );
}

export default Blog;
