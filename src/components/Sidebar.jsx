import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Schools,
    CalendarCheck,
    ClipboardList,
    Wallet,
    BookOpen,
    Settings,
    LogOut,
    ChevronDown,
} from "lucide-react";

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Students", icon: Users },
    { label: "Teachers", icon: GraduationCap },
    { label: "Classes & Subjects", icon: Schools },
    { label: "Attendance", icon: CalendarCheck },
    { label: "Examinations & Results", icon: ClipboardList },
    { label: "Fees & Payments", icon: Wallet },
];

export default function Sidebar() {
    return(
        <aside className="w-64 bg-white shadow-md">
            <div className="p-4">
                <h1 className="text-xl font-bold">School Management</h1>
            </div>
            <nav className="p-4">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <item.icon className="mr-3" />
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </aside>
    )
}