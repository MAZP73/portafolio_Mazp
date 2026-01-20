import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Antigravity from "./components/Antigravity";
import Home from "./pages/home";
import StartPage from "./components/startpage";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <StartPage onFinish={() => setLoaded(true)} />}

      {loaded && (
        <BrowserRouter>

          <div className="fixed inset-0 z-0 pointer-events-none">
            <Antigravity
              count={300}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.05}
              color="#000000"
              autoAnimate={true}
              particleVariance={1}
            />
          </div>

          <div className="relative z-10 pointer-events-auto">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
          </div>

          <a
            href="https://wa.me/573177411235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
          >
            <MessageCircle size={28} />
          </a>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
