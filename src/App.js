import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    for (let i = 0; i < imageUpload.length; i++) {
      console.log(imageUpload[i])

      const imageRef = ref(storage, `images/${imageUpload[i].name + v4()}`);
      uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });

    }
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <div className="App">
      <input
        type="file" multiple='multiple'
        onChange={(event) => {
            setImageUpload(event.target.files);


        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
}

export default App;
