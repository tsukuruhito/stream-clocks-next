import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Stream Tools";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    backgroundImage:
                        "linear-gradient(135deg, #7dc7f8 10%, #027cd9 100%)",
                    color: "#f3f3f3",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0 2rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3rem 4rem 2.5rem",
                        backgroundColor: "#181b29",
                        justifyContent: "space-between",
                        borderRadius: "10px",
                        width: "100%",
                        height: "90%",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "4rem",
                            fontWeight: 900,
                            marginBottom: "1rem",
                        }}
                    >
                        Stream Tools
                    </h1>
                </div>
            </div>
        )
    );
}
