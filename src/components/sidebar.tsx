import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SearchInput from "./search";
import Link from "next/link";
import Player from "./player";

const sideBar = [
  {
    svg: <HomeOutlinedIcon htmlColor="#C0BDBB" />,
    name: "Home",
    url: "/dashboard",
  },
  {
    svg: <PeopleAltOutlinedIcon htmlColor="#C0BDBB" />,
    name: "Artists",
    url: "/artists",
  },
  {
    svg: <AudiotrackOutlinedIcon htmlColor="#C0BDBB" />,
    name: "Releases",
    url: "/releases",
  },
  {
    svg: <CalendarMonthOutlinedIcon htmlColor="#C0BDBB" />,
    name: "Events",
    url: "/events",
  },
  {
    svg: <MicNoneOutlinedIcon htmlColor="#C0BDBB" />,
    name: "Podcasts",
    url: "/podcasts",
  },
  {
    svg: <ShoppingCartOutlinedIcon htmlColor="#C0BDBB" />,
    name: "Store",
    url: "/store",
  },
  {
    svg: <ArticleOutlinedIcon htmlColor="#C0BDBB" />,
    name: "News",
    url: "/news",
  },
];

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

export default function Sidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-[#16151A] border-b border-[#8d8989]  ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex justify-between mx-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <a
                  href="https://flowbite.com"
                  className="flex ms-2 md:me-24 text-white items-center"
                >
                  <img src="./images/logo.png" alt="" className="h-10" />
                  <h1 className="text-[25px] font-semibold ">WavePlay</h1>
                  {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Flowbite
                </span> */}
                </a>
              </div>
              <div className="flex gap-14 items-center">
                <ul className="flex gap-10 text-[#C0BDBB] text-[18px]">
                  <li className="cursor-pointer">Profile</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Contacts</li>
                </ul>
                <SearchInput
                  placeholder="Artist, track or podcast"
                  onChange={() => {}}
                  value=""
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r-2 border-r-[#8d8989] -translate-x-full bg-[#16151A] border-black sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-fit px-10 pb-4 pt-10 overflow-y-auto bg-[#16151A] ">
          <ul className="space-y-2 font-medium flex flex-col gap-2">
            {sideBar.map((x) => (
              <li>
                <Link
                  href={x.url}
                  className="flex items-center p-2 text-gray-900 rounded-lg"
                >
                  {x.svg}
                  <span className="ms-3 text-[#C0BDBB]">{x.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] bg-[#8d8989] w-full mt-40"></div>
        <Player />
      </aside>
      <div className="pt-[73px] ml-[256px]">{children}</div>
    </div>
  );
}
