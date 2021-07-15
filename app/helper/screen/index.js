import { windowHeight, windowWidth } from "../../constants/variables";

/**
 * @param dimation {number}
 * @returns number
 */
export const customWidth = (dimation) => (windowWidth * dimation) / 100;

/**
 * @param dimation {number}
 * @returns number
 */
export const customHeight = (dimation) => (windowWidth * dimation) / 100;
