// import React, { useState } from "react";

// export default function Upload() {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!file) {
//       setMessage("Veuillez sélectionner un fichier à télécharger.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

    
//     try {
//       const response = await fetch("https://votre-api.com/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         setMessage("Fichier téléchargé avec succès !");
//       } else {
//         setMessage("Erreur lors du téléchargement du fichier.");
//       }
//     } catch (error) {
//       console.error("Erreur:", error);
//       setMessage("Une erreur  produite lors du téléchargement.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="bg-white my-2 p-1  flex border border-gray-200 rounded">
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="p-1 py-2 appearance-none outline-none  w-full text-gray-800"
//           />
//         </div>
//         <button type="submit">Télécharger</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  return (
  <div className='w-full h-auto flex items-center justify-center'>
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
  </div>
  )
}


