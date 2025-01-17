import { Link } from "react-router";
import { useSession } from "../context/SessionProvider";

const ProtectedPage = () => {
  const { session } = useSession();

  return (
    <main>
      <Link className="home-link" to="/">
        Home
      </Link>
      <section className="main-container">
        <h1>This is a Protected Page</h1>
        <p>Current User: {session?.user.email || "None"}</p>
      </section>
    </main>
  );
};

export default ProtectedPage;
