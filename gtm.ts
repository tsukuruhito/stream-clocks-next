export const googleTagManagerId =
    process.env.GTM_ID || "";

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}
