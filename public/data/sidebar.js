import { FiHome, FiUser, FiCode, FiMessageSquare } from "react-icons/fi";

const sidebarItems = [
    {
        "name": "Overview",
        "route": "/",
        "icon": <FiHome className="text-2xl" />
    },
    {
        "name": "About Me",
        "route": "/about",
        "icon": <FiUser className="text-2xl" />
    },
    {
        "name": "Projects",
        "route": "/projects",
        "icon": <FiCode className="text-2xl" />
    },
    {
        "name": "Contact",
        "route": "/contact",
        "icon": <FiMessageSquare className="text-2xl" />
    }
]

export default sidebarItems;