import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { collectionRef } from "../firebase-config";
import {
  Timestamp,
  getDocs,
  query,
  orderBy,
  DocumentReference,
  where,
} from "firebase/firestore";
import BlogPosts from "./BlogPosts";
import { useParams, useNavigate } from "react-router-dom";
import { TagsNametoId } from "../Tags";
import TagFilterPosts from "./TagFilterPosts";

interface BlogMetaData {
  id: string;
  title: string;
  date: Timestamp;
  overview: string;
  tags: number[];
  ref: DocumentReference;
}

function TagFilter(): JSX.Element {
  const { topicName } = useParams<{ topicName: string }>();
  const [blogMetaData, setBlogMetaData] = useState<BlogMetaData[]>([]);
  const navigate = useNavigate();

  if (!topicName) {
    return <div>Invalid Topics Name.</div>;
  }

  useEffect(() => {
    const fetchDocuments = async () => {
      if (!TagsNametoId.has(topicName)) {
        navigate("/blog");
      }

      try {
        const topicId: number | undefined = TagsNametoId.get(topicName);
        if (topicId !== undefined) {
          const blogQueryByDate = query(
            collectionRef,
            orderBy("date", "desc"),
            where("tags", "array-contains", topicId)
          );
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
        }
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <p className="text-3xl">#{topicName}</p>
      <hr className="mt-2" />
      <br />
      <TagFilterPosts blogMetaData={blogMetaData} />
    </div>
  );
}

export default TagFilter;
