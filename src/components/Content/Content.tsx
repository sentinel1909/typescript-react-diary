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
          <h3>About Me</h3>
          <p>Hello, my name is Jeff, welcome to my internet home!</p>
          <p>
            Back in the eighties, I used to record mix-tapes for my family with
            stories about what I was up to.
          </p>
          <p>This site will have a little of that flavour.</p>
          <p>
            I'm a self-professed IT junkie who caught the bug to re-learn to
            code. My focus is TypeScript and Rust.
          </p>
          <p>
            Below, in the footer, you'll find links to things that I've dabbled
            with and made.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Content;
