import SortIcon from "@mui/icons-material/Sort";
import { Bell, Moon, Sun } from "lucide-react";
import React from "react";
import userProfile from "../../Assets/imgs/profile_picture.jpg";
import { useProfile } from "../../hooks/useProfile";
import { useTheme } from "../../hooks/useTheme";
import UserAvatar from "../UserAvatar";

interface HeaderProps {
  onProfileClick?: () => void;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  onProfileClick,
  collapsed,
  setCollapsed,
}) => {
  const { profile } = useProfile();
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-card-light dark:bg-card-dark border-b dark:border-b-background-dark px-6 py-3">
      <div className="flex items-center justify-between">
        <button onClick={() => setCollapsed(!collapsed)}>
          <SortIcon className="text-neutral-950 dark:text-gray-200" />
        </button>

        <div className="flex items-center space-x-6">
          <button
            className="p-2 hover:bg-gray-100 rounded-full relative"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun size={20} className="dark:block hidden dark:text-gray-600" />
            <Moon size={20} className="block dark:hidden " />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button
            onClick={onProfileClick}
            className="flex items-center space-x-2  dark:hover:bg-slate-900 rounded-lg "
          >
            <UserAvatar
              fullName="Arno Devilson"
              profileImage={userProfile}
              key="userKey"
            />
            <div className="font-medium text-gray-700 dark:text-slate-50">
              {profile.name}
            </div>
            <div className="text-left hidden sm:block"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
