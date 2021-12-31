import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  CameraIcon,
  VideoCameraIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";
import { db, Storage } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadString,
} from "firebase/storage";
const InputBox = () => {
  const session = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.data.user.name,
      email: session.data.user.email,
      image: session.data.user.image,
      timestamp: serverTimestamp(),
    }).then((docRef) => {
      if (imageToPost) {
        const storageRef = ref(Storage, `images/${docRef.id}`);
        const uploadTask =uploadString(storageRef, imageToPost,"data_url");
        uploadTask.then((snapshot) => {

            getDownloadURL(snapshot.ref).then((url) => {
                        console.log(url)
                        updateDoc(docRef, { post_img: url });
                     });
        }).catch((error) => {console.log(error)});
        // uploadTask.on(
        //   "state_changed",
        //   (snapshot) => {
        //     const progress =
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   },
        //   (error) => console.error(error),
        //   () => {
        //     //when uploads complete
        //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        //         console.log(url)
        //       updateDoc(docRef, { post_img: url });
        //     });
        //   }
        // );
        removeImage();
      }
    });
    inputRef.current.value = "";
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center p-4 ">
        <Image
          className="rounded-full"
          alt="input"
          src={session.data.user.image}
          width={40}
          height={40}
          layout="fixed"
        ></Image>
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What´s on your mind, ${session.data.user.name}?`}
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            className="flex flex-col items-center filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <img
              src={imageToPost}
              alt="image"
              className="h-10 object-contain"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-4 border-t ">
        <div className="input-icon">
          <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="input-icon"
        >
          <CameraIcon className="h-7 text-green-400"></CameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="input-icon">
          <EmojiHappyIcon className="h-7 text-yellow-300"></EmojiHappyIcon>
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};
export default InputBox;
