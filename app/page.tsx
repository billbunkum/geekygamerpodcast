import Image from "next/image";
import Embed from "./components/_embed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Geeky Gamer Podcast</h1>

			<Embed />
    </main>
  );
}
