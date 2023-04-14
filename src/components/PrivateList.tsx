import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";
import { DocumentReference } from "firebase/firestore";

interface PrivateMetaData {
  id: string;
  title: string;
  ref: DocumentReference;
}

const searchOptions = {
  keys: ["title"],
  threshold: 0.3,
};

function PrivateList({
  privateMetaData,
}: {
  privateMetaData: PrivateMetaData[];
}): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPrivateList, setFilteredPrivateList] = useState<
    PrivateMetaData[]
  >([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPrivateList(privateMetaData);
    } else {
      const fuse = new Fuse(privateMetaData, searchOptions);
      const fuzzyResult = fuse.search(searchTerm);
      setFilteredPrivateList(fuzzyResult.map((result) => result.item));
    }
  }, [privateMetaData, searchTerm]);

  const noTitlesMatched = searchTerm !== "" && filteredPrivateList.length === 0;

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={
            "border border-gray-300 p-2 rounded-xl bg-white dark:bg-gray-700"
          }
        />
      </div>
      <hr className="mt-2" />
      <br />
      {noTitlesMatched ? (
        <p>
          Even with fuzzy search, your search was unsuccessful... Try again!
        </p>
      ) : (
        filteredPrivateList.map((blog) => (
          <ul>
            <li key={blog.id}>
              <Link
                to={`/private/${blog.ref.id}`}
                className="underline"
              >
                {blog.title}
              </Link>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default PrivateList;
