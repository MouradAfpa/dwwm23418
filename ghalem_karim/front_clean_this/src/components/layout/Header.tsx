import type { Router as RemixRouter } from "@remix-run/router";
import React, { useEffect, useState } from "react";

type Props = {
  router: RemixRouter;
};

const Header: React.FC<Props> = ({ router }: Props) => {
  useEffect(() => console.log(router.routes));

  const NavItem = ({ path, name }: any) => (
    <a href={path} className="hover:text-blue-500">
      {name}
    </a>
  );

  // Boucle
  const Nav = () => (
    <div className="gap-4">
      {router.routes
        .filter((route) => route.hasOwnProperty("name"))
        .map((route, i) => (
          <NavItem {...route} key={i} />
        ))}
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Clean-This</a>
      </div>

      <Nav />

      <div className="flex-none hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
