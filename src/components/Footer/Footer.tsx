// footer.tsx

function Footer({ copyrightYear }: { copyrightYear: number }) {
  return (
    <footer>
      <section>
        <p>&copy; {copyrightYear} Jeffery D Mitchell All Rights Reserved</p>
        <a href="https://github.com/sentinel1909"> My GitHub</a> |
        <a href="https://sensational-dragon-260c8e.netlify.app/">
          {" "}
          NASA Imagery Viewer
        </a>{" "}
        |
        <a href="https://crustyrustacean.vercel.app/"> Crusty Rustacean Blog</a>
      </section>
    </footer>
  );
}

export default Footer;
