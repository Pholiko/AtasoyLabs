import { useState, useEffect } from 'react'
import { Menu, Clock, TrendingDown, Users, Zap, RefreshCw, TrendingUp, ArrowRight } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 text-2xl font-bold tracking-tight">Atasoy<span className="text-[#c28b17]">Labs</span>.</span>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-2 py-2 items-center gap-1 shadow-sm z-50">
          <button className="text-gray-700 hover:bg-black/5 hover:text-gray-900 transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Home</button>
          <button className="text-gray-700 hover:bg-black/5 hover:text-gray-900 transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Über uns</button>
          <button className="text-gray-700 hover:bg-black/5 hover:text-gray-900 transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Painter AI</button>
          <button className="text-gray-700 hover:bg-black/5 hover:text-gray-900 transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Website Auditor</button>
          <button className="text-gray-700 hover:bg-black/5 hover:text-gray-900 transition-colors px-4 py-1.5 rounded-full text-sm font-medium">Kontakt</button>
        </div>

        <div className="hidden md:block w-24">
          {/* Spacer for flex-between balance */}
        </div>
        
        <div className="md:hidden">
            <Menu className="text-gray-900 w-6 h-6" />
        </div>
      </nav>

      {/* Fixed Background Video */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover hero-zoom grayscale sepia-[0.3] opacity-90"
        >
          <source src="/15404923_1920_1080_60fps.mp4" type="video/mp4" />
        </video>
        {/* Warm overlay to match the brand */}
        <div className="absolute inset-0 bg-[#fffdfa]/20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-transparent z-10" style={{ height: '100dvh' }}>
        
        {/* Headline - Fixed upper position, away from nav */}
        <h1 className="absolute top-[20%] sm:top-[22%] left-0 w-full flex flex-col items-center text-center px-5 pointer-events-none z-50 text-gray-900 leading-[1.1]">
          <span className="block font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight hero-anim hero-reveal" style={{ animationDelay: '0.1s' }}>Prozesse fehlerfrei.</span>
          <span className="block font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight mt-1 sm:mt-2 hero-anim hero-reveal" style={{ animationDelay: '0.2s' }}>
            Komplett <span className="text-[#c28b17]">automatisiert.</span>
          </span>
        </h1>

        {/* Subtext - Fixed lower position, below the waves */}
        <div className="absolute bottom-[22%] sm:bottom-[25%] left-0 w-full flex justify-center px-5 hero-anim hero-fade z-50" style={{ animationDelay: '0.4s' }}>
          <p className="max-w-2xl text-center text-base sm:text-xl text-gray-700 font-medium leading-relaxed">
            Schluss mit <span className="text-[#c28b17]">manueller</span> Dateneingabe. Wir digitalisieren die Zeitfresser in Ihrem Betrieb durch maßgeschneiderte Software-Lösungen.
          </p>
        </div>

        {/* Button - Directly below subtext */}
        <div className="absolute bottom-[10%] sm:bottom-[12%] left-0 w-full flex justify-center px-5 hero-anim hero-fade z-50 pointer-events-auto" style={{ animationDelay: '0.6s' }}>
          <button className="bg-[#c28b17] hover:bg-[#a67512] text-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#c28b17]/20">
            Gespräch vereinbaren
          </button>
        </div>
      </section>

      {/* Subsection 1: Das unerkannte Problem */}
      <section className="relative z-20 py-24 px-6 sm:px-12 md:px-24 bg-transparent border-b border-gray-900/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-[#c28b17] font-bold uppercase tracking-wider text-sm mb-4">Das unerkannte Problem</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Der eigentliche Engpass sind <span className="text-[#c28b17]">manuelle</span> Prozesse.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Unternehmen haben heute unzählige, teils extrem komplexe Abläufe. Zu vieles wird noch manuell abgetippt oder in fehleranfälligen Excellisten verwaltet.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 hover:-translate-y-1 transition-transform flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#fdfaf3] border border-[#f5ead2] flex items-center justify-center mb-6 text-[#c28b17]">
                        <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-[1.15rem] font-bold text-gray-900 mb-4 tracking-tight">Repetitive Aufgaben</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                        Wertvolle Mitarbeiter verbringen Stunden mit Fleißarbeiten, Datenübertragung und Copy-Paste, anstatt echte Wertschöpfung zu betreiben.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 hover:-translate-y-1 transition-transform flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#fdfaf3] border border-[#f5ead2] flex items-center justify-center mb-6 text-[#c28b17]">
                        <TrendingDown className="w-6 h-6" />
                    </div>
                    <h3 className="text-[1.15rem] font-bold text-gray-900 mb-4 tracking-tight">Reibungsverluste</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                        Komplexe Tools und unübersichtliche Prozesse verlangsamen das gesamte Team und führen zu unnötigen Fehlern in der Abwicklung.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 hover:-translate-y-1 transition-transform flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#fdfaf3] border border-[#f5ead2] flex items-center justify-center mb-6 text-[#c28b17]">
                        <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-[1.15rem] font-bold text-gray-900 mb-4 tracking-tight">Fachkräftemangel</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                        Es wird immer schwerer, qualifiziertes Personal zu finden. Wer seine aktuellen Leute mit Routineaufgaben blockiert, verliert Potenzial.
                    </p>
                </div>
            </div>
        </div>
      </section>
      
      {/* Subsection 2: Warum AtasoyLabs? */}
      <section className="relative z-20 py-24 px-6 sm:px-12 md:px-24 bg-transparent border-b border-gray-900/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Warum AtasoyLabs?</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Einfache, schlanke Software. Moderne Unternehmen brauchen so wenig Reibung wie möglich, um maximale Effizienz zu erreichen. Wir bauen digitale Automatismen, die sich nahtlos in Ihren Alltag einfügen und die lästigen Fleißarbeiten übernehmen.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 hover:-translate-y-1 transition-transform text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-6 text-gray-900 shadow-sm">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-[1.15rem] font-bold text-gray-900 mb-4 tracking-tight">Digitale Automatisierung</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                        Reduzieren Sie fehleranfällige und manuelle Aufgaben durch zuverlässige Skripte und moderne Software-Schnittstellen.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 hover:-translate-y-1 transition-transform text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-6 text-gray-900 shadow-sm">
                        <RefreshCw className="w-6 h-6" />
                    </div>
                    <h3 className="text-[1.15rem] font-bold text-gray-900 mb-4 tracking-tight">Flaschenhälse beseitigen</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                        Wir analysieren Ihre bestehenden Prozesse und identifizieren Flaschenhälse für maximale Effizienz.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-xl shadow-gray-200/20 hover:-translate-y-1 transition-transform text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-6 text-gray-900 shadow-sm">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-[1.15rem] font-bold text-gray-900 mb-4 tracking-tight">Skalierbare Infrastruktur</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                        Bauen Sie auf einer Infrastruktur, die mit Ihrem Unternehmen wächst. Zukunftssicher und robust.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-24 px-6 sm:px-12 md:px-24 bg-[#fffdfa]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Bereit für den nächsten Schritt?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen voranbringen können.
            </p>
            <button className="bg-[#c28b17] hover:bg-[#a67512] text-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#c28b17]/20 mx-auto">
                Jetzt Kontakt aufnehmen
            </button>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="relative z-20 bg-[#232528] pt-24 pb-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="md:col-span-2">
                    <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">Atasoy<span className="text-[#c28b17]">Labs</span>.</h3>
                    <p className="text-gray-400 text-[15px] max-w-sm leading-relaxed">
                        Wir befreien Unternehmen von manueller Routine.
                    </p>
                </div>
                <div>
                    <h4 className="text-gray-300 font-semibold text-sm mb-6 uppercase tracking-wider">Links</h4>
                    <ul className="flex flex-col gap-4 text-[15px] text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Painter AI</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Website Auditor</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-300 font-semibold text-sm mb-6 uppercase tracking-wider">Rechtliches</h4>
                    <ul className="flex flex-col gap-4 text-[15px] text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-8 border-t border-gray-700/50 text-center text-sm text-gray-400">
                <p>&copy; 2026 AtasoyLabs. Alle Rechte vorbehalten.</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default App
