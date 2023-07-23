import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const storageClockTypeAtom = atomWithStorage("clockType", "noframe");
export const storageClockColorAtom = atomWithStorage("clockColor", "#47a8ca");
export const clockTypeAtom = atom("noframe");
export const clockColorAtom = atom("#47a8ca");

export const particleColorAtom = atom("#ff0000");
export const speedControlAtom = atom(0.05);
export const particleTypeAtom = atom("sphere");
export const particleAmountAtom = atom(300);
export const particleOpacityAtom = atom(0.5);