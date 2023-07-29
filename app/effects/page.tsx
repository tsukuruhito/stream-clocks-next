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
                <div className="relative w-4/5 h-full shadow-md" style={{ aspectRatio: 16 / 9 }}>
                    <CustomCanvas />
                </div>
                <div className="sidebar z-30 top-2 right-2 w-1/5 p-4 box-border bg-primary/0">
                    <Sidebar />
                </div>
            </div>
            <FloatLink />
        </div>
    );
}
export default particles;
