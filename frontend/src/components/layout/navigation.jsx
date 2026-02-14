// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Flower2 } from "lucide-react";
// import { cn } from "@/lib/utils";

// const navLinks = [
//   { path: "/", label: "Home" },
//   { path: "/about", label: "About" },
//   { path: "/vision", label: "Our Vision" },
//   { path: "/how-it-works", label: "How It Works" },
//   { path: "/features", label: "Features" },
//   { path: "/why-aaharya", label: "Why Aaharya" },
// ];

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
//       <nav className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-xl lg:text-2xl font-serif font-semibold text-primary hover:opacity-80 transition-opacity"
//           >
//             <Flower2 className="w-6 h-6 lg:w-7 lg:h-7 text-lavender-400" />
//             <span>Aaharya</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <Link key={link.path} to={link.path}>
//                 <Button
//                   variant="nav"
//                   size="sm"
//                   className={cn(
//                     "transition-all duration-200",
//                     location.pathname === link.path &&
//                       "text-primary bg-sage-50 border-b-2 border-primary"
//                   )}
//                 >
//                   {link.label}
//                 </Button>
//               </Link>
//             ))}
//           </div>

//           {/* CTA Button - Desktop */}
//           <div className="hidden lg:block">
//             <Link to="/onboarding">
//               <Button variant="hero" size="default">
//                 Start Your Journey
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={cn(
//             "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
//             isOpen ? "max-h-[400px] pb-4" : "max-h-0"
//           )}
//         >
//           <div className="flex flex-col gap-2 pt-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//               >
//                 <Button
//                   variant="nav"
//                   size="default"
//                   className={cn(
//                     "w-full justify-start",
//                     location.pathname === link.path &&
//                       "text-primary bg-sage-50 border-l-4 border-primary"
//                   )}
//                 >
//                   {link.label}
//                 </Button>
//               </Link>
//             ))}

//             <Link to="/onboarding" onClick={() => setIsOpen(false)}>
//               <Button variant="hero" size="lg" className="w-full mt-2">
//                 Start Your Journey
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

export const Navigation = () => {
    return (
        <div>
            <h1> nav bar </h1>
        </div>
    );
}
