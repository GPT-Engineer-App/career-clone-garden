import { Home, Briefcase, Info, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Jobs",
    to: "/jobs",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Jobs component when created
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual About component when created
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Contact component when created
  },
];
