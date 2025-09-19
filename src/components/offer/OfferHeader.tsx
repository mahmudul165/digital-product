import { motion, useAnimation } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { useEffect } from "react";

export default function DigitalBundlePage() {
  // Animate background gradient
  const bgControls = useAnimation();
  useEffect(() => {
    bgControls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 12, repeat: Infinity, ease: "linear" },
    });
  }, [bgControls]);

  return (
    <motion.div
      animate={bgControls}
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(120deg, #3b82f6 0%, #a21caf 50%, #ec4899 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      {/* Floating card with glow and parallax hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          y: -10,
          boxShadow: "0 8px 40px 0 rgba(236,72,153,0.25), 0 0 0 4px #a21caf33",
          scale: 1.02,
        }}
        className="relative bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 max-w-4xl w-full text-white border border-white/20 overflow-hidden"
      >
        {/* Animated background sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          className="pointer-events-none absolute inset-0 z-0"
        >
          <motion.div
            animate={{
              x: [0, 40, -40, 0],
              y: [0, -30, 30, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-40 h-40 bg-pink-400/30 rounded-full blur-2xl top-10 left-10"
          />
          <motion.div
            animate={{
              x: [0, -30, 30, 0],
              y: [0, 20, -20, 0],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-blue-400/30 rounded-full blur-2xl bottom-10 right-10"
          />
        </motion.div>

        {/* Heading with bounce entrance */}
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative z-10 text-3xl md:text-4xl font-extrabold text-center mb-6 drop-shadow-lg"
        >
          🔥🎁 ডিজিটাল প্রোডাক্ট কালেকশন মেগা বান্ডেল – মাত্র 99 টাকা! ১,৫০,০০০+রিসোর্স 🎁🔥
        </motion.h1>

        {/* Intro text with fade-up */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 text-center text-lg md:text-xl leading-relaxed mb-6 text-white/90"
        >
          আপনার ডিজিটাল কাজ অথবা ব্যবসার জন্য যা যা দরকার – সব একসাথে পাচ্ছেন একটি অসাধারণ প্যাকেজে।
          গ্রাফিক্স থেকে শুরু করে ফন্টস, সফটওয়্যার, প্রিমিয়াম কোর্স, মোবাইল অ্যাপস, টেমপ্লেট – সবকিছু একসাথে এক দামে।
        </motion.p>

        {/* List with staggered animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="relative z-10 space-y-4"
        >
          {[
            "6+ Premium Graphics Collections",
            "315+ Ready Microsoft Word Files & Legal Docs",
            "750+ English & Bangla Fonts + 150+ Exclusive Bangla Fonts",
            "Avro Keyboard, MS Office 2010 Pro Plus ও প্রয়োজনীয় সফটওয়্যার",
            "Photoshop, Illustrator, MS Office, Video Editing, Mobile Design & Photography সহ Premium Courses",
            "IMO Pro, Truecaller Pro, Capcut Pro (Android + PC) সহ Pro Mobile Apps",
            "500+ Laravel Website + Landing Page",
            "3000+ Whiteboard JPGs, Sound Effects, PLP Files ও Video Pack",
            "Certificate Templates Collections",
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
              className="flex items-start gap-2"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
              >
                <FiCheckCircle className="text-green-400 mt-1 drop-shadow" size={22} />
              </motion.span>
              <span className="text-lg">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bonus section */}
        <div className="mt-7 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold mb-4 text-yellow-300 drop-shadow"
          >
            💥 এর সাথে আরও পাচ্ছেন বোনাসে
          </motion.h2>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.6 } },
            }}
            className="space-y-2"
          >
            {[
              "1000+ Viral Hook Bundle",
              "15 Premium Android Software (Lifetime)",
              "70+ Bangla Landing Page Templates + ভিডিও টিউটোরিয়াল",
              "9000+ PowerPoint ও 1000+ Excel Templates",
              "25+ Premium Combo Courses (Ramadan Special)",
              "Facebook & YouTube Monetization Masterclass",
              "MayaJal’s YouTube Secret Course",
              "Visa Processing & Air Ticketing Master Course",
              "Truecaller Premium Gold Lifetime",
              "1,50,000+ Copyright Free Premium Reels",
            ].map((bonus, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ type: "spring", stiffness: 80, damping: 12 }}
                className="flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.1 }}
                >
                  <FiCheckCircle className="text-yellow-300 drop-shadow" size={20} />
                </motion.span>
                {bonus}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* CTA with pulse + hover bounce */}
        <motion.div className="mt-10 text-center relative z-10">
          <motion.a
            whileHover={{ scale: 1.09, boxShadow: "0 0 0 4px #22d3ee55" }}
            whileTap={{ scale: 0.97 }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut",
            }}
            href="https://prodigitaltech.shop"
            className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-white font-bold py-3 px-8 rounded-2xl shadow-xl text-lg tracking-wide border-2 border-white/20"
          >
            🛍️ অর্ডার করতে এখানে ক্লিক করুন
          </motion.a>

          <p className="mt-2 text-sm text-white/80">Whatsapp- 01331669152</p>

          <motion.a
            whileHover={{ scale: 1.06, color: "#f472b6" }}
            href="https://drive.google.com/drive/folders/1iW4srK1OvElBDGWUgaKjEYbRE2k5q8-M"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-blue-200 underline transition-colors duration-200"
          >
            🎥 ডেমো দেখতে এখানে ক্লিক করুন
          </motion.a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-10 text-center text-sm mt-7 opacity-80"
        >
          👉 যারা ডিজিটাল প্রোডাক্ট নিয়ে ব্যবসা শুরু করতে চান অথবা নিজের কাজের জন্য সবকিছু এক জায়গায় চান – তাদের জন্য এটি একটি গেম চেঞ্জার প্যাকেজ।
        </motion.p>
      </motion.div>
    </motion.div>
  );
}