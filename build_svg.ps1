$base64 = Get-Content -Raw -Path "f:\NTR Honey ocean Chacos and Cookies\logo_base64.txt"
$svgTemplate = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c0d02" />
      <stop offset="100%" stop-color="#120701" />
    </linearGradient>
    
    <!-- Gold Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f3e5ab" />
      <stop offset="50%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#aa7c11" />
    </linearGradient>

    <!-- Chocolate Flow Gradient -->
    <linearGradient id="chocoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3d1d04" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#1c0d02" stop-opacity="0.95" />
    </linearGradient>

    <!-- Glow Filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Clip path to make the logo circular -->
    <clipPath id="circleClip">
      <circle cx="250" cy="180" r="100" />
    </clipPath>
  </defs>

  <style>
    /* CSS Animations inside SVG */
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.05); }
    }
    @keyframes rotateSparkle {
      0% { transform: rotate(0deg); opacity: 0.3; }
      50% { opacity: 0.8; }
      100% { transform: rotate(360deg); opacity: 0.3; }
    }
    @keyframes floatParticle {
      0% { transform: translateY(0) scale(0.8); opacity: 0; }
      50% { opacity: 0.8; }
      100% { transform: translateY(-80px) scale(0.5); opacity: 0; }
    }
    @keyframes drip {
      0% { transform: translateY(0) scale(0.8); opacity: 0; }
      30% { opacity: 1; }
      80% { transform: translateY(120px) scale(1); opacity: 1; }
      90%, 100% { transform: translateY(130px) scale(0); opacity: 0; }
    }
    @keyframes waveFlow {
      0% { d: path('M -50,300 C 100,280 200,320 350,300 C 450,290 500,310 550,300 L 550,450 L -50,450 Z'); }
      50% { d: path('M -50,300 C 80,310 180,290 320,310 C 420,320 480,290 550,300 L 550,450 L -50,450 Z'); }
      100% { d: path('M -50,300 C 100,280 200,320 350,300 C 450,290 500,310 550,300 L 550,450 L -50,450 Z'); }
    }
    @keyframes logoPulse {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(212,175,55,0.3)); }
      50% { transform: scale(1.03); filter: drop-shadow(0 0 20px rgba(212,175,55,0.8)); }
    }

    .bg-pulse {
      animation: pulseGlow 6s ease-in-out infinite;
      transform-origin: 250px 200px;
    }
    .sparkle {
      animation: rotateSparkle 12s linear infinite;
      transform-origin: 250px 180px;
    }
    .particle-1 { animation: floatParticle 4s ease-in-out infinite; transform-origin: 200px 220px; }
    .particle-2 { animation: floatParticle 5s ease-in-out infinite 1.5s; transform-origin: 300px 240px; }
    .particle-3 { animation: floatParticle 6s ease-in-out infinite 3s; transform-origin: 250px 230px; }
    .drop {
      animation: drip 4s cubic-bezier(0.6, 0.04, 0.98, 0.335) infinite;
    }
    .wave {
      animation: waveFlow 10s ease-in-out infinite;
    }
    .animated-logo {
      animation: logoPulse 4s ease-in-out infinite;
      transform-origin: 250px 180px;
    }
  </style>

  <!-- Background -->
  <rect width="500" height="400" fill="url(#bgGrad)" />

  <!-- Ambient Glow -->
  <circle cx="250" cy="180" r="120" fill="#d4af37" opacity="0.15" filter="url(#glow)" class="bg-pulse" />

  <!-- Sparkle Ray Backing -->
  <g class="sparkle">
    <path d="M 250,180 L 250,50 M 250,180 L 250,310 M 250,180 L 120,180 M 250,180 L 380,180" stroke="url(#goldGrad)" stroke-width="1.5" stroke-dasharray="4 8" opacity="0.4" />
    <path d="M 250,180 L 158,88 M 250,180 L 342,272 M 250,180 L 158,272 M 250,180 L 342,88" stroke="url(#goldGrad)" stroke-width="1" stroke-dasharray="3 6" opacity="0.3" />
  </g>

  <!-- Dynamic Floating Cacao Dust Particles -->
  <circle cx="200" cy="220" r="3" fill="#f3e5ab" class="particle-1" />
  <circle cx="300" cy="240" r="2" fill="#d4af37" class="particle-2" />
  <circle cx="250" cy="230" r="2.5" fill="#f3e5ab" class="particle-3" />

  <!-- Flowing Chocolate Waves (Bottom) -->
  <path class="wave" d="M -50,300 C 100,280 200,320 350,300 C 450,290 500,310 550,300 L 550,450 L -50,450 Z" fill="url(#chocoGrad)" />
  <path d="M -50,320 C 120,300 180,340 330,310 C 430,300 490,330 550,320 L 550,450 L -50,450 Z" fill="#241002" opacity="0.6" />

  <!-- Business Logo with Clip-Path and Animation -->
  <g class="animated-logo">
    <image href="data:image/jpeg;base64,$base64" x="150" y="80" width="200" height="200" clip-path="url(#circleClip)" />
    <!-- Golden logo ring -->
    <circle cx="250" cy="180" r="101" fill="none" stroke="url(#goldGrad)" stroke-width="3" filter="url(#glow)" />
  </g>

  <!-- Dripping Butter/Cocoa Drop -->
  <g transform="translate(250, 240)">
    <path class="drop" d="M 0,0 C -6,10 -10,18 -10,24 C -10,30 -5,35 0,35 C 5,35 10,30 10,24 C 10,18 6,10 0,0 Z" fill="url(#goldGrad)" filter="url(#glow)" />
  </g>

  <!-- Circular Premium Badge Border -->
  <circle cx="250" cy="180" r="145" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="8 4" />
</svg>
"@

$svgTemplate | Out-File -FilePath "f:\NTR Honey ocean Chacos and Cookies\images\purity.svg" -Encoding utf8
Remove-Item "f:\NTR Honey ocean Chacos and Cookies\logo_base64.txt"
Remove-Item "f:\NTR Honey ocean Chacos and Cookies\copy_media.py" -ErrorAction SilentlyContinue
Remove-Item "f:\NTR Honey ocean Chacos and Cookies\copy_media.js" -ErrorAction SilentlyContinue
