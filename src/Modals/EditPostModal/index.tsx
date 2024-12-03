import React, { useState, useEffect } from 'react';

interface EditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  publication: { title: string; description: string; image: string };
  onEdit: (title: string, description: string, image: File | string) => void;
}

const EditPostModal: React.FC<EditPostModalProps> = ({ isOpen, onClose, publication, onEdit }) => {
  // Initialisation des états avec les valeurs de la publication
  const [title, setTitle] = useState(publication.title);
  const [description, setDescription] = useState(publication.description);
  const [image, setImage] = useState<File | string>(publication.image);

  // Réinitialiser les valeurs des champs chaque fois que le modal est réouvert
  useEffect(() => {
    if (isOpen) {
      setTitle(publication.title);
      setDescription(publication.description);
      setImage(publication.image);
    }
  }, [isOpen, publication]);

  const handleSubmit = () => {
    if (title && description) {
      onEdit(title, description, image);
      onClose();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Modifier la publication</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : image)}
          className="mb-4"
        />
        <div className="flex justify-between">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Annuler
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
