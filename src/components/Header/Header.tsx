// header.tsx

function Header({ currentDate }: { currentDate: string }) {
  return (
    <header>
      <h1>TypeScript Learning Diary</h1>
      <p>Today is: {currentDate}</p>
    </header>
  );
}

export default Header;
