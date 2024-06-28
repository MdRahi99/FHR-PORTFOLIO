import { MdDashboardCustomize } from "react-icons/md";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { RiCodeBoxFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const sidebarItems = [
    {
        "name": "Overview",
        "route": "/",
        "icon": <MdDashboardCustomize className="text-2xl" />
    },
    {
        "name": "About Me",
        "route": "/about",
        "icon": <HiChatBubbleLeftEllipsis className="text-2xl" />
    },
    {
        "name": "Projects",
        "route": "/projects",
        "icon": <RiCodeBoxFill className="text-2xl" />
    },
    {
        "name": "Contact",
        "route": "/contact",
        "icon": <BiSolidContact className="text-2xl" />
    }
]

export default sidebarItems;