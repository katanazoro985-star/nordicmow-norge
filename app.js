/**
 * NORDICMOW NORGE - Premium Robot Lawn Mowers E-Commerce
 * Tailored for Norway | Nok (kr) | Standard Levering 2-4 Virkedager
 */

// 1. PRODUCTS DATA - 10 Automated Robot Lawn Mowers
// Strictly adhering to:
// - NO brand names (Husqvarna, Worx, Gardena, Segway, etc. are omitted)
// - Fictional premium Nordic models
// - Prices end in 20, 30, 50, 00 (NEVER 99 or .99)
// - Targeted for Norwegian topography and climate
const PRODUCTS = [
  {
    id: 'nordic-500',
    name: 'TerraMow Nordic 500',
    tagline: 'Kompakt og stillegående for byhager og rekkehus',
    price: 6420, // Ends with 20
    originalPrice: 7200,
    rating: 4.8,
    reviewsCount: 38,
    lawnArea: 500, // m2
    maxSlope: 35, // %
    batteryTime: '65 minutter',
    chargeTime: '70 minutter',
    noiseLevel: '55 dB (Superstille)',
    cuttingWidth: '18 cm',
    cuttingHeight: '20 - 55 mm',
    navigation: 'Smart Gyro & Ultralyd Hindringssensor',
    connectivity: 'Wi-Fi & Bluetooth App',
    weatherRating: 'IPX5 (Tåler norsk regnvær)',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Beste for rekkehus',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    colorHex: '#10B981',
    image: 'images/mower-1.jpg',
    description: 'En smidig og ekstremt stillegående robotklipper tilpasset mindre gressplener opptil 500 m². Utstyrt med nattklipp-modus og automatisk regnsensor som sikrer feilfritt klipperesultat i all slags norsk sommervær.',
    features: [
      'Ultrastillegående børsteløs motor (55 dB)',
      'Automatisk regnsensor med pausefunksjon',
      'Intelligent kantklipping langs hekker og terrasser',
      'Nordisk app-styring med sanntidskart'
    ],
    inTheBox: ['TerraMow Nordic 500 klipper', 'Ladestasjon & strømadapter', '150m grensekabel', '200 plugger', '9 ekstra knivblader', 'Norsk brukerveiledning']
  },
  {
    id: 'alpine-4x4-1800',
    name: 'FjordTrim Alpine 4x4 AWD',
    tagline: 'Ekstrem firehjulstrekk for bratte skråninger og krevende terreng',
    price: 26850, // Ends with 50
    originalPrice: 29500,
    rating: 4.9,
    reviewsCount: 92,
    lawnArea: 1800,
    maxSlope: 75, // 38 degrees
    batteryTime: '150 minutter',
    chargeTime: '90 minutter',
    noiseLevel: '58 dB',
    cuttingWidth: '24 cm',
    cuttingHeight: '20 - 70 mm (elektrisk)',
    navigation: '100% Kablefri RTK-GNSS + AI Vision',
    connectivity: '4G LTE (gratis i 3 år), Wi-Fi & GPS',
    weatherRating: 'IPX6 (Vanntett spylebar med hageslange)',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring (Hjemlevering)',
    badge: '4x4 Klatremester',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    colorHex: '#F59E0B',
    image: 'images/mower-2.jpg',
    description: 'Utviklet spesielt for kupert norsk vestland- og fjellandskap. Med individuell 4x4-hjulsdrift forserer FjordTrim Alpine stigninger på inntil 75% (38°) uten å skli. Helt uten behov for kantledning!',
    features: [
      'Ekte All-Wheel Drive (AWD) klatresystem',
      'Kablefri RTK-satellittnavigasjon med centimeters presisjon',
      'Differensialstyring som skåner plenen ved vending',
      'IPX6 vanntett – spyl ren direkte med hageslangen'
    ],
    inTheBox: ['FjordTrim Alpine 4x4 klipper', 'RTK-referansestasjon med mast', 'Hurtigladestasjon', '18 herdede titanblader', 'Innebygd 4G SIM-kort', 'Monteringssett']
  },
  {
    id: 'stealth-800',
    name: 'SylvaBot Stealth 800',
    tagline: 'Avansert LiDAR 3D-kartlegging for hager med mange hindringer',
    price: 11930, // Ends with 30
    originalPrice: 13500,
    rating: 4.7,
    reviewsCount: 45,
    lawnArea: 800,
    maxSlope: 40,
    batteryTime: '85 minutter',
    chargeTime: '60 minutter',
    noiseLevel: '53 dB (Ekstremt stillegående)',
    cuttingWidth: '20 cm',
    cuttingHeight: '25 - 60 mm',
    navigation: 'Solid-State LiDAR + AI Objektgjenkjenning',
    connectivity: 'Wi-Fi & Bluetooth',
    weatherRating: 'IPX5',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Mest stillegående',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    colorHex: '#0284C7',
    image: 'images/mower-3.jpg',
    description: 'SylvaBot Stealth 800 skanner plenen med militærklasse 3D-LiDAR 30 ganger i sekundet. Den unngår automatisk leker, hagemøbler, pinnsvin og kjæledyr – millimeterpresisjon uten behov for kabler.',
    features: [
      '3D LiDAR navigasjon som fungerer like godt i mørket',
      'Pinnsvin- og dyrevern-modus godkjent etter europeisk norm',
      'Systematisk linjeklipping som gir fine fotballbanestriper',
      'Flytende klippepanne som følger ujevnt underlag'
    ],
    inTheBox: ['SylvaBot Stealth 800', 'Ladestasjon', 'Jordankre og verktøy', '12 ekstra titanblader', 'Brukerveiledning']
  },
  {
    id: 'matrix-1200',
    name: 'AeroLawn Matrix 1200',
    tagline: 'Vår bestselgende allrounder for norske eneboliger',
    price: 15420, // Ends with 20
    originalPrice: 17800,
    rating: 4.9,
    reviewsCount: 144,
    lawnArea: 1200,
    maxSlope: 45,
    batteryTime: '120 minutter',
    chargeTime: '80 minutter',
    noiseLevel: '56 dB',
    cuttingWidth: '22 cm',
    cuttingHeight: '20 - 65 mm',
    navigation: 'Hybrid RTK-GPS & Binokulært AI-kamera',
    connectivity: '4G LTE + Wi-Fi',
    weatherRating: 'IPX5',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Bestselger 2026',
    badgeColor: 'bg-emerald-600 text-white border-emerald-700',
    colorHex: '#059669',
    image: 'images/mower-4.jpg',
    description: 'Norges mest populære robotklipper i premiumklassen. Kombinerer satellitt-RTK med doble AI-kameraer som gjør at den aldri mister signalet, selv under store furutrær eller nær høye vegger.',
    features: [
      'Dobbelt kamerasystem med aktiv nattsyn-belysning',
      'Soneinndeling for forhage, bakhage og passasjer',
      'Tyverisikring med GPS-sporing og geofence-alarm',
      'Automatisk høyderegulering via mobilappen'
    ],
    inTheBox: ['AeroLawn Matrix 1200', 'RTK-antenne og veggbrakett', 'Ladestasjon', '15 reservekniver', 'Installationskit']
  },
  {
    id: 'eco-650',
    name: 'TrollTurf Eco 650',
    tagline: 'Maksimal energieffektivitet og miljøvennlig bioklipp',
    price: 8750, // Ends with 50
    originalPrice: 9900,
    rating: 4.6,
    reviewsCount: 52,
    lawnArea: 650,
    maxSlope: 35,
    batteryTime: '70 minutter',
    chargeTime: '60 minutter',
    noiseLevel: '54 dB',
    cuttingWidth: '19 cm',
    cuttingHeight: '20 - 55 mm',
    navigation: 'Smart Algoritmisk Zonerotasjon',
    connectivity: 'Wi-Fi & Bluetooth',
    weatherRating: 'IPX5',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Mest energieffektiv',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    colorHex: '#0D9488',
    image: 'images/mower-5.jpg',
    description: 'En økonomisk og miljøvennlig klipper med avansert mikrogjødslingsteknologi. Finhakker gresset til naturlig næring for plenen, reduserer mose og holder plenen dypgrønn gjennom hele sesongen.',
    features: [
      'Optimalisert lavforbruk-motor (kun 8 kWh per måned)',
      'Bio-mulching mikrokniver motvirker mose og ugress',
      'PIN-kode og løftesensor for maksimal sikkerhet',
      'Brukervennlig display på klipperen samt app'
    ],
    inTheBox: ['TrollTurf Eco 650 klipper', 'Ladestasjon med strømkabel', '180m kabel', '220 plugger', '9 reserveblader']
  },
  {
    id: 'apex-1500',
    name: 'VikingMow Apex 1500 Pro',
    tagline: 'Profesjonell presisjon med kantklipp og multisoner',
    price: 19820, // Ends with 20
    originalPrice: 22500,
    rating: 4.9,
    reviewsCount: 78,
    lawnArea: 1500,
    maxSlope: 50,
    batteryTime: '140 minutter',
    chargeTime: '85 minutter',
    noiseLevel: '56 dB',
    cuttingWidth: '23 cm',
    cuttingHeight: '20 - 65 mm',
    navigation: 'Trippel-sensor RTK + LiDAR + VSLAM',
    connectivity: '4G + Wi-Fi + Bluetooth',
    weatherRating: 'IPX6 (Fullt vaskbar)',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Proffens Valg',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    colorHex: '#7C3AED',
    image: 'images/mower-6.jpg',
    description: 'Apex 1500 Pro er bygget for finskårne plener med høye krav. Den patenterte Cut-To-Edge teknologien klipper helt inntil murer og bedkanter, så du slipper å bruke kanttrimmer manuelt.',
    features: [
      'Cut-To-Edge sidesentrert klippesystem',
      'Håndterer opptil 10 separate soner og korridorer',
      'Værstasjon-integrasjon (venter til gresset er tørt)',
      '3 års utvidet nordisk garanti inkludert'
    ],
    inTheBox: ['VikingMow Apex 1500 Pro', 'RTK-stasjon', 'Ladestasjon & transformator', '18 titanblader', 'Garanti-sertifikat']
  },
  {
    id: 'master-3000',
    name: 'Kjølen Master 3000 Commercial',
    tagline: 'Kapasitetsgigant for store eiendommer, borettslag og parker',
    price: 34500, // Ends with 00
    originalPrice: 38900,
    rating: 5.0,
    reviewsCount: 29,
    lawnArea: 3000,
    maxSlope: 55,
    batteryTime: '210 minutter',
    chargeTime: '100 minutter',
    noiseLevel: '59 dB',
    cuttingWidth: '32 cm (Dobbelt knivskive)',
    cuttingHeight: '20 - 80 mm',
    navigation: 'Dual RTK Satellitt + Flåtestyring i skyen',
    connectivity: '4G LTE Global SIM + Wi-Fi',
    weatherRating: 'IPX6',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring (Spesialgods på pall)',
    badge: 'Ekstrem Kapasitet',
    badgeColor: 'bg-slate-900 text-emerald-400 border-slate-700',
    colorHex: '#1E293B',
    image: 'images/mower-7.jpg',
    description: 'Et kraftverk av en robotklipper for herregårder, bedriftsområder og store hageanlegg. Med 32 cm dobbel klippeskive og kraftige børsteløse motorer klipper den inntil 3 000 m² på rekordtid.',
    features: [
      'Dobbelt klippeaggregat på 32 cm',
      'Skybasert flåtestyring med flerbrukerstøtte',
      'Ekstra stor batteripakke på 10.4 Ah med hurtiglading',
      'Heavy-duty terrenghjul i forsterket gummi'
    ],
    inTheBox: ['Kjølen Master 3000', 'Industriell RTK-mast', 'Kraftig ladestasjon med regntak', '24 knivblader', 'Borettslag montasjesett']
  },
  {
    id: 'neo-450',
    name: 'PolarGlide Neo 450 Compact',
    tagline: 'Rask og lettvint hverdagshelt for enkle gressmatter',
    price: 5830, // Ends with 30
    originalPrice: 6500,
    rating: 4.5,
    reviewsCount: 61,
    lawnArea: 450,
    maxSlope: 30,
    batteryTime: '55 minutter',
    chargeTime: '65 minutter',
    noiseLevel: '55 dB',
    cuttingWidth: '17 cm',
    cuttingHeight: '20 - 50 mm',
    navigation: 'Systematisk S-Pattern Klipping',
    connectivity: 'Bluetooth App',
    weatherRating: 'IPX5',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Beste Pris',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    colorHex: '#2563EB',
    image: 'images/mower-8.jpg',
    description: 'Enkel, pålitelig og rimelig kvalitetsklipper for deg som bare vil ha en velstelt plen uten kompliserte innstillinger. Pakk ut, koble til, og la PolarGlide gjøre jobben.',
    features: [
      'Ett-trykks hurtigstart på klipperen',
      'Svært lav vekt (kun 7.2 kg) – enkel å flytte',
      'Hindringssensorer i støtfangeren',
      'Kompakt ladestasjon som tar minimalt med plass'
    ],
    inTheBox: ['PolarGlide Neo 450', 'Kompakt ladestasjon', '130m kabel', '180 plugger', '6 reservekniver']
  },
  {
    id: 'vision-1000',
    name: 'AuroraView Smart 1000 Vision',
    tagline: 'Avansert datasyn med trygghet for barn, hunder og dyreliv',
    price: 13650, // Ends with 50
    originalPrice: 15200,
    rating: 4.8,
    reviewsCount: 67,
    lawnArea: 1000,
    maxSlope: 45,
    batteryTime: '110 minutter',
    chargeTime: '75 minutter',
    noiseLevel: '56 dB',
    cuttingWidth: '21 cm',
    cuttingHeight: '20 - 60 mm',
    navigation: 'AI Neural-Vision & VSLAM (Kablefri)',
    connectivity: 'Wi-Fi & Bluetooth',
    weatherRating: 'IPX5',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Trygg for kjæledyr',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    colorHex: '#E11D48',
    image: 'images/mower-9.jpg',
    description: 'AuroraView 1000 er utstyrt med en nevral AI-prosessor trent på over 200 000 hageobjekter. Den gjenkjenner og svinger trygt unna leker, hageslanger, hunder, katter og sovende pinnsvin.',
    features: [
      'Sanntids AI-klassifisering av hindringer',
      'Dag- og nattsyn med integrerte LED-hovedlys',
      'Ingen grensekabel nødvendig – tegnes i appen',
      'Over-the-air (OTA) gratis programvareoppdateringer'
    ],
    inTheBox: ['AuroraView Smart 1000', 'Ladestasjon', 'Hurtigguide og verktøy', '12 ekstra knivblader']
  },
  {
    id: 'fjell-2200',
    name: 'NordicMow Fjell 2200 Heavy-Duty',
    tagline: 'Bygget for rått norsk kystklima, fuktig gress og ujevn mark',
    price: 23420, // Ends with 20
    originalPrice: 26000,
    rating: 4.9,
    reviewsCount: 84,
    lawnArea: 2200,
    maxSlope: 60,
    batteryTime: '180 minutter',
    chargeTime: '95 minutter',
    noiseLevel: '57 dB',
    cuttingWidth: '26 cm',
    cuttingHeight: '25 - 75 mm',
    navigation: 'Hybrid RTK + Terraclip Flytende Klippedekk',
    connectivity: '4G LTE + Wi-Fi',
    weatherRating: 'IPX6 (Ekstra rust- og fuktsikret)',
    deliveryDays: 'Standard 2–4 virkedager',
    deliveryPartner: 'Posten / Bring',
    badge: 'Bygget for Norge',
    badgeColor: 'bg-emerald-800 text-emerald-100 border-emerald-600',
    colorHex: '#064E3B',
    image: 'images/mower-10.jpg',
    description: 'Spesialkonstruert for å mestre vått norsk gress som tetter vanlige klippere. Med rustfrie komponenter, flytende klippedekk og ekstra dreiemoment takler Fjell 2200 grovt gress og ujevn torv med glans.',
    features: [
      'Selvrensende klippedekk som hindrer oppsamling av vått gress',
      'Piggforsterkede terrenghjul med høyt marktrykk',
      'Ekstra stor klippebredde på 26 cm',
      'Innebygget varmeelement i ladestasjon mot frost og kondens'
    ],
    inTheBox: ['NordicMow Fjell 2200', 'Vinterisolert ladestasjon', 'RTK-antenne', '24 herdede knivblader', 'Norsk bruksanvisning']
  }
];

// Helper: Format Norwegian Kroner (e.g. "15 420 kr")
function formatNOK(amount) {
  return new Intl.NumberFormat('nb-NO').format(amount) + ' kr';
}

// 2. APP STATE
const state = {
  cart: JSON.parse(localStorage.getItem('nordicmow_cart')) || [],
  activeFilter: 'all',
  maxLawnArea: 3500,
  maxSlopeFilter: 0,
  sortBy: 'featured',
  searchQuery: '',
  quickViewProduct: null,
  isCartOpen: false,
  isCheckoutOpen: false,
  selectedPayment: 'vipps',
  lang: 'no' // 'no' or 'en'
};

// 3. VISUAL RENDERER FOR ROBOT LAWN MOWERS (REAL PRODUCT PHOTOS)
function renderMowerSVG(product, isDetail = false) {
  const heightClass = isDetail ? 'h-72' : 'h-52';
  return `
    <div class="w-full ${heightClass} relative overflow-hidden bg-slate-900 rounded-xl group/photo">
      <!-- Real High-Resolution Product Photo -->
      <img 
        src="${product.image}" 
        alt="${product.name}" 
        class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/photo:scale-108"
        loading="lazy"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80';"
      />
      
      <!-- Subtle Dark Vignette & Tech Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>

      <!-- Badge Overlay Top Left -->
      <div class="absolute top-3 left-3 z-10">
        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${product.badgeColor} border shadow-md backdrop-blur-md">
          ${product.badge}
        </span>
      </div>

      <!-- Quick Delivery Pill Top Right -->
      <div class="absolute top-3 right-3 z-10 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-full px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 flex items-center gap-1.5 shadow-md">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        2–4 dg
      </div>
    </div>
  `;
}

// 4. RENDER PRODUCT CARDS
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    // Category / quick filter
    if (state.activeFilter === 'small' && p.lawnArea > 800) return false;
    if (state.activeFilter === 'medium' && (p.lawnArea <= 800 || p.lawnArea > 1500)) return false;
    if (state.activeFilter === 'large' && p.lawnArea <= 1500) return false;
    if (state.activeFilter === '4x4' && p.maxSlope < 50) return false;
    if (state.activeFilter === 'wirefree' && !p.navigation.includes('RTK') && !p.navigation.includes('LiDAR') && !p.navigation.includes('Kablefri')) return false;

    // Lawn area slider
    if (p.lawnArea > state.maxLawnArea) return false;

    // Slope filter
    if (state.maxSlopeFilter > 0 && p.maxSlope < state.maxSlopeFilter) return false;

    // Search query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) || 
                    p.tagline.toLowerCase().includes(q) || 
                    p.description.toLowerCase().includes(q) || 
                    p.navigation.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  // Sort products
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'area-desc') {
    filtered.sort((a, b) => b.lawnArea - a.lawnArea);
  } else if (state.sortBy === 'slope-desc') {
    filtered.sort((a, b) => b.maxSlope - a.maxSlope);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update counter
  const counterEl = document.getElementById('results-count');
  if (counterEl) {
    counterEl.innerText = `${filtered.length} av 10 modeller`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-1">Ingen modeller matcher filteret</h3>
        <p class="text-sm text-slate-500 mb-6">Prøv å justere plenareal-filteret eller hellingsgraden for å se flere robotklippere.</p>
        <button onclick="resetFilters()" class="btn-primary px-5 py-2.5 text-sm">Tilbakestill alle filtre</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="product-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between group shadow-sm">
      <div>
        <!-- Visual & Badges -->
        ${renderMowerSVG(p)}

        <!-- Card Body -->
        <div class="p-5">
          <!-- Rating & Area Pill -->
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              <span class="text-amber-500">★</span>
              <span>${p.rating}</span>
              <span class="text-slate-400 font-normal">(${p.reviewsCount} omtaler)</span>
            </div>
            <span class="bg-slate-100 text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
              Opptil ${p.lawnArea} m²
            </span>
          </div>

          <!-- Product Name & Tagline -->
          <h3 class="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1">
            ${p.name}
          </h3>
          <p class="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
            ${p.tagline}
          </p>

          <!-- Key Technical Specs Grid -->
          <div class="grid grid-cols-2 gap-2 text-[11px] py-3 px-3 bg-slate-50 rounded-xl mb-4 border border-slate-100">
            <div>
              <span class="text-slate-400 block">Maks stigning:</span>
              <span class="font-bold text-slate-800">${p.maxSlope}% (${Math.round(p.maxSlope * 0.5)}°)</span>
            </div>
            <div>
              <span class="text-slate-400 block">Klippebredde:</span>
              <span class="font-bold text-slate-800">${p.cuttingWidth}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Navigasjon:</span>
              <span class="font-bold text-slate-800 truncate block" title="${p.navigation}">${p.navigation.split('+')[0]}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Lydnivå:</span>
              <span class="font-bold text-slate-800">${p.noiseLevel.split(' ')[0]} dB</span>
            </div>
          </div>

          <!-- Delivery Standard Notice -->
          <div class="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium mb-3">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            <span>Standard levering: <strong>2–4 virkedager</strong> (Posten/Bring)</span>
          </div>
        </div>
      </div>

      <!-- Pricing & Actions Footer -->
      <div class="p-5 pt-0 border-t border-slate-100 mt-2">
        <div class="flex items-baseline justify-between pt-3 mb-3">
          <div>
            <div class="text-xl font-extrabold text-slate-900 tracking-tight">
              ${formatNOK(p.price)}
            </div>
            <div class="text-[11px] text-slate-400">
              <span class="line-through mr-1">${formatNOK(p.originalPrice)}</span>
              <span>Inkl. 25% mva</span>
            </div>
          </div>
          <button onclick="openQuickView('${p.id}')" class="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline">
            Se spesifikasjoner →
          </button>
        </div>

        <div class="grid grid-cols-5 gap-2">
          <button onclick="addToCart('${p.id}')" class="col-span-4 btn-primary py-2.5 text-xs font-bold tracking-wide">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            Legg i handlekurv
          </button>
          <button onclick="openQuickView('${p.id}')" class="col-span-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg flex items-center justify-center transition-colors" title="Hurtigvisning">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 5. CART OPERATIONS
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      tagline: product.tagline,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  showToast(`La til "${product.name}" i handlekurven!`);
}

function updateCartQty(productId, change) {
  const index = state.cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  state.cart[index].qty += change;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
  showToast('Varen ble fjernet fra handlekurven');
}

function saveCart() {
  localStorage.setItem('nordicmow_cart', JSON.stringify(state.cart));
  updateCartBadge();
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badgeEl = document.getElementById('cart-badge');
  if (badgeEl) {
    badgeEl.innerText = totalCount;
    badgeEl.classList.toggle('hidden', totalCount === 0);
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryCostEl = document.getElementById('cart-delivery-cost');
  const totalEl = document.getElementById('cart-total');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-500">
        <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
        <p class="font-semibold text-slate-800 mb-1">Handlekurven din er tom</p>
        <p class="text-xs text-slate-500">Utforsk våre 10 robotklippere og finn den perfekte for din hage.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = formatNOK(0);
    if (deliveryCostEl) deliveryCostEl.innerText = '0 kr';
    if (totalEl) totalEl.innerText = formatNOK(0);
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  // Free standard shipping in Norway on orders over 10 000 kr, else 250 kr
  const shippingCost = subtotal >= 10000 ? 0 : 250;
  const total = subtotal + shippingCost;

  container.innerHTML = state.cart.map(item => `
    <div class="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
      <div class="flex-1 pr-3">
        <h4 class="text-xs font-bold text-slate-900 leading-tight">${item.name}</h4>
        <span class="text-[11px] text-emerald-700 font-semibold">${formatNOK(item.price)} per stk</span>
        <div class="text-[10px] text-slate-400 mt-0.5">Standard: 2–4 virkedager</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden text-xs">
          <button onclick="updateCartQty('${item.id}', -1)" class="px-2 py-1 hover:bg-slate-100 text-slate-700 font-bold">−</button>
          <span class="px-2 font-bold text-slate-900">${item.qty}</span>
          <button onclick="updateCartQty('${item.id}', 1)" class="px-2 py-1 hover:bg-slate-100 text-slate-700 font-bold">+</button>
        </div>
        <button onclick="removeCartItem('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1" title="Fjern vare">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.innerText = formatNOK(subtotal);
  if (deliveryCostEl) deliveryCostEl.innerText = shippingCost === 0 ? 'Gratis (Standard)' : formatNOK(shippingCost);
  if (totalEl) totalEl.innerText = formatNOK(total);
}

function toggleCart(open = null) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer || !overlay) return;

  state.isCartOpen = open !== null ? open : !state.isCartOpen;

  if (state.isCartOpen) {
    renderCart();
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    drawer.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
  } else {
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    drawer.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  }
}

// 6. QUICK VIEW / DETAIL MODAL
function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  state.quickViewProduct = p;

  const modal = document.getElementById('product-modal');
  const modalContent = document.getElementById('product-modal-content');
  if (!modal || !modalContent) return;

  // Calculate dynamic standard delivery dates (2 to 4 business days)
  const today = new Date();
  const d1 = addBusinessDays(today, 2);
  const d2 = addBusinessDays(today, 4);
  const dateFormatted1 = d1.toLocaleDateString('nb-NO', { weekday: 'short', day: 'numeric', month: 'short' });
  const dateFormatted2 = d2.toLocaleDateString('nb-NO', { weekday: 'short', day: 'numeric', month: 'short' });

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
      <div>
        ${renderMowerSVG(p, true)}
        
        <div class="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <h4 class="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Norsk Kjøpstrygghet Inkludert
          </h4>
          <ul class="text-xs text-emerald-900 space-y-1">
            <li>✓ 3 års full fabrikkgaranti</li>
            <li>✓ 30 dagers åpent kjøp med fri retur</li>
            <li>✓ Norsk kundeservice & deletilgang i Oslo</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${p.badgeColor} border">
              ${p.badge}
            </span>
            <span class="text-xs text-slate-500">Art.nr: NM-${p.id.toUpperCase()}</span>
          </div>

          <h2 class="text-2xl font-black text-slate-900 mb-2">${p.name}</h2>
          <p class="text-sm text-slate-600 mb-4">${p.description}</p>

          <!-- Pricing Block -->
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-5">
            <div class="flex items-baseline gap-3">
              <span class="text-2xl font-black text-slate-900">${formatNOK(p.price)}</span>
              <span class="text-sm text-slate-400 line-through">${formatNOK(p.originalPrice)}</span>
              <span class="bg-rose-100 text-rose-800 text-xs font-bold px-2 py-0.5 rounded">Spar ${formatNOK(p.originalPrice - p.price)}</span>
            </div>
            <div class="text-xs text-slate-500 mt-1">Inkl. 25% norsk merverdiavgift (MVA). Fri frakt ved ordre over 10 000 kr.</div>
            
            <div class="mt-3 pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-700">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span><strong>Forventet standard levering:</strong> ${dateFormatted1} – ${dateFormatted2}</span>
            </div>
          </div>

          <!-- Specs Table -->
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Nøkkelspesifikasjoner:</h4>
          <div class="grid grid-cols-2 gap-2 text-xs mb-5">
            <div class="p-2 bg-slate-100/70 rounded"><strong>Kapasitet:</strong> Opptil ${p.lawnArea} m²</div>
            <div class="p-2 bg-slate-100/70 rounded"><strong>Maks helling:</strong> ${p.maxSlope}% (${Math.round(p.maxSlope * 0.5)}°)</div>
            <div class="p-2 bg-slate-100/70 rounded"><strong>Batteritid:</strong> ${p.batteryTime}</div>
            <div class="p-2 bg-slate-100/70 rounded"><strong>Lydnivå:</strong> ${p.noiseLevel}</div>
            <div class="p-2 bg-slate-100/70 rounded"><strong>Klippebredde:</strong> ${p.cuttingWidth}</div>
            <div class="p-2 bg-slate-100/70 rounded"><strong>Værbeskyttelse:</strong> ${p.weatherRating}</div>
          </div>

          <!-- What is in the box -->
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Dette følger med i esken:</h4>
          <ul class="text-xs text-slate-600 list-disc list-inside space-y-0.5 mb-6">
            ${p.inTheBox.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="flex gap-3 pt-4 border-t border-slate-200">
          <button onclick="addToCart('${p.id}'); closeQuickView();" class="flex-1 btn-accent py-3 text-sm font-bold shadow-lg">
            Legg i handlekurv (${formatNOK(p.price)})
          </button>
          <button onclick="closeQuickView()" class="px-5 py-3 border border-slate-300 hover:bg-slate-100 rounded-xl text-xs font-semibold text-slate-700">
            Lukk
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeQuickView() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// 7. CHECKOUT SIMULATION (NORWAY TAILORED)
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Legg til en robotklipper før du går til kassen');
    return;
  }
  toggleCart(false);

  const checkoutModal = document.getElementById('checkout-modal');
  if (!checkoutModal) return;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shippingCost = subtotal >= 10000 ? 0 : 250;
  const total = subtotal + shippingCost;

  document.getElementById('checkout-total-display').innerText = formatNOK(total);

  checkoutModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeCheckout() {
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) checkoutModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const address = form.address.value;
  const postal = form.postal.value;
  const city = form.city.value;

  const orderNum = 'NM-' + Math.floor(100000 + Math.random() * 900000);
  const deliveryD1 = addBusinessDays(new Date(), 2).toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long' });
  const deliveryD2 = addBusinessDays(new Date(), 4).toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long' });

  // Clear cart
  state.cart = [];
  saveCart();
  closeCheckout();

  // Show order confirmation modal
  const confirmationModal = document.getElementById('order-confirmation-modal');
  const detailsEl = document.getElementById('order-summary-details');

  if (confirmationModal && detailsEl) {
    detailsEl.innerHTML = `
      <div class="space-y-4 text-left bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div class="flex justify-between text-xs pb-2 border-b border-slate-200">
          <span class="text-slate-500">Ordrenummer:</span>
          <span class="font-bold text-slate-900">${orderNum}</span>
        </div>
        <div class="flex justify-between text-xs pb-2 border-b border-slate-200">
          <span class="text-slate-500">Kunde:</span>
          <span class="font-bold text-slate-900">${name} (${email})</span>
        </div>
        <div class="flex justify-between text-xs pb-2 border-b border-slate-200">
          <span class="text-slate-500">Leveringsadresse:</span>
          <span class="font-bold text-slate-900">${address}, ${postal} ${city}</span>
        </div>
        <div class="flex justify-between text-xs pb-2 border-b border-slate-200">
          <span class="text-slate-500">Fraktselskap:</span>
          <span class="font-bold text-slate-900">Posten / Bring (Sporingspakke)</span>
        </div>
        <div class="p-3 bg-emerald-100/70 border border-emerald-300 rounded-lg text-emerald-900 text-xs">
          <strong>Forventet standard levering:</strong> ${deliveryD1} – ${deliveryD2}.
          Sporingslenke sendes til ${email} så snart klipperen forlater lageret i Oslo.
        </div>
      </div>
    `;
    confirmationModal.classList.remove('hidden');
  }
}

function closeOrderConfirmation() {
  const confirmationModal = document.getElementById('order-confirmation-modal');
  if (confirmationModal) confirmationModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  renderProducts();
}

// 8. INTERACTIVE LAWN ADVISOR / RECOMMENDER
function runLawnAdvisor() {
  const sizeSelect = document.getElementById('advisor-size');
  const slopeSelect = document.getElementById('advisor-slope');
  const wireSelect = document.getElementById('advisor-wire');

  if (!sizeSelect || !slopeSelect || !wireSelect) return;

  const size = parseInt(sizeSelect.value);
  const slope = parseInt(slopeSelect.value);
  const wirefree = wireSelect.value === 'yes';

  // Find best match
  let matches = PRODUCTS.filter(p => p.lawnArea >= size && p.maxSlope >= slope);
  if (wirefree) {
    const wirefreeMatches = matches.filter(p => p.navigation.includes('RTK') || p.navigation.includes('LiDAR') || p.navigation.includes('Kablefri'));
    if (wirefreeMatches.length > 0) matches = wirefreeMatches;
  }

  // Sort by closest size match
  matches.sort((a, b) => a.lawnArea - b.lawnArea);
  const recommended = matches[0] || PRODUCTS[3]; // Fallback to Matrix 1200

  const resultContainer = document.getElementById('advisor-result');
  if (resultContainer) {
    resultContainer.innerHTML = `
      <div class="bg-slate-900 text-white p-6 rounded-2xl border border-emerald-500/30 shadow-glow animate-fade-in">
        <div class="flex items-center justify-between mb-4">
          <span class="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Vår Anbefaling for din tomt
          </span>
          <span class="text-xs text-slate-400">Match score: 98%</span>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-6">
          <div class="w-full sm:w-1/2">
            ${renderMowerSVG(recommended)}
          </div>
          <div class="w-full sm:w-1/2 text-left">
            <h3 class="text-xl font-bold text-white mb-1">${recommended.name}</h3>
            <p class="text-xs text-slate-300 mb-3">${recommended.tagline}</p>
            <div class="text-2xl font-black text-emerald-400 mb-4">${formatNOK(recommended.price)}</div>
            <div class="flex gap-2">
              <button onclick="addToCart('${recommended.id}')" class="btn-accent px-4 py-2.5 text-xs font-bold flex-1">
                Kjøp med standard levering
              </button>
              <button onclick="openQuickView('${recommended.id}')" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold">
                Se detaljer
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// 9. UTILITIES & EVENT LISTENERS
function addBusinessDays(startDate, days) {
  let count = 0;
  let curDate = new Date(startDate);
  while (count < days) {
    curDate.setDate(curDate.getDate() + 1);
    // 0 is Sunday, 6 is Saturday
    if (curDate.getDay() !== 0 && curDate.getDay() !== 6) {
      count++;
    }
  }
  return curDate;
}

function setFilter(filterType) {
  state.activeFilter = filterType;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    if (btn.dataset.filter === filterType) {
      btn.classList.add('bg-emerald-800', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-emerald-800', 'text-white', 'shadow-sm');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });
  renderProducts();
}

function resetFilters() {
  state.activeFilter = 'all';
  state.maxLawnArea = 3500;
  state.maxSlopeFilter = 0;
  state.searchQuery = '';
  state.sortBy = 'featured';

  const areaSlider = document.getElementById('area-slider');
  if (areaSlider) areaSlider.value = 3500;
  const areaVal = document.getElementById('area-val');
  if (areaVal) areaVal.innerText = 'Alle (3500 m²)';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  setFilter('all');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.innerText = message;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3200);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Lawn Area slider
  const areaSlider = document.getElementById('area-slider');
  const areaVal = document.getElementById('area-val');
  if (areaSlider && areaVal) {
    areaSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      state.maxLawnArea = val;
      areaVal.innerText = val >= 3500 ? 'Alle (3500 m²)' : `Maks ${val} m²`;
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Checkout form submit
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }
});
