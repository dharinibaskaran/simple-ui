// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./index.css"; // Ensure CSS file is imported

// function App() {
//   const [image, setImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="container">
//       {/* Header */}
//       <header className="header">
//         <h1>INOVONICS VECTORIZER</h1>
//       </header>

//       {/* Main Content */}
//       <div className="content">
//         {/* Upload Button */}
//         <div className="upload-section">
//           <input type="file" accept="image/*" onChange={handleImageUpload} />
//         </div>

//         {/* Image and Detected Boundaries Section */}
//         <div className="image-container">
//           {/* Original Uploaded Image */}
//           <div className="image-box">
//             <p className="title">The original uploaded image:</p>
//             {image ? (
//               <img src={image} alt="Uploaded" className="uploaded-image" />
//             ) : (
//               <div className="placeholder">No Image</div>
//             )}
//           </div>

//           {/* Detected Boundaries */}
//           <div className="image-box">
//             <p className="title">Detected Boundaries:</p>
//             <div className="placeholder">Processing...</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import "./index.css";

// function App() {
//   const [image, setImage] = useState(null);
//   const [jsonOutput, setJsonOutput] = useState(null);
//   const [error, setError] = useState("");

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const fileType = file.type;
//       if (fileType === "image/png" || fileType === "image/jpeg") {
//         setImage(URL.createObjectURL(file));
//         setError("");

//         // Mock JSON Output (Replace this with real processing output)
//         const mockJson = {
//           filename: file.name,
//           size: file.size,
//           format: fileType,
//           detectedBoundaries: [
//             { x: 10, y: 20, width: 100, height: 150 },
//             { x: 200, y: 50, width: 80, height: 90 },
//           ],
//         };
//         setJsonOutput(mockJson);
//       } else {
//         setError("Only PNG or JPEG files are allowed.");
//         setImage(null);
//         setJsonOutput(null);
//       }
//     }
//   };

//   return (
//     <>
//       {/* Full Width Header */}
//       <header className="header">
//         <h1>INOVONICS VECTORIZER</h1>
//       </header>

//       {/* Full Screen Container */}
//       <div className="main-container">
//         {/* Upload and Image Section */}
//         <div className="upload-image-section">
//           {/* Upload Section */}
//           <div className="upload-box">
//             <input
//               type="file"
//               accept="image/png, image/jpeg"
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//               id="fileInput"
//             />
//             <label htmlFor="fileInput" className="upload-btn">
//               Upload Image
//             </label>
//             {error && <p className="error-message">{error}</p>}
//           </div>

//           {/* Image Display Section */}
//           <div className="image-box">
//             {image ? (
//               <img src={image} alt="Uploaded" className="uploaded-image" />
//             ) : (
//               <p>No Image Uploaded</p>
//             )}
//           </div>
//         </div>

//         {/* JSON Output Section */}
//         <div className="json-container">
//           <h3>JSON Output:</h3>
//           <pre className="json-output">
//             {jsonOutput ? JSON.stringify(jsonOutput, null, 2) : "No Data"}
//           </pre>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./index.css";

// function App() {
//   const [image, setImage] = useState(null);
//   const [jsonOutput, setJsonOutput] = useState(null);
//   const [error, setError] = useState("");

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const fileType = file.type;
//       if (fileType === "image/png" || fileType === "image/jpeg") {
//         setImage(URL.createObjectURL(file));
//         setError("");

//         // Mock JSON Output (Replace this with real processing output)
//         const mockJson = {
//           filename: file.name,
//           size: file.size,
//           format: fileType,
//           detectedBoundaries: [
//             { x: 10, y: 20, width: 100, height: 150 },
//             { x: 200, y: 50, width: 80, height: 90 },
//           ],
//         };
//         setJsonOutput(mockJson);
//       } else {
//         setError("Only PNG or JPEG files are allowed.");
//         setImage(null);
//         setJsonOutput(null);
//       }
//     }
//   };

//   return (
//     <>
//       {/* Full Width Header */}
//       <header className="header">
//         <img src="/logo.png" alt="Logo" className="logo" />
//         <h1>2D Floorplan Vectorizer</h1>
//       </header>

//       {/* Full Screen Container */}
//       <div className="main-container">
//         {/* Upload and Image Section */}
//         <div className="upload-image-section">
//           {/* Upload Section */}
//           <div className="upload-box">
//             <input
//               type="file"
//               accept="image/png, image/jpeg"
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//               id="fileInput"
//             />
//             <label htmlFor="fileInput" className="upload-btn">
//               Upload Image
//             </label>
//             {error && <p className="error-message">{error}</p>}
//           </div>

//           {/* Image Display Section */}
//           <div className="image-box">
//             {image ? (
//               <img src={image} alt="Uploaded" className="uploaded-image" />
//             ) : (
//               <p>No Image Uploaded</p>
//             )}
//           </div>
//         </div>

//         {/* JSON Output Section */}
//         <div className="json-container">
//           <h3>JSON Output:</h3>
//           <pre className="json-output">
//             {jsonOutput ? JSON.stringify(jsonOutput, null, 2) : "No Data"}
//           </pre>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./index.css";

// function App() {
//   const [image, setImage] = useState(null);
//   const [jsonOutput, setJsonOutput] = useState(null);
//   const [error, setError] = useState("");

//   const handleImageUpload = (file) => {
//     if (file) {
//       const fileType = file.type;
//       if (fileType === "image/png" || fileType === "image/jpeg") {
//         setImage(URL.createObjectURL(file));
//         setError("");

//         // Mock JSON Output (Replace this with real processing output)
//         const mockJson = {
//           filename: file.name,
//           size: file.size,
//           format: fileType,
//           detectedBoundaries: [
//             { x: 10, y: 20, width: 100, height: 150 },
//             { x: 200, y: 50, width: 80, height: 90 },
//           ],
//         };
//         setJsonOutput(mockJson);
//       } else {
//         setError("Only PNG or JPEG files are allowed.");
//         setImage(null);
//         setJsonOutput(null);
//       }
//     }
//   };

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     handleImageUpload(file);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault(); // Prevents opening file in a new tab
//   };

//   const handleDrop = (event) => {
//     event.preventDefault(); // Prevents default browser behavior
//     const file = event.dataTransfer.files[0];
//     handleImageUpload(file);
//   };

//   return (
//     <>
//       {/* Full Width Header */}
//       <header className="header">
//   <img src="/logo.png" alt="Logo" className="logo" />
//   <div className="header-title">2D Floorplan Vectorizer</div>
// </header>

//       {/* Full Screen Container */}
//       <div className="main-container">
//         {/* Upload and Image Section */}
//         <div className="upload-image-section">
//           {/* Upload Section */}
//           <div
//             className="upload-box"
//             onDragOver={handleDragOver}
//             onDrop={handleDrop}
//           >
//             <label htmlFor="fileInput" className="upload-btn">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               accept="image/png, image/jpeg"
//               onChange={handleFileSelect}
//               style={{ display: "none" }}
//               id="fileInput"
//             />
//             <div className="drag-drop-box">
//               <p>Drag and drop files here</p>
//             </div>
//             {error && <p className="error-message">{error}</p>}
//           </div>

//           {/* Image Display Section */}
//           <div className="image-box">
//             {image ? (
//               <img src={image} alt="Uploaded" className="uploaded-image" />
//             ) : (
//               <p>No Image Uploaded</p>
//             )}
//           </div>
//         </div>

//         {/* JSON Output Section */}
//         <div className="json-container">
//           <h3>JSON Output:</h3>
//           <pre className="json-output">
//             {jsonOutput ? JSON.stringify(jsonOutput, null, 2) : "No Data"}
//           </pre>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



import React, { useState } from "react";
import jsonData from "./data.json"; // Import JSON file
import "./index.css";

function App() {
  const [image, setImage] = useState(null);
  const [jsonOutput, setJsonOutput] = useState(null);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (file) => {
    if (file) {
      const fileType = file.type;
      if (fileType === "image/png" || fileType === "image/jpeg") {
        setError("");
        setIsProcessing(true);

        // Wait for 5 seconds before showing image & JSON
        setTimeout(() => {
          setImage(URL.createObjectURL(file));
          setJsonOutput(jsonData); // Load JSON from file
          setIsProcessing(false);
        }, 5000);
      } else {
        setError("Only PNG or JPEG files are allowed.");
        setImage(null);
        setJsonOutput(null);
      }
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevents opening file in a new tab
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevents default browser behavior
    const file = event.dataTransfer.files[0];
    handleImageUpload(file);
  };

  return (
    <>
      {/* Full Width Header */}
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="header-title">2D Floorplan Vectorizer</div>
      </header>

      {/* Full Screen Container */}
      <div className="main-container">
        {/* Upload and Image Section */}
        <div className="upload-image-section">
          {/* Upload Section */}
          <div
            className="upload-box"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <label htmlFor="fileInput" className="upload-btn">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileSelect}
              style={{ display: "none" }}
              id="fileInput"
            />
            <div className="drag-drop-box">
              <p>Drag and drop files here</p>
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>

          {/* Image Display Section */}
          <div className="image-box">
            {isProcessing ? (
              <p>Processing... Please wait</p>
            ) : image ? (
              <img src={image} alt="Uploaded" className="uploaded-image" />
            ) : (
              <p>No Image Uploaded</p>
            )}
          </div>
        </div>

        {/* JSON Output Section */}
        <div className="json-container">
          <h3>JSON Output:</h3>
          <pre className="json-output">
            {isProcessing
              ? "Processing JSON..."
              : jsonOutput
              ? JSON.stringify(jsonOutput, null, 2)
              : "No Data"}
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
