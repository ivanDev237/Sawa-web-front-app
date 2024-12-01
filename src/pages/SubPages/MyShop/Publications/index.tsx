import React, { useState, useEffect, useCallback } from 'react';
import { Heart, MoreHorizontal } from 'lucide-react';
import CreatePostModal from '../../../../Modals/CreatePostModal';
import EditPostModal from '../../../../Modals/EditPostModal';
import ViewCommentModal from '../../../../Modals/ViewCommentModal';
import classNames from 'classnames';

interface Publication {
  id: number;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: string[];
  createdAt: number;
  isLikedByVendor: boolean;
}

const Publications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPublication, setCurrentPublication] = useState<Publication | null>(null);
  const [isViewCommentsModalOpen, setIsViewCommentsModalOpen] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  // Charger les publications depuis le localStorage
  useEffect(() => {
    const storedPublications = localStorage.getItem('publications');
    if (storedPublications) {
      try {
        setPublications(JSON.parse(storedPublications));
      } catch (error) {
        console.error('Erreur lors du chargement des publications', error);
      }
    }
  }, []);

  // Sauvegarder les publications dans le localStorage
  useEffect(() => {
    if (publications.length > 0) {
      localStorage.setItem('publications', JSON.stringify(publications));
    }
  }, [publications]);

  // Fonction pour créer une nouvelle publication
  const handleCreatePublication = useCallback(
    (title: string, description: string, image: File) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPost: Publication = {
          id: Date.now(),
          title,
          description,
          image: reader.result as string,
          likes: 0,
          comments: [],
          createdAt: Date.now(),
          isLikedByVendor: false,
        };
        setPublications((prev) => [...prev, newPost]);
      };
      reader.readAsDataURL(image);
    },
    []
  );

  // Fonction pour gérer les likes
  const handleLikePublication = useCallback(
    (id: number) => {
      setPublications((prev) =>
        prev.map((pub) =>
          pub.id === id
            ? {
                ...pub,
                isLikedByVendor: !pub.isLikedByVendor,
                likes: pub.isLikedByVendor ? pub.likes - 1 : pub.likes + 1,
              }
            : pub
        )
      );
    },
    []
  );

  // Gestion de la suppression de publication
  const confirmDeletePublication = useCallback(() => {
    if (confirmDelete !== null) {
      setPublications((prev) => prev.filter((pub) => pub.id !== confirmDelete));
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  // Formater la date relative
  const formatRelativeDate = useCallback((timestamp: number) => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });

    if (days > 0) return rtf.format(-days, 'day');
    if (hours > 0) return rtf.format(-hours, 'hour');
    if (minutes > 0) return rtf.format(-minutes, 'minute');
    return rtf.format(-seconds, 'second');
  }, []);

  return (
    <div className="p-6">
      {/* Bouton Créer */}
      <button onClick={() => setIsCreateModalOpen(true)} className="bg-blue-500 text-white p-2 rounded mb-4">
        <span className="mr-2">+</span> Créer une publication
      </button>

      {/* Modals */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreatePublication}
      />

      {currentPublication && (
        <EditPostModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          publication={currentPublication}
          onEdit={(title, description, image) => {
            setPublications((prev) =>
              prev.map((pub) =>
                pub.id === currentPublication.id
                  ? { ...pub, title, description, image: typeof image === 'string' ? image : URL.createObjectURL(image) }
                  : pub
              )
            );
            setIsEditModalOpen(false);
          }}
        />
      )}

      {selectedPublication && (
        <ViewCommentModal
          isOpen={isViewCommentsModalOpen}
          onClose={() => setIsViewCommentsModalOpen(false)}
          comments={selectedPublication.comments}
        />
      )}

      {/* Confirmation de suppression */}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Êtes-vous sûr de vouloir supprimer cette publication ?</h2>
            <div className="flex justify-end gap-4">
              <button onClick={() => setConfirmDelete(null)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Annuler
              </button>
              <button onClick={confirmDeletePublication} className="bg-red-500 text-white px-4 py-2 rounded">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Liste des publications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((publication) => (
          <div key={publication.id} className="bg-gray-100 p-4 rounded-md">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-xl">{publication.title}</h2>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((prev) => (prev === publication.id ? null : publication.id))}
                  className="text-gray-500"
                >
                  <MoreHorizontal size={24} />
                </button>
                {dropdownOpen === publication.id && (
                  <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40">
                    <button
  onClick={() => {
    setCurrentPublication(publication);
    setIsEditModalOpen(true);
  }}
  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
>
  Modifier
</button>
                    <button
                      onClick={() => setConfirmDelete(publication.id)}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            </div>
            <img src={publication.image} alt={publication.title} className="w-full h-40 object-cover my-2" />
            <p className={classNames('overflow-hidden', { 'line-clamp-2': !expandedDescriptions[publication.id] })}>
              {publication.description}
            </p>
            {publication.description.length > 100 && (
              <button
                onClick={() =>
                  setExpandedDescriptions((prev) => ({ ...prev, [publication.id]: !prev[publication.id] }))
                }
                className="text-blue-500 text-sm underline mt-1"
              >
                {expandedDescriptions[publication.id] ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
            <div className="text-sm text-gray-500 mt-2">Publiée {formatRelativeDate(publication.createdAt)}</div>
            <button
              onClick={() => handleLikePublication(publication.id)}
              className={classNames('text-sm', { 'text-red-500': publication.isLikedByVendor, 'text-gray-500': !publication.isLikedByVendor })}
            >
              <Heart size={18} className="inline mr-1" />
              {publication.likes} J'aime
            </button>
            <button
  onClick={() => {
    setSelectedPublication(publication);
    setIsViewCommentsModalOpen(true);
  }}
  className="text-sm text-blue-500 ml-4 mt-2"
>
  Voir les commentaires ({publication.comments.length})
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
