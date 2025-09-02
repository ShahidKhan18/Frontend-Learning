import * as React from "react";
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  Home,
  RectangleHorizontalIcon,
  RouteIcon,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/Layout/nav-main";

import { NavUser } from "@/components/Layout/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

// This is sample data.
const data = {
  user: {
    name: "Shahid",
    email: "Shahid@email.com",
    avatar: "https://avatars.githubusercontent.com/u/91468616?v=4",
  },
  teams: [
    {
      name: "Frontend Learning",
      logo: GalleryVerticalEnd,
      plan: "React",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "React Theory",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Map Filter Reduce",
          url: "/reactTheory/mapFilterReduce",
        },
        {
          title: "Class Based Components",
          url: "/reactTheory/classBasedCounter",
        },
      ],
    },
    {
      title: "Machine Coding Round",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "2 Holy Grail Layout",
          url: "/machineCoding/2HolyGrailLayout",
        },
        {
          title: "3 Tabs",
          url: "/machineCoding/3tabs",
        },
        {
          title: "4 Accordian",
          url: "/machineCoding/4accordian",
        },
        {
          title: "5 Carousel",
          url: "/machineCoding/5carousel",
        },
        {
          title: "6 Pagination",
          url: "/machineCoding/6pagination",
        },
      ],
    },
    {
      title: "React Hook Form",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Form",
          url: "/rhf/form",
        },
      ],
    },
    {
      title: "React Router DOM",
      url: "#",
      icon: RouteIcon,
      items: [
        {
          title: "Login",
          url: "/rrd/login",
        },
        {
          title: "Dashbaord",
          url: "/rrd/dashboard",
        },
      ],
    },
    {
      title: "React Recoil",
      url: "#",
      icon: RectangleHorizontalIcon,
      items: [
        {
          title: "Basic",
          url: "/recoil/basic",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex gap-2 items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
         
            <SidebarTrigger className="" />
          
          <div className="flex-col flex text-left text-sm leading-tight overflow-hidden">
            <span className="truncate font-medium">{data.teams[0].name}</span>
            <span className="truncate text-xs">{data.teams[0].plan}</span>
          </div>
        </div>
      </SidebarHeader>
      <Separator />

      <SidebarContent>
        <ScrollArea className="h-full w-full rounded-md border">
          <NavMain items={data.navMain} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
