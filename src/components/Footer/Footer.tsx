// footer.tsx

function Footer({ copyrightYear }: { copyrightYear: number }) {
  return (
    <footer>
      <section>
        <p>&copy; {copyrightYear} Jeffery D Mitchell All Rights Reserved</p>
        <a href="https://github.com/sentinel1909/typescript-react-diary">
          Code for this site
        </a>
      </section>
    </footer>
  );
}

export default Footer;
