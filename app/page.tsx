import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Prototype Hub</h1>
      <p className="text-base opacity-80">
        A starting point for fast product experiments.
      </p>

      <div className="space-y-3">
        <Link className="underline" href="/examples/control-surface">
          Example: Control Surface
        </Link>
      </div>
    </main>
  );
}
