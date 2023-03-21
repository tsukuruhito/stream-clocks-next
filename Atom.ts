import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const selectedTypeAtom = atom("noframe");
export const checkedIndexAtom = atom(0);
export const neonAtom = atom(0);
export const geometoryAtom = atom(0);
export const apexAtom = atom(0);
export const retroAtom = atom(0);
export const gradientAtom = atom(0);

export const particleColorAtom = atom("#ff0000");
export const speedControlAtom = atom(0.05);
export const particleTypeAtom = atom("sphere");
export const particleAmountAtom = atom(300);
export const particleOpacityAtom = atom(0.5);
export const storageColorAtom = atomWithStorage("particleColor", "#ffffff");
