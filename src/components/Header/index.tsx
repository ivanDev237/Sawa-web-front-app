import SortIcon from "@mui/icons-material/Sort";
import { Bell, Moon, Search, Sun } from "lucide-react";
import userProfile from "../../Assets/imgs/profile_picture.jpg";
import { useTheme } from "../../hooks/useTheme";
import UserAvatar from "../UserAvatar";
interface HeaderInterface {
  collapsed: boolean;
  setCollapsed: any;
}

// FAKE data pour l'affichage des infos de l'utilisateur. à rechercher dan la BD pour integration
const userInfo = {
  name: "Arno Devilson",
  pictureProfile: userProfile,
  key: "17854920-c0fe-4276-b2b3-626847ab9a22",
};

const Header: React.FC<HeaderInterface> = (props) => {
  const { theme, setTheme } = useTheme();
  const { collapsed, setCollapsed } = props;
  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <SortIcon />
        </button>
        <div className="input">
          <Search size={20} className="text-slate-300" />
          <input
            type="text"
            placeholder="Search..."
            name="search_bar"
            id="search"
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50 dark:hover:text-slate-300"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun size={20} className="block dark:hidden" />
          <Moon size={20} className="dark:block hidden" />
        </button>
        <button className="btn-ghost size-10">
          <Bell size={20} />
        </button>
        <UserAvatar
          fullName={userInfo.name}
          profileImage={userInfo.pictureProfile}
          key={userInfo.key}
        />
      </div>
    </header>
  );
};

export default Header;
