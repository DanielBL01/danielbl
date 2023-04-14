import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase-config";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

interface PrivatePost {
  content: string;
}

function PrivatePost(): JSX.Element {
  const { privatePostID } = useParams<{ privatePostID: string }>();
  const navigate = useNavigate();

  if (!privatePostID) {
    return <div>Invalid Private Post ID</div>;
  }

  const [privatePost, setPrivatePost] = useState<PrivatePost| null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docRef = doc(db, "privateRef", privatePostID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const documentsData = docSnap.data() as PrivatePost;
          setPrivatePost(documentsData);
        } else {
          navigate("/private");
        }
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, [privatePostID]);

  if (!privatePost) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {ReactHtmlParser(DOMPurify.sanitize(privatePost.content))}
    </div>
  );
}

export default PrivatePost;
