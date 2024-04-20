import Link from "next/link";
import svg1 from "../images/svg/whole-foods-1.svg";

type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface Props {
  setShowNavbarHamburgerMenu: SetToggleMenuType;
  setShowLoginModal: SetToggleMenuType;
}

export default function NavbarDropdown({
  setShowNavbarHamburgerMenu,
  setShowLoginModal,
}: Props) {
  return (
    <div className="lg:hidden absolute -top-6 inset-x-0 p-2 transition transform origin-top-left z-40">
      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <img src={svg1.src} alt="" />
          </div>
          <div className="-mr-2">
            <button
              onClick={() => setShowNavbarHamburgerMenu(false)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Recipe
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About us
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Products
          </a>

          <Link
            href=""
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setShowLoginModal(true)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
