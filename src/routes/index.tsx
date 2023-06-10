import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { animate } from "motion";

export default component$(() => {
  useVisibleTask$(() => {
    const img = document.querySelector("#pippa");
    if (img) {
      animate(
        img,
        {
          transform: [
            "rotate(0deg)",
            "rotate(-45deg)",
            "rotate(-90deg)",
            "rotate(-135deg)",
            "rotate(-180deg)",
            "rotate(-225deg)",
            "rotate(-270deg)",
            "rotate(-315deg)",
            "rotate(-360deg)",
          ],
        },
        {
          duration: 7,
          easing: "ease-in-out",
          repeat: Infinity,
          delay: 0.3,
        }
      );
    }
  });

  return (
    <div class="flex items-center justify-center h-screen w-screen flex-col">
      <h1 class="p-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        DUMB BITCH NAMED PIPPA .com
      </h1>
      <img
        src={`/images/pippa.png`}
        alt="dumb bitch"
        class="h-[75%] w-[75%]"
        id="pippa"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "A dumb bitch named Pippa",
  meta: [
    {
      name: "description",
      content: "Pippa is a dumb bitch",
    },
  ],
};
