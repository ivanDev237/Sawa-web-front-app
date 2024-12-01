import React from 'react';

interface ViewCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  comments: string[];
}

const ViewCommentModal: React.FC<ViewCommentModalProps> = ({ isOpen, onClose, comments }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Commentaires</h2>
        <div className="max-h-60 overflow-y-auto">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-2 border-b border-gray-300">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>Aucun commentaire pour cette publication.</p>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCommentModal;
