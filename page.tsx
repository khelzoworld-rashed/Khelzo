
export default function Home() {
  return (
    <main>
      <header className="container header">
        <a href="/" className="logo">
          KHEL<span>ZO</span>
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/players">Players</a>
          <a href="/clubs">Clubs</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <section className="hero container">
        <p className="eyebrow">THE WORLD OF FOOTBALL</p>

        <h1>
          EVERY PLAYER.
          <br />
          EVERY <span>LEGEND.</span>
        </h1>

        <p className="hero-text">
          Discover football players, explore legendary careers
          and experience the beautiful game like never before.
        </p>

        <form action="/players" method="GET" className="search-box">
          <input
            type="search"
            name="q"
            placeholder="Search football players..."
            aria-label="Search football players"
          />
          <button type="submit">SEARCH</button>
        </form>

        <div className="hero-links">
          <a href="/players?gender=men">MEN'S FOOTBALL</a>
          <a href="/players?gender=women">WOMEN'S FOOTBALL</a>
          <a href="/players?status=retired">LEGENDS</a>
        </div>
      </section>

      <section className="container intro">
        <p className="eyebrow">WELCOME TO KHELZO</p>
        <h2>Football lives here.</h2>
        <p>
          From rising stars to retired legends,
          explore the people behind the beautiful game.
        </p>
      </section>

      <footer className="container footer">
        <a href="/" className="logo">
          KHEL<span>ZO</span>
        </a>
        <p>© 2026 KHELZO. THE WORLD OF FOOTBALL.</p>
      </footer>
    </main>
  );
}
