import React, { useState, useEffect } from 'react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string, description: string, image: File) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setDescription('');
      setImage(null);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (title && description && image) {
      onCreate(title, description, image);
      onClose();
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Créer une publication</h2>
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
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          className="mb-4"
        />
        <div className="flex justify-between">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Annuler
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Créer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
