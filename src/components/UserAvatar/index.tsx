import { Avatar } from "antd";
import React from "react";

interface AdaptiveAvatarProps {
  fullName: string; // Nom complet de l'utilisateur
  profileImage?: string; // URL de l'image de profil
}

const AdaptiveAvatar: React.FC<AdaptiveAvatarProps> = ({
  fullName,
  profileImage,
}) => {
  // Générer les initiales à partir du nom complet
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts
      .slice(0, 2) // Prendre les deux premières parties du nom
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
    return initials;
  };

  return (
    <Avatar
      size="default"
      src={profileImage || undefined}
      style={{
        backgroundColor: "#1890ff", // Couleur de fond par défaut
        color: "#fff",
        fontWeight: "bold",
      }}
      className="select-none"
    >
      {!profileImage && getInitials(fullName)}{" "}
      {/* Afficher les initiales si l'image n'est pas disponible */}
    </Avatar>
  );
};

export default AdaptiveAvatar;
