// content.tsx

import entries from "../../data/entries";

const entriesList = entries.map((entry) => (
  <article>
    <h3>{entry.title}</h3>
    <h4>{entry.date}</h4>
    <p>{entry.story}</p>
  </article>
));

function Content({ currentDate }: { currentDate: string }) {
  return (
    <main>
      <section>
        <h2>This is the content area</h2>
        <p>Today is: {currentDate} </p>
        {entriesList}
      </section>
    </main>
  );
}

export default Content;
