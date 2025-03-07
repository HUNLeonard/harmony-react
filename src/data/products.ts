export const products = [
  {
    name: "PULSE Pro Wireless Earbuds",
    shortDesc:
      "Silence the world. Amplify your reality. The PULSE Pro isn't just another pair of wireless earbuds—it's your personal <b>sound sanctuary</b>. Featuring advanced <b>noise cancellation</b> with 360-degree adaptive audio, these earbuds transform your listening experience.",
    longDesc:
      "The PULSE Pro isn't just another pair of wireless earbuds—it's your personal <b>sound sanctuary</b>. Featuring advanced <b>noise cancellation</b> with 360-degree adaptive audio, these earbuds transform your listening experience. Powered by <b>graphene-enhanced drivers</b> and a cutting-edge <b>Bluetooth 6.0 chip</b>, they deliver crystal-clear audio with zero latency.\nEngineered for the audiophile who refuses to compromise. PULSE Pro brings <b>studio-grade sound</b> anywhere you go. With <b>intelligent sound mapping</b> that adapts to your ear's unique geometry, these earbuds create a personalized acoustic environment. <b>Military-grade water resistance</b> meets <b>AI-powered sound optimization</b>, ensuring your music sounds exactly how it was meant to be heard.",
    lightsOffsrc: "./images/pulse/dark.png",
    lightsOnsrc: "./images/pulse/white.png",
    images: [
      "./images/pulse/1.png",
      "./images/pulse/2.png",
      "./images/pulse/3.png",
      "./images/pulse/4.png",
    ],
    price: {
      regular: 59.99,
      premium: 69.99,
      ultimate: 99.99,
    },
    benefits: {
      regular: [
        "Advanced <b>noise cancellation</b> technology",
        "<b>Graphene-enhanced drivers</b> for superior sound",
        "Bluetooth 6.0 for <b>zero latency</b> connection",
        "Up to <b>10 hours</b> of battery life",
      ],
      premium: [
        "<b>360-degree adaptive audio</b> environment",
        "<b>Intelligent sound mapping</b> for personalized acoustics",
        "Enhanced <b>water resistance</b> for active lifestyles",
        "<b>Quick charge</b> capability - 1 hour playtime from 5 min charge",
      ],
      ultimate: [
        "<b>AI-powered sound optimization</b> technology",
        "Military-grade <b>durability and water resistance</b>",
        "<b>Studio-grade</b> audio calibration",
        "Premium <b>carrying case</b> with wireless charging",
      ],
    },
  },
  {
    name: "AEGIS X1 Titanium Smartwatch",
    shortDesc:
      "Your health, redefined. The AEGIS X1 isn't just a timepiece - it's a <b>24/7 health guardian</b> encased in aerospace-grade titanium. Featuring <b>military-grade biometric sensors</b> and a holographic energy display, this smartwatch tracks essential health metrics.",
    longDesc:
      "The AEGIS X1 isn't just a timepiece - it's a <b>24/7 health guardian</b> encased in aerospace-grade titanium. Featuring <b>military-grade biometric sensors</b> and a holographic energy display, this smartwatch tracks 127 health metrics with medical precision. Powered by <b>AI-driven health insights</b> and a solar-charged quantum battery that lasts 30 days.\nEngineered for <b>Navy SEAL-level endurance</b> with 100M water resistance and electromagnetic pulse shielding. The <b>dual-layer AMOLED display</b> automatically adapts to environmental light conditions, while our proprietary <b>Health OS</b> analyzes blood oxygen, stress levels, and early arrhythmia detection. With <b>satellite emergency SOS</b> and 360° GPS mapping, your ultimate protection is always on-wrist.",
    lightsOnsrc: "./images/watch/light.png",
    lightsOffsrc: "./images/watch/dark.png",
    images: [
      "./images/watch/1.png",
      "./images/watch/2.png",
      "./images/watch/3.png",
      "./images/watch/4.png",
    ],
    price: {
      regular: 59.99,
      premium: 69.99,
      ultimate: 99.99,
    },
    benefits: {
      regular: [
        "Aerospace-grade <b>titanium construction</b>",
        "Essential <b>health tracking</b> metrics",
        "<b>Biometric sensors</b> for daily health monitoring",
        "7-day <b>battery life</b> with standard usage",
      ],
      premium: [
        "<b>Dual-layer AMOLED display</b> with auto-brightness",
        "Advanced <b>Health OS</b> with stress monitoring",
        "<b>100M water resistance</b> for swimming and diving",
        "Extended <b>14-day battery</b> with solar assist charging",
      ],
      ultimate: [
        "<b>AI-driven health insights</b> with medical precision",
        "<b>Satellite emergency SOS</b> connectivity",
        "<b>Navy SEAL-level endurance</b> with EMP shielding",
        "<b>Solar-charged quantum battery</b> lasting 30 days",
      ],
    },
  },
  {
    name: "Harmony Vision Smart Glasses",
    shortDesc:
      "See the world, smarter. The Harmony Vision Smart Glasses blend <b>cutting-edge technology</b> with sleek, everyday design. Featuring <b>augmented reality overlays</b>, voice-activated controls, and a transparent OLED display.",
    longDesc:
      "The Harmony Vision Smart Glasses blend <b>cutting-edge technology</b> with sleek, everyday design. Featuring <b>augmented reality overlays</b>, voice-activated controls, and a transparent OLED display, these glasses keep you connected without disrupting your view of the world. Powered by Harmony's <b>NeuralSync AI</b>, they adapt to your needs in real-time.\nEngineered for seamless integration into your life, Harmony Vision offers <b>hands-free navigation</b>, real-time language translation, and personalized notifications. With a <b>lightweight titanium frame</b> and adaptive tinting that adjusts to lighting conditions, these glasses are as stylish as they are functional. Whether you're exploring a new city or managing your day, Harmony Vision keeps you in <b>harmony with your surroundings</b>.",
    lightsOnsrc: "./images/glasses/red.png",
    lightsOffsrc: "./images/glasses/black.png",
    images: [
      "./images/glasses/1.png",
      "./images/glasses/2.png",
      "./images/glasses/3.png",
      "./images/glasses/4.png",
    ],
    price: {
      regular: 59.99,
      premium: 69.99,
      ultimate: 99.99,
    },
    benefits: {
      regular: [
        "Sleek <b>everyday design</b> with stylish look",
        "Basic <b>AR overlays</b> for notifications",
        "<b>Voice-activated controls</b> for hands-free use",
        "Transparent <b>OLED display</b> technology",
      ],
      premium: [
        "<b>Lightweight titanium frame</b> for all-day comfort",
        "<b>Adaptive tinting</b> that adjusts to lighting conditions",
        "Enhanced <b>AR experiences</b> with environmental mapping",
        "<b>Real-time notifications</b> with customizable filters",
      ],
      ultimate: [
        "Advanced <b>NeuralSync AI</b> adaptation",
        "<b>Real-time language translation</b> in 40+ languages",
        "<b>Hands-free navigation</b> with live directional overlay",
        "Full <b>smart home integration</b> and control capabilities",
      ],
    },
  },
];

export type Product = (typeof products)[number];
