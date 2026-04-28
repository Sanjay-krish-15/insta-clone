import { useNavigate } from "react-router-dom";

export function useSidebarActions() {

  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const goReels = () => navigate("/reels");

  const goExplore = () => navigate("/explore");

  const goMessages = () => navigate("/messages");

  const goProfile = () => navigate("/profile");

  return {
    goHome,
    goExplore,
    goMessages,
    goProfile,
    goReels
  };
}