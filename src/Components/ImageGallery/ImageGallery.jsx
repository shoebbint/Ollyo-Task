// import img1 from "../../assets/image-1.webp"
// import img2 from "../../assets/image-2.webp"
// import img3 from "../../assets/image-3.webp"
// import img4 from "../../assets/image-4.webp"
// import img5 from "../../assets/image-5.webp"
// import img6 from "../../assets/image-6.webp"
// import img7 from "../../assets/image-7.webp"
// import img8 from "../../assets/image-8.webp"
// import img9 from "../../assets/image-9.webp"
// import img10 from "../../assets/image-10.jpeg"
// import img11 from "../../assets/image-11.jpeg"
// import { useState } from "react"
// import "./ImageGallery.css"

// const ImageGallery = () => {
    
//     const previousImages = [
//         img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
//     ]
//     const [images, setImages] = useState(previousImages);

//     // Delete image operation
//     const handleDeleteImages = () => {
//         if (window.confirm("Are you sure you want to delete the selected files?")) {
//           const remainingImages = images.filter((image) => !selectedImages.includes(image));
//           setImages(remainingImages);
//           setSelectedImages([]);
//         }
//       };
//           // Select image operation
//     const [selectedImages, setSelectedImages] = useState([]);
//     const handleImageClick = (image) => {
//         if (selectedImages.includes(image)) {
//             setSelectedImages(selectedImages.filter((img) => img !== image));
//         } else {
//             setSelectedImages([...selectedImages, image]);
//         }
//     };


//     return (
//         <div className="py-20">

//             <div className=" w-9/12  mx-auto  px-10">
//                 <div className="collapse-title text-xl font-medium flex justify-between">
//                     <h1>     {selectedImages.length} Files are Selected</h1>
//                     <button onClick={handleDeleteImages} className="text-red-600 btn btn-ghost">Delete Files</button>
//                 </div>
//                 <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-5 sm:gap-3 ">

//                     {/* mapping the images and showing image  */}
//                     {
//                         images.map((image, index) => (
//                             <div className={`border-2 ${index === 0 ? 'grid row-span-2 col-span-2' : ''}`} key={index}>
//                                 <label className="image-checkbox-label">
//                                     <input
//                                         type="checkbox"
//                                         className="image-checkbox"
//                                         checked={selectedImages.includes(image)}
//                                         onChange={() => handleImageClick(image)}
//                                     />
//                                     <img
//                                         className={`h-auto max-w-full rounded-lg`}
//                                         src={image}
//                                         alt=""
//                                     />
//                                 </label>
//                             </div>
//                         ))
//                     }

//                     <div className="border-2 pt-10">
//                         <div className="my-auto ">
//                             <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default ImageGallery;