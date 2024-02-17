import { quick } from "@/config/fonts";

export default function MainLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${quick.className} relative overflow-hidden w-full h-screen`}>
            <img className="w-full h-full object-cover" src="https://e1.pxfuel.com/desktop-wallpaper/432/672/desktop-wallpaper-dark-tree-sunset-landscape-art-background-20fefb-retro-sunset-dark.jpg" alt="" />
            <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50">
                {children}
            </div>
        </div>
    )
  }
