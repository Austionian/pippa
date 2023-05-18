import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex items-center justify-center h-screen w-screen flex-col">
      <h1 class="p-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        DUMB BITCH NAMED PIPPA .com
      </h1>
      <img src={`/images/pippa.png`} alt="pippa" class="h-100 w-100" />
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
