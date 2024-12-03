import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import { LogOut, Settings, User } from "lucide-react";
import React from "react";

interface AdaptiveAvatarProps {
  fullName: string;
  profileImage?: string;
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

  // Menu pour le dropdown de l'avatar
  const menu = (
    <Menu>
      <Menu.Item key="1" style={{ display: "flex", alignItems: "center" }}>
        <User size={17} className="inline mr-2 align-middle" />
        <p className="inline align-bottom">See Profile</p>
      </Menu.Item>
      <Menu.Item key="2" style={{ display: "flex", alignItems: "center" }}>
        <Settings size={17} color="blue" className="inline mr-2 align-middle" />
        Settings
      </Menu.Item>
      <Menu.Item key="3" style={{ display: "flex", alignItems: "center" }}>
        <LogOut size={17} color="red" className="inline mr-2 align-middle" />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} className="bg-slate-200">
      <Avatar
        size="default"
        src={profileImage}
        icon={!profileImage ? <UserOutlined /> : null}
        style={{
          cursor: "pointer",
          backgroundColor: "#1890ff",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {!profileImage && getInitials(fullName)}{" "}
        {/* Affiche les initiales si pas d'image */}
      </Avatar>
    </Dropdown>
  );
};

export default AdaptiveAvatar;
