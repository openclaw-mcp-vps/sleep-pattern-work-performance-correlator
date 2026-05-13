export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Health &amp; Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Sleep Better,{" "}
          <span className="text-[#58a6ff]">Perform Better</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SleepSync connects your sleep tracker with Google Calendar, RescueTime, and Toggl to reveal exactly how your sleep drives — or drains — your work performance.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Integrates with Fitbit, Oura, Apple Health &amp; more</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🌙", title: "Sleep Metrics", desc: "Sync deep sleep, REM, HRV, and sleep score from your wearable." },
          { icon: "📊", title: "Productivity Correlation", desc: "AI maps your sleep data against focus time, meetings, and output." },
          { icon: "🎯", title: "Optimal Schedule", desc: "Get a personalized sleep window recommendation for peak performance." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to optimize sleep for work</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited sleep + productivity syncs",
              "AI-powered schedule recommendations",
              "Fitbit, Oura &amp; Apple Health support",
              "Google Calendar, RescueTime, Toggl",
              "Weekly performance reports"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which sleep trackers are supported?",
              a: "SleepSync works with Fitbit, Oura Ring, and Apple Health. More integrations are added regularly."
            },
            {
              q: "How does the AI find correlations?",
              a: "We analyze 30+ days of sleep metrics alongside your calendar density, focus blocks, and task completion rates to surface statistically significant patterns."
            },
            {
              q: "Is my health data secure?",
              a: "All data is encrypted in transit and at rest. We never sell your data and you can delete your account at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} SleepSync. All rights reserved.
      </footer>
    </main>
  );
}
