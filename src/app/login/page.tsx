import MainLayout from "@/components/mainLayout";
import { quick } from "@/config/fonts";

export default function LoginPage() {
    return (
        <MainLayout>
            <div className="w-1/2 p-5 bg-white/10 backdrop-blur-md  rounded-lg">
                <div className="grid grid-cols-2 divide-x-2 divide-white/40">
                    <div className="w-full col-span-2 md:col-span-1 pr-5">
                        <h1 className="text-xl font-extralight">
                            Sign in with your Account<span className="font-bold text-orange-600">.</span>
                        </h1>
                    </div>
                    <div className="hidden md:block w-full md:pl-5">
                        <h1 className="text-xl font-extralight">
                            Create your Account<span className="font-bold text-orange-600">.</span>
                        </h1>

                    </div>
                </div>
            </div>

        </MainLayout>
    )
}