export const products = [
  {
    name: "PULSE Pro Wireless Earbuds",
    firsDesc:
      "Silence the world. Amplify your reality. \nThe PULSE Pro isn't just another pair of wireless earbuds—it's your personal sound sanctuary. Featuring advanced noise cancellation with 360-degree adaptive audio, these earbuds transform your listening experience. Powered by graphene-enhanced drivers and a cutting-edge Bluetooth 6.0 chip, they deliver crystal-clear audio with zero latency.",
    secondDesc:
      "The PULSE Pro isn't just another pair of wireless earbuds—it's your personal sound sanctuary. Featuring advanced noise cancellation with 360-degree adaptive audio, these earbuds transform your listening experience. Powered by graphene-enhanced drivers and a cutting-edge Bluetooth 6.0 chip, they deliver crystal-clear audio with zero latency.\nEngineered for the audiophile who refuses to compromise. PULSE Pro brings studio-grade sound anywhere you go. With intelligent sound mapping that adapts to your ear's unique geometry, these earbuds create a personalized acoustic environment. Military-grade water resistance meets AI-powered sound optimization, ensuring your music sounds exactly how it was meant to be heard.",
    lightsOffsrc: "./images/pulse/dark.png",
    lightsOnsrc: "./images/pulse/white.png",
    images: [
      "https://placehold.co/1200x1200/EEE/31343C?text=1",
      "https://placehold.co/1200x1200/EEE/31343C?text=2",
      "https://placehold.co/1200x1200/EEE/31343C?text=3",
      "https://placehold.co/1200x1200/EEE/31343C?text=4",
    ],
  },
  {
    name: "AEGIS X1 Titanium Smartwatch",
    firsDesc:
      "Your health, redefined.\nThe AEGIS X1 isn't just a timepiece - it's a 24/7 health guardian encased in aerospace-grade titanium. Featuring military-grade biometric sensors and a holographic energy display, this smartwatch tracks 127 health metrics with medical precision. Powered by AI-driven health insights and a solar-charged quantum battery that lasts 30 days.",
    secondDesc:
      "The AEGIS X1 isn't just a timepiece - it's a 24/7 health guardian encased in aerospace-grade titanium. Featuring military-grade biometric sensors and a holographic energy display, this smartwatch tracks 127 health metrics with medical precision. Powered by AI-driven health insights and a solar-charged quantum battery that lasts 30 days.\nEngineered for Navy SEAL-level endurance with 100M water resistance and electromagnetic pulse shielding. The dual-layer AMOLED display automatically adapts to environmental light conditions, while our proprietary Health OS analyzes blood oxygen, stress levels, and early arrhythmia detection. With satellite emergency SOS and 360° GPS mapping, your ultimate protection is always on-wrist.",
    lightsOnsrc: "./images/watch/light.png",
    lightsOffsrc: "./images/watch/dark.png",
    images: [
      "https://placehold.co/1200x1200/EEE/31343C?text=1",
      "https://placehold.co/1200x1200/EEE/31343C?text=2",
      "https://placehold.co/1200x1200/EEE/31343C?text=3",
      "https://placehold.co/1200x1200/EEE/31343C?text=4",
    ],
  },
  {
    name: "Harmony Vision Smart Glasses",
    firsDesc:
      "See the world, smarter.\nThe Harmony Vision Smart Glasses blend cutting-edge technology with sleek, everyday design. Featuring augmented reality overlays, voice-activated controls, and a transparent OLED display, these glasses keep you connected without disrupting your view of the world. Powered by Harmony's NeuralSync AI, they adapt to your needs in real-time.",
    secondDesc:
      "The Harmony Vision Smart Glasses blend cutting-edge technology with sleek, everyday design. Featuring augmented reality overlays, voice-activated controls, and a transparent OLED display, these glasses keep you connected without disrupting your view of the world. Powered by Harmony's NeuralSync AI, they adapt to your needs in real-time.\nEngineered for seamless integration into your life, Harmony Vision offers hands-free navigation, real-time language translation, and personalized notifications. With a lightweight titanium frame and adaptive tinting that adjusts to lighting conditions, these glasses are as stylish as they are functional. Whether you're exploring a new city or managing your day, Harmony Vision keeps you in harmony with your surroundings.",
    lightsOnsrc: "./images/glasses/red.png",
    lightsOffsrc: "./images/glasses/black.png",
    images: [
      "https://placehold.co/1200x1200/EEE/31343C?text=1",
      "https://placehold.co/1200x1200/EEE/31343C?text=2",
      "https://placehold.co/1200x1200/EEE/31343C?text=3",
      "https://placehold.co/1200x1200/EEE/31343C?text=4",
    ],
  },
];

export type Product = (typeof products)[number];
