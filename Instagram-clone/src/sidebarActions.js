import { useNavigate } from "react-router-dom";

export function useSidebarActions() {

  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const goReels = () => navigate("/reels");

  const goExplore = () => navigate("/explore");

  const goMessages = () => navigate("/messages");

  const goProfile = () => navigate("/profile");

  // REMOVE fake route navigation for panels
  // These should be controlled using state in App.jsx / Sidebar.jsx

  return {
    goHome,
    goExplore,
    goMessages,
    goProfile,
    goReels
  };
}