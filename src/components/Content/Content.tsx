// content.tsx

import entries from "../../data/entries";

const entriesList = entries.map((entry) => (
  <article key={entry.id}>
    <h3>{entry.title}</h3>
    <h4>{entry.date}</h4>
    <p>{entry.story}</p>
  </article>
));

function Content() {
  return (
    <main>
      <section className="uppercontainer">{entriesList}</section>
      <section className="lowercontainer">
        <article>
          <h3>This is a Another Container</h3>
          <p>More words coming soon...</p>
        </article>
      </section>
    </main>
  );
}

export default Content;
