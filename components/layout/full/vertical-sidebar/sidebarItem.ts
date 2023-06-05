import {
  ApertureIcon,
  CopyIcon,
  LayoutDashboardIcon,
  LoginIcon,
  MoodHappyIcon,
  UserExclamationIcon,
  TypographyIcon,
  UserPlusIcon,
  UsersIcon,
  DeviceDesktopIcon,
  ReportAnalyticsIcon,
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Trang chủ" },
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  { header: "Quản lý người dùng" },
  {
    title: "Danh sách người dùng",
    icon: UsersIcon,
    to: "/users",
  },
  {
    title: "Danh sách nhóm quyền",
    icon: UserExclamationIcon,
    to: "/groups",
  },
  { header: "Quản lý thiết bị" },
  {
    title: "Danh sách thiết bị",
    icon: DeviceDesktopIcon,
    to: "/devices",
  },
  { header: "Quản lý báo cáo" },
  {
    title: "Báo Cáo",
    icon: ReportAnalyticsIcon,
    to: "/report",
  },
  { header: "Quản lý khách hàng" },
  {
    title: "Danh sách khách hàng",
    icon: UsersIcon,
    to: "/us",
  },
  { header: "Trang đăng kí/ đăng nhập" },
  {
    title: "đăng nhập",
    icon: LoginIcon,
    to: "/auth/login",
  },
  {
    title: "đăng kí",
    icon: UserPlusIcon,
    to: "/auth/register",
  },
  { header: "Extra" },
  {
    title: "Icons",
    icon: MoodHappyIcon,
    to: "/icons",
  },
  {
    title: "Sample Page",
    icon: ApertureIcon,
    to: "/sample-page",
  },
  {
    title: "Typography",
    icon: TypographyIcon,
    to: "/ui/typography",
  },
  {
    title: "Shadow",
    icon: CopyIcon,
    to: "/ui/shadow",
  },
];

export default sidebarItem;
