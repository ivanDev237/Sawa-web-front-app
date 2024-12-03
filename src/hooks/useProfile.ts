import { useState } from "react";

interface Profile {
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  bio: string;
}

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile>({
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Street, Commerce City, ST 12345",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces",
    bio: "Experienced e-commerce seller specializing in electronics and accessories.",
  });

  const updateProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
  };

  return { profile, updateProfile };
};
