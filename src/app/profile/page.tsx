import MainLayout from "@/components/mainLayout";
import { quick } from "@/config/fonts";

export default function ProfilePage() {
    return (
        <MainLayout>
            <p className={`${quick.className} text-white`}>
                This is Profile Page
            </p>
        </MainLayout>
    )
}