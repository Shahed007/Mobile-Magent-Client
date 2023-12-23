import { Link, NavLink } from "react-router-dom";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";

const linkList = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center before:h-3 before:w-3 before:border before:border-secondary before:rounded-full before:bg-secondary"
            : "flex gap-2 items-center before:h-3 before:w-3 before:border before:border-secondary before:rounded-full before:duration-200 before:hover:bg-secondary"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/add-item"
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center before:h-3 before:w-3 before:border before:border-secondary before:rounded-full before:bg-secondary"
            : "flex gap-2 items-center before:h-3 before:w-3 before:border before:border-secondary before:rounded-full before:duration-200 before:hover:bg-secondary"
        }
      >
        Add Item
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/all-mobiles"
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center before:h-3 before:w-3 before:border before:border-secondary before:rounded-full before:bg-secondary"
            : "flex gap-2 items-center before:h-3 before:w-3 before:border before:border-secondary before:rounded-full before:duration-200 before:hover:bg-secondary"
        }
      >
        All Mobiles
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768 && setOpen(false);
    });
  });
  return (
    <header className=" py-5 relative">
      <Container>
        <nav className="flex justify-between items-center z-40">
          <ul className="md:flex hidden items-center gap-5 text-base font-medium">
            {linkList}
          </ul>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex h-9 w-9 active:scale-95 bg-white border rounded border-gray-300 shadow-sm items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Link
            className=" font-semibold md:text-3xl md:block hidden text-[26px]"
            style={{ letterSpacing: "-4px" }}
          >
            MobileMagnet
          </Link>

          <div className="flex items-center gap-6">
            <Link className="bg-white border active:scale-95 border-gray-300 p-1 px-4 rounded-2xl shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Link>
            <Link className="bg-secondary/90 active:scale-95 text-white border border-gray-900 p-1 px-4 rounded-2xl shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </Container>
      {/* Mobile Nav */}
      <div
        className={`bg-background z-[50] p-6  absolute top-0  h-60 shadow-md w-64 duration-200 ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <Link
            className=" font-semibold md:text-3xl  text-[26px]"
            style={{ letterSpacing: "-4px" }}
          >
            MobileMagnet
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden flex h-9 w-9 bg-white border rounded-full active:scale-95 border-gray-300 shadow-sm items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-5">{linkList}</ul>
      </div>
      {/* Mobile Nav overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-800/10 absolute top-0 left-0 h-screen w-full ${
          open || "hidden"
        }`}
      ></div>
    </header>
  );
};

export default Navbar;
