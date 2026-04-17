import { useNavigate } from "react-router-dom";

export function useSidebarActions() {

  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const goReels = () => navigate("/reels");

  const goExplore = () => navigate("/explore");

  const goMessages = () => navigate("/messages");

  const goProfile = () => navigate("/profile");

  const openNotificationPanel = () => navigate("/NotificationPanel=true");

  const goCreate = () => navigate("/create");

  const openSearch = () => navigate("/explore?search=true");

  const openMore = () => navigate("/MoreDropdown=true");

  return {
    goHome,
    goExplore,
    goMessages,
    goProfile,
    goReels,
    openNotificationPanel,
    opensearchPanel: openSearch,
    openMoreDropdown: openMore,
  };
}