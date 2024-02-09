import { gsap } from "gsap";

export const entryAnimation = () => {
  const tl = gsap.timeline();
  tl.from("h1", { duration: 1, opacity: 0, y: 50 });
};
