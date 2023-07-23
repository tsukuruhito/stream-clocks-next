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
            <CustomCanvas />
            <FloatLink />
            <div className="fixed z-30 top-2 right-2">
                <Sidebar />
            </div>
        </div>
    );
}
export default particles;
