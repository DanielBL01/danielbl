import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { collectionRef } from "../firebase-config";
import { Timestamp, getDocs, query, orderBy, DocumentReference } from "firebase/firestore";
import BlogPosts from "./BlogPosts";

interface BlogMetaData {
  id: string;
  title: string;
  date: Timestamp;
  overview: string;
  tags: number[];
  ref: DocumentReference;
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
            overview: data.overview,
            tags: data.tags,
            ref: data.ref,
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
