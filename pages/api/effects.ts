import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function Effects(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "GET":
            // Get data from your database
            res.status(200).json({ name: "John Doe" });
            break;
        case "POST":
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
