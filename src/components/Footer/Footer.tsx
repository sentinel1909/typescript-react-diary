// footer.tsx

function Footer({ copyrightYear }: { copyrightYear: number }) {
  return (
    <footer>
      <section>
        <p>&copy; {copyrightYear} Jeffery D Mitchell All Rights Reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
