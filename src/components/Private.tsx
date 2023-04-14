import { DocumentReference, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, privateRef } from "../firebase-config";
import PrivateList from "./PrivateList";

interface PrivateMetaData {
  id: string;
  title: string;
  ref: DocumentReference;
}

function Private(): JSX.Element {
  const [privateMetaData, setPrivateMetaData] = useState<PrivateMetaData[]>([]);

  useEffect(() => {
    const fetchPrivateMetaData = async () => {
      try {
        const privateMetaDataSnap = await getDocs(privateRef);
        const privateMetaData = privateMetaDataSnap.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            ref: data.ref,
          };
        });
        setPrivateMetaData(privateMetaData);
      } catch (error) {
        console.error("Error fetching private list: ", error);
      }
    };

    fetchPrivateMetaData();
  }, []);

  return (
    <div>
      <p className="mb-5">Welcome to Daniel's private posts. This was made to access personal notes with just a browser.</p>
      <PrivateList privateMetaData={privateMetaData} />
    </div>
  );
}

export default Private;
