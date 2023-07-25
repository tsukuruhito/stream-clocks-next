import FloatLink from "../../components/FloatLink";
import CustomCanvas from "../../components/three/CustomCanvas";
import Sidebar from "../../components/three/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stream Tools | Effects",
    description:
        "配信画面の装飾に使える背景エフェクトです。 This is a background effect that can be used to decorate the distribution screen.",
};
function particles() {
    return (
        <div className="relative">
            <div className="flex gap-2">
                <CustomCanvas />
                <Sidebar />
            </div>
                <FloatLink />
        </div>
    );
}
export default particles;
