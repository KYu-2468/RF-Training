import React from "react";

import SidebarContent from "./SidebarContent";

function DesktopSidebar(props) {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-80 overflow-y-auto bg-white dark:bg-gray-800 md:block">
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
