
type PlayerPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlayerPage({
  params
}: PlayerPageProps) {
  const { slug } = await params;

  const playerName = slug
    .split("-")
    .map((word) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return (
    <main className="container player-profile">
      <header className="profile-header">
        <a href="/" className="logo">
          KHEL<span>ZO</span>
        </a>
        <a href="/players">← All Players</a>
      </header>

      <section className="profile-content">
        <p className="eyebrow">PLAYER PROFILE</p>
        <h1>{playerName}</h1>

        <div className="profile-placeholder">
          <span>⚽</span>
          <h2>Player Information Coming Soon</h2>
          <p>
            Verified biography, career history, statistics
            and achievements will appear here.
          </p>
        </div>
      </section>
    </main>
  );
}
