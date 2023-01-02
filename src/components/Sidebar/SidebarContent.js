/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
// import { Button } from "@windmill/react-ui";  KY comment

import { SidebarContext } from "../../context/SidebarContext";
import { MoonIcon, SunIcon, MenuIcon } from "../../icons";
import {
  // Avatar,
  // Badge,
  // Input,
  // Dropdown,
  // DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <div className="flex flex-no-wrap justify-around">
        <a
          className="ml-6 text-2xl font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          RF Training SGS
        </a>
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-6 h-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </li>
        </ul>
      </div>

      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-xl font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      {/* <div className="px-6 my-6"> KY comment
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div> */}
    </div>
  );
}

export default SidebarContent;
