import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { TooltipProvider } from "@radix-ui/react-tooltip";

import Layout from "../Layout/layout";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function Blog() {
  return (
    <div>
      <Layout>
        <TooltipProvider>
          <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex  sm:gap-4 sm:py- sm:pl-4 mt-16">
              <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <div>
                  <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent ">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          className="sm:hidden"
                        >
                          <PanelLeft className="h-5 w-5" />
                          <span className="sr-only">Toggle Menu</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                          <Link
                            href="#"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                          >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Acme Inc</span>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                          >
                            <Home className="h-5 w-5" />
                            Dashboard
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                          >
                            <ShoppingCart className="h-5 w-5" />
                            Orders
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-foreground"
                          >
                            <Package className="h-5 w-5" />
                            Products
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                          >
                            <Users2 className="h-5 w-5" />
                            Customers
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                          >
                            <LineChart className="h-5 w-5" />
                            Settings
                          </Link>
                        </nav>
                      </SheetContent>
                    </Sheet>
                  </header>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
              <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Tabs defaultValue="all">
                  <div className="flex items-center w-full mb-4">
                    <div className=" flex justify-between  items-center w-full">
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        Blogs
                      </h3>
                      <div className="flex gap-2  items-center ">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 gap-1"
                            >
                              <ListFilter className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Filter
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>
                              Active
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Draft
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                              Archived
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 gap-1"
                        >
                          <File className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Export
                          </span>
                        </Button>
                        <div className="relative ml-auto flex-1 md:grow-0">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                          />
                        </div>
                        <Link href="/jobs">
                          <Button size="sm" className="h-8 gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                              Add Blog
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <TabsContent value="all">
                    <Card x-chunk="dashboard-06-chunk-0">
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Title</TableHead>
                              <TableHead className="hidden md:table-cell">
                                Views
                              </TableHead>
                              <TableHead>Status</TableHead>

                              <TableHead>
                                <span className="">Actions</span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Angular 17 New Features For Modern Web
                                Development!
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                25
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">Draft</Badge>
                              </TableCell>

                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      aria-haspopup="true"
                                      size="icon"
                                      variant="ghost"
                                    >
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">
                                        Toggle menu
                                      </span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                      Actions
                                    </DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Publish</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter>
                        <div className="text-xs text-muted-foreground">
                          Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                          blogs
                        </div>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </main>
            </div>
          </div>
        </TooltipProvider>
      </Layout>
    </div>
  );
}
