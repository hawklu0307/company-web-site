import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Updated to use <img> instead of next/image due to bundler fs issue
const logoPath = "/logo.png";

const translations = {
  zh: {
    title: "STINGER 無人機",
    subtitle: "高速影像傳輸．極致輕巧設計．次世代 5G NTN 技術",
    cta: "了解更多",
    features: [
      {
        title: "1080p H.265 圖傳",
        desc: "即時高清畫面，延遲極低，無與倫比的飛行體驗。"
      },
      {
        title: "Snapdragon X75 晶片",
        desc: "支援 5G RedCap 與 NTN，穿透性與連線穩定性俱佳。"
      },
      {
        title: "極簡緊湊設計",
        desc: "輕巧可穿戴，專為專業任務打造的靈活平台。"
      }
    ]
  },
  en: {
    title: "STINGER Drone",
    subtitle: "Ultra-fast video transmission. Compact wearable design. Next-gen 5G NTN technology.",
    cta: "Learn More",
    features: [
      {
        title: "1080p H.265 Transmission",
        desc: "Real-time HD visuals with ultra-low latency for an unmatched flight experience."
      },
      {
        title: "Snapdragon X75 Chipset",
        desc: "Supports 5G RedCap and NTN for excellent signal penetration and stable connection."
      },
      {
        title: "Minimal Compact Design",
        desc: "Wearable and lightweight, built for professional and agile operations."
      }
    ]
  }
};

export default function HomePage() {
  const router = useRouter();
  const lang = router.locale?.startsWith("en") ? "en" : "zh";
  const t = translations[lang];

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Language Toggle */}
      <div className="absolute top-4 right-6 z-50">
        <Button
          variant="ghost"
          className="text-gray-400 hover:text-white"
          onClick={() => {
            const newLocale = lang === "zh" ? "en" : "zh";
            router.push(router.pathname, router.asPath, { locale: newLocale });
          }}
        >
          {lang === "zh" ? "EN" : "中文"}
        </Button>
      </div>

      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/8KgyedANRTg?autoplay=1&mute=1&loop=1&playlist=8KgyedANRTg&controls=0&modestbranding=1&showinfo=0"
            title="STINGER Banner Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full backdrop-brightness-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <img
              src={logoPath}
              alt="Stinger Logo"
              width={150}
              height={150}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-2xl text-gray-300 max-w-xl"
          >
            {t.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10"
          >
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
              {t.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="bg-neutral-900 py-20 px-6 md:px-20 grid md:grid-cols-3 gap-10">
        {t.features.map((f, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}