
export const metadata = {
  title: "All Football Players",
  description:
    "Explore men's and women's football players, active professionals and retired legends on KHELZO."
};

export default function PlayersPage() {
  return (
    <main className="players-page">
      <header className="container players-header">
        <a href="/" className="logo">
          KHEL<span>ZO</span>
        </a>
        <a href="/">← Back to Home</a>
      </header>

      <section className="container players-content">
        <p className="eyebrow">THE WORLD OF FOOTBALL</p>
        <h1>ALL <span>PLAYERS</span></h1>

        <p className="players-description">
          Discover footballers from around the world.
          From today's stars to the legends of the game.
        </p>

        <form action="/players" method="GET" className="players-search">
          <input
            type="search"
            name="q"
            placeholder="Search by player name..."
            aria-label="Search by player name"
          />
          <button type="submit">SEARCH</button>
        </form>

        <form action="/players" method="GET" className="player-filters">
          <label>
            Gender
            <select name="gender" defaultValue="">
              <option value="">All players</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </label>

          <label>
            Career status
            <select name="status" defaultValue="">
              <option value="">All statuses</option>
              <option value="active">Active</option>
              <option value="retired">Retired</option>
            </select>
          </label>

          <button type="submit">APPLY FILTERS</button>
        </form>

        <div className="players-empty">
          <span className="empty-icon">⚽</span>
          <h2>Player Database Coming Soon</h2>
          <p>
            We're building a verified global football
            player database for KHELZO.
          </p>
          <p>
            Player profiles and search results will appear here
            as verified data becomes available.
          </p>
        </div>
      </section>
    </main>
  );
}
