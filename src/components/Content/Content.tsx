// content.tsx

const entries = [
  {
    id: 1,
    title: "Test",
    story: "This is a test.",
  },
  {
    id: 1,
    title: "Test 2",
    story: "This is test 2.",
  },
];

const entriesList = entries.map((entry) => (
  <article>
    <h3>{entry.title}</h3>
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
