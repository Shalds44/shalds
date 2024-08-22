import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Salut 👋</h1>
      <div>
        Bienvenue sur mon site en qwik
        <br />
        Déploiement continu qui fonctionne enfin ! Sacré réseau docker
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
