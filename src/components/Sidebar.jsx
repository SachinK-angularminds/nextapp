import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  BriefcaseBusiness,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  SquarePen,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Sidebar() {
  const router = useRouter();
  return (
    <>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/home"
                className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8  ${
                  router.pathname === "/home"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Home</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/blogs"
                className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8  ${
                  router.pathname === "/blogs"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <SquarePen className="h-5 w-5" />
                <span className="sr-only">Blogs</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Blogs</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/jobs"
                className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8  ${
                  router.pathname === "/jobs"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <BriefcaseBusiness className="h-5 w-5" />
                <span className="sr-only">Jobs</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Jobs</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/categories"
                className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8  ${
                  router.pathname === "/categories"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/media"
                className={`flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8  ${
                  router.pathname === "/media"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Sheet>
                  <SheetTrigger>
                    {" "}
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  );
}

export default Sidebar;
