import { quick } from "@/config/fonts";

export default function MainLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${quick.className} relative overflow-hidden w-full h-screen`}>
            <img className="w-full h-full object-cover" src="https://4kwallpapers.com/images/wallpapers/gradient-background-6016x3384-11027.jpg" alt="" />
            <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50">
                {children}
            </div>
        </div>
    )
  }
