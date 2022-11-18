// content.tsx

import entries from "../../data/entries";

const entriesList = entries.map((entry) => (
  <article>
    <h3>{entry.title}</h3>
    <h4>{entry.date}</h4>
    <p>{entry.story}</p>
  </article>
));

function Content() {
  return (
    <main>
      <section>{entriesList}</section>
    </main>
  );
}

export default Content;
