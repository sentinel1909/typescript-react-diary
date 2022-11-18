// header.tsx

function Header({ currentDate }: { currentDate: string }) {
  return (
    <header>
      <h1>TypeScript Learning Diary</h1>
      <h2>Today is: {currentDate} </h2>
    </header>
  );
}

export default Header;
