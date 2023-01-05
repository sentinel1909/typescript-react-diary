// header.tsx

function Header({ currentDate }: { currentDate: string }) {
  return (
    <header>
      <h1>jeff-mitchell.dev</h1>
      <h2>TypeScript + Rust = Love</h2>
      <p>Today is: {currentDate}</p>
    </header>
  );
}

export default Header;
