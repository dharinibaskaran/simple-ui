import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa"; // Import upload icon
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
          setJsonOutput(require("./data.json")); // Load JSON from file
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
            <div className="drag-drop-box">
              <FaCloudUploadAlt className="upload-icon" />
              <p>Select your file or drag and drop</p>
              <small>PNG, JPG accepted</small>
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileSelect}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label htmlFor="fileInput" className="upload-btn">
              Browse
            </label>
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
