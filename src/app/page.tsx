import { CloseoutDemo } from "@/components/demo/closeout-demo";
import { Logo } from "@/components/logo";
import { PhoneFrame } from "@/components/phone-frame";

export default function Home() {
  return (
    <div className="marketing-bg relative min-h-screen overflow-x-hidden">
      <div className="grid-haze pointer-events-none absolute inset-0" />
      <div className="animate-glow pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.22),transparent_70%)] blur-2xl" />
      <div className="animate-glow pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(42,111,173,0.25),transparent_70%)] blur-2xl" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Logo wordmarkClassName="text-white" />
        <a
          href="#demo"
          className="rounded-full bg-[var(--gold)] px-4 py-2 text-[13px] font-semibold text-[var(--ink)] transition hover:brightness-105"
        >
          Try the demo
        </a>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-10">
          <div className="animate-rise max-w-xl">
            <p className="mb-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
              Closeout Desk
            </p>
            <h1 className="text-xl font-medium leading-snug text-[#c9d7ea] sm:text-2xl">
              The night-close pack waiting when staff leave.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#9aadc4]">
              POS, DoorDash, Uber Eats, tip split, and fee flags — finished by
              staff exit. You count cash, clear the reds, mark the night closed,
              and go home earlier.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[var(--ink)] transition hover:bg-[#e8eef6]"
              >
                Open sample night
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-[14px] font-medium text-[#c9d7ea] transition hover:border-white/40 hover:text-white"
              >
                How Alex&apos;s night works
              </a>
            </div>
          </div>

          <div id="demo" className="animate-rise-delay animate-float scroll-mt-8">
            <PhoneFrame>
              <CloseoutDemo />
            </PhoneFrame>
            <p className="mt-4 text-center text-[12px] text-[#7f93ab]">
              Live demo · Shogun Sushi, Citrus Heights · edit freely
            </p>
          </div>
        </section>

        <section
          id="how"
          className="animate-rise-delay-2 border-t border-white/10 bg-black/20"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--gold)]">
              Pilot night
            </p>
            <h2 className="mt-2 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
              One job after the crew walks out
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#9aadc4]">
              Closeout Desk is not a full restaurant OS, not payroll, and not a
              chef replacement. It is the digital pack ready when staff leave —
              so owners only touch cash and reds.
            </p>

            <ol className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  time: "~9:00 PM",
                  title: "House closes",
                  body: "Shogun locks the dining room. Tickets wind down; channels keep totaling in the background.",
                },
                {
                  time: "~10:00 PM",
                  title: "Staff out",
                  body: "Digital work is done: dine-in/takeout, DoorDash, Uber Eats, card tip split, fee and clawback flags.",
                },
                {
                  time: "~11:00 PM",
                  title: "Alex closes",
                  body: "He is not cooking. He counts the drawer, clears or disputes flags, marks the night closed, and leaves earlier.",
                },
              ].map((step) => (
                <li
                  key={step.time}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-[12px] font-semibold text-[var(--gold)]">
                    {step.time}
                  </p>
                  <p className="mt-2 text-[16px] font-semibold text-white">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#9aadc4]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Logo
            markClassName="h-7 w-7"
            wordmarkClassName="text-sm text-white"
          />
          <p className="text-[12px] text-[#7f93ab]">
            Interactive product demo · sample data only · no POS connection
          </p>
        </div>
      </footer>
    </div>
  );
}
