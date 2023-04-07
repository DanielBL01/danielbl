import React, { useEffect } from "react";
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
import { useQuery } from "react-query";

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
  const navigate = useNavigate();

  if (!topicName) {
    return <div>Invalid Topic Name.</div>;
  }

  const BLOG_META_DATA_BY_TAG_QUERY_KEY = topicName;
  const topicId: number | undefined = TagsNametoId.get(topicName);

  const {
    data: blogMetaData = [],
    error,
    isLoading,
  } = useQuery<BlogMetaData[], Error>(
    BLOG_META_DATA_BY_TAG_QUERY_KEY,
    async () => {
      if (topicId === undefined) {
        navigate("/blog");
      }

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
      return documentsData;
    },
    {
      onError: (error: Error) => {
        console.error("Error fetching documents:", error);
      },
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <div>Fetching blogs from topic #{topicName}...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

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
