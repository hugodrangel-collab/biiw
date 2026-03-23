
// ─── Product data ───
const PRODUCTS = {
  wstart:{
    id:'wstart',gender:'w',name:'Startpaket Dam',galClass:'w-gal',infoClass:'w-info',
    tagline:'Allt du behöver för att börja din biiw-resa. Ergonomiskt handtag i tung zinklegering och två 5-bladiga blad i rostfritt stål med fuktgivande aloe vera gel-remsa. Välj din favoritfärg bland sju alternativ.',
    price:99,priceNote:'inkl. 25% moms',freeClass:'free-w',
    images:['W1','W3','W2','W4','W5'],
    hasColor:true,hasFreq:true,
    colors:[{name:'Rose',hex:'#C85A7A',img:'CW_ROSA'},{name:'Lavendel',hex:'#8B5CF6',img:'CW_LAVENDEL'},{name:'Forest Green',hex:'#2E9E6E',img:'CW_FOREST'}],
    specs:[['Handtag material','Zinklegering (Zamak)'],['Blad material','Rostfritt stål, 5-bladssystem'],['Antal blad i startpaket','2 st'],['Gel-remsa','Aloe vera & vitamin E'],['Rörligt huvud','Ja, 45° flexibelt'],['Vikt (handtag)','62 g'],['Längd','15,5 cm'],['Förpackning','Återvinningsbar kartong, FSC']],
    features:[['Ergonomiskt handtag i zinklegering','Tyngden och balansen ger kontroll och precision – utformat för att följa kroppens kurvor.'],['5-bladssystem i rostfritt stål','Fler tätt placerade blad ger slätare resultat med färre drag och minimerar inåtväxande hår.'],['Fuktgivande gel-remsa','Aloe vera och vitamin E aktiveras av vatten och skapar ett skyddande lager mot friktion.'],['Rörligt huvud, 45°','Bladhuvudet anpassar sig mjukt efter kroppens former för en jämn och nära rakning.']],
    reviews:[{name:'Sofia K.',stars:5,text:'Äntligen en rakhyvel som känns lyxig utan att kosta skjortan. Handtaget har en perfekt tyngd.'},{name:'Emma L.',stars:5,text:'Ser fantastiskt ut i badrummet. Gel-remsan gör verklig skillnad – ingen irritation.'},{name:'Tilda H.',stars:4,text:'Prenumerationen är genial, aldrig utan blad längre.'}]
  },
  wrefill:{
    id:'wrefill',gender:'w',name:'Refillpack Dam',galClass:'w-gal',infoClass:'w-info',
    tagline:'Fyra 5-bladiga rakblad med inbyggd aloe vera gel-remsa. Passar alla biiw dam-handtag. Välj hur ofta du vill få nya blad levererade hem.',
    price:99,priceNote:'4-pack · inkl. 25% moms',freeClass:'free-w',
    images:['REFILL_DAM_1','REFILL_DAM_2','W4','W5'],
    hasColor:false,hasFreq:true,colors:[],
    specs:[['Antal blad','4 st'],['Bladtyp','5-bladssystem'],['Material','Rostfritt stål'],['Gel-remsa','Aloe vera & vitamin E'],['Passar','Alla biiw dam-handtag'],['Förpackning','Återvinningsbar kartong']],
    features:[['Premium blad i rostfritt stål','Varje blad tillverkat med hög precision för en jämn, nära rakning.'],['Inbyggd aloe vera gel-remsa','Fuktgivande skydd direkt på bladet – aktiveras av vatten.'],['Enkel bladväxling','Tryck fast det nya bladet tills det klickar – inga verktyg behövs.'],['Passar alla biiw dam-handtag','Helt kompatibelt oavsett färg eller inköpsdatum.']],
    reviews:[{name:'Anna M.',stars:5,text:'Bekvämt att bara få nya blad hem automatiskt. Kvaliteten är konstant bra.'},{name:'Petra S.',stars:5,text:'Perfekt prenumeration – aldrig rakat mig med tråkiga blad igen.'},{name:'Johanna B.',stars:4,text:'Bladen är vassa och gel-remsan varar länge.'}]
  },
  mstart:{
    id:'mstart',gender:'m',name:'Startpaket Herr',galClass:'m-gal',infoClass:'m-info',
    tagline:'Handtag i 62g zinklegering med precisions-balanserat grepp och två 5-bladiga blad i kirurgiskt stål. Bladhuvudets 45° pivot-system anpassar sig mot varje kontur. Välj silver eller grafitgrå.',
    price:99,priceNote:'inkl. 25% moms',freeClass:'free-m',
    images:['M1','M3','M2','M4','M5'],
    hasColor:true,hasFreq:true,
    colors:[{name:'Silver',hex:'#A8B0BC'},{name:'Grafitgrå',hex:'#4A5260'},{name:'Svart',hex:'#1C1E24'},{name:'Titanvit',hex:'#E8EAF0'}],
    specs:[['Handtag material','Zinklegering (Zamak), kirurgisk precision'],['Blad material','Kirurgiskt stål – högsta kvalitetsklass'],['Materialkvalitet','Svenskt kvalitetsstål'],['Skärpa','Klass S5 – marknadens skarpaste bladskala'],['Antal blad i startpaket','2 st'],['Rörligt huvud','45° pivot-system'],['Vikt (handtag)','62 g – precisions-balanserat'],['Längd','16 cm'],['Kompatibelt med','biiw Refillpack Herr'],['Förpackning','Återvinningsbar kartong, FSC']],
    features:[['Kirurgiskt stål – marknadens vassaste blad','Bladens 12° vinkel ger en extremt ren skärpa. Samma metallurgi som kirurgiska instrument – verifierat i laboratorium.'],['Precisions-balanserat handtag i zinklegering','62g optimalt viktfördelat mot bladhuvudet. Ergonomiskt grepp som ger full kontroll även i duschen.'],['45° pivot-system','Bladhuvudet roterar automatiskt med kroppens konturer – perfekt mot käklinjen, halsen och svårare partier.'],['5-bladssystem för ett slag-resultat','Fem tätt placerade blad eliminerar fler hårstrån per drag. Färre pass, slätare resultat, mindre rodnad.'],['7-stegs kvalitetskontroll','Varje blad testas individuellt. Om ett enda blad i ett pack inte uppfyller specifikationen kasseras hela batchen.']],
    reviews:[{name:'Marcus L.',stars:5,text:'Bästa rakhyveln jag haft. Skärpan på bladen är genuint oslagbar – glatt resultat på första passet.'},{name:'Erik H.',stars:5,text:'Handtagets vikt är perfekt. Känns som ett riktigt instrument, inte ett plastjobb.'},{name:'Johan S.',stars:5,text:'Prenumerationen är briljant. Aldrig ett trubbigt blad och 99 kr är ett skämt för den här kvaliteten.'}]
  },
  mrefill:{
    id:'mrefill',gender:'m',name:'Refillpack Herr',galClass:'m-gal',infoClass:'m-info',
    tagline:'Fyra 5-bladiga rakblad i kirurgiskt stål med 12° precisionsskärpt egg. Varje blad testas individuellt för konsekvent skärpa. Passar alla biiw herr-handtag.',
    price:99,priceNote:'4-pack · inkl. 25% moms',freeClass:'free-m',
    images:['M2','M3','M1','M4','M5'],
    hasColor:false,hasFreq:true,colors:[],
    specs:[['Antal blad','4 st'],['Bladtyp','5-bladssystem'],['Material','Kirurgiskt stål'],['Bladvinkel','12° – precisionsskärpt'],['Passes per blad','Ca. 7–10 rakningar'],['Passar','Alla biiw herr-handtag'],['Kvalitetskontroll','7-stegs per blad'],['Förpackning','Återvinningsbar kartong']],
    features:[['Kirurgiskt stål, 12° bladvinkel','Marknadens skarpaste bladvinkel ger en ren, precis kant med varje utbyte.'],['Individuell kvalitetskontroll','Varje enskilt blad testas och verifieras. En standard vi aldrig kompromissar på.'],['Enkel och snabb bladväxling','Tryck loss det gamla, klicka in det nya. Tar under tio sekunder.'],['Passar alla biiw herr-handtag','Full kompatibilitet med hela biiw herr-serien.']],
    reviews:[{name:'Daniel A.',stars:5,text:'Bladen håller vad de lovar. Varje utbyte känns som att raka med ett nytt instrument.'},{name:'Mikael T.',stars:5,text:'Prenumerationen fungerar perfekt. Aldrig en tanke på att beställa – det bara dyker upp.'},{name:'Oskar B.',stars:4,text:'Kvaliteten är konsekvent hög. Precis som ett herr-blad ska vara.'}]
  }
};
const FREQS=[{name:'Varje månad',sub:'4 nya rakblad levereras varje månad',save:'',type:'sub'},{name:'Varannan månad',sub:'4 nya rakblad var 8:e vecka · Populärast',save:'Populärast',type:'sub'},{name:'Var 3:e månad',sub:'4 nya rakblad 4 gånger per år',save:'',type:'sub'},{name:'Engångsköp',sub:'Inget abonnemang – betala en gång',save:'',type:'once'}];

// Image map – replaced by Python
const IMG_MAP = {
  W1:'images/dam-razor-1.jpg',W2:'images/dam-razor-2.jpg',W3:'images/dam-razor-3.jpg',W4:'images/dam-razor-4.jpg',W5:'images/dam-razor-5.jpg',
  M1:'images/herr-razor-1.jpg',M2:'images/herr-razor-2.jpg',M3:'images/herr-razor-3.jpg',M4:'images/herr-razor-4.jpg',M5:'images/herr-razor-5.jpg',
  CW_ROSA:'images/color-rose.jpg',
  CW_LAVENDEL:'images/color-lavendel.jpg',
  CW_FOREST:'images/color-forest.jpg',
};
function img(k){return IMG_MAP[k]}

// ─── State ───
let currentGender='women';
let cart=[],deliveryCost=0,currentPDP=null,pdpImages=[],pdpImgIdx=0,pdpColor='',pdpFreq='Varje månad',pdpQty=1;

// ─── Gender switch ───
function switchGender(g){
  currentGender=g;
  document.body.classList.toggle('men-mode',g==='men');
  const nav=document.getElementById('main-nav');
  nav.className=g==='women'?'women-nav':'men-nav';
  document.getElementById('gt-women').classList.toggle('active',g==='women');
  document.getElementById('gt-men').classList.toggle('active',g==='men');
  document.getElementById('main-site').style.display=g==='women'?'block':'none';
  document.getElementById('men-site').style.display=g==='men'?'block':'none';
  const cw=document.getElementById('cart-wrap');
  cw.className=g==='women'?'w-cart':'m-cart';
  var lm=[{id:'nav-produkter',w:'#produkter',m:'#mprodukter'},{id:'nav-butiker',w:'#butiker',m:'#mbutiker'},{id:'nav-story',w:'#story',m:'#mstory'},{id:'nav-hur',w:'#hur',m:'#mhur'},{id:'hm-produkter',w:'#produkter',m:'#mprodukter'},{id:'hm-butiker',w:'#butiker',m:'#mbutiker'},{id:'hm-story',w:'#story',m:'#mstory'},{id:'hm-hur',w:'#hur',m:'#mhur'}];
  lm.forEach(function(l){var el=document.getElementById(l.id);if(el)el.setAttribute('href',g==='women'?l.w:l.m);});
  var hm=document.getElementById('ham-menu');
  if(hm){hm.className='ham-menu '+(g==='women'?'w-ham':'m-ham');hm.classList.remove('open');}
  window.scrollTo(0,0);
}

// ─── Curtain ───
function toggleCurtain(g){
  const curtain=document.getElementById(g+'-curtain');
  const arrow=document.getElementById(g+'-arrow');
  curtain.classList.toggle('open');
  arrow.classList.toggle('open');
}

// ─── PDP ───
function openPDP(id){
  currentPDP=PRODUCTS[id];
  const g=currentPDP.gender;
  pdpImages=currentPDP.images.map(img);
  pdpImgIdx=0;
  pdpColor=currentPDP.colors.length?currentPDP.colors[0].name:'';
  pdpFreq='Varje månad';pdpQty=1;
  renderPDP();
  const pdpNav=document.getElementById('pdp-nav');
  pdpNav.className='pdp-nav '+(g==='w'?'w-pdp-nav':'m-pdp-nav');
  document.getElementById('pdp-page').style.background=g==='w'?'var(--w-bg)':'var(--m-bg)';
  document.getElementById('pdp-page').classList.add('open');
  document.getElementById('main-site').style.display='none';
  document.getElementById('men-site').style.display='none';
  window.scrollTo(0,0);
}
function closePDP(){
  document.getElementById('pdp-page').classList.remove('open');
  if(currentGender==='women') document.getElementById('main-site').style.display='block';
  else document.getElementById('men-site').style.display='block';
}
function renderPDP(){
  const p=currentPDP;
  document.getElementById('pdp-gallery').className='pdp-gallery '+p.galClass;
  document.getElementById('pdp-main-img').src=pdpImages[0];
  const dotsEl=document.getElementById('pdp-dots');dotsEl.innerHTML='';
  const thumbsEl=document.getElementById('pdp-thumbs');thumbsEl.innerHTML='';
  pdpImages.forEach((_,i)=>{
    const d=document.createElement('button');d.className='pdp-dot'+(i===0?' active':'');d.onclick=()=>setPdpImg(i);dotsEl.appendChild(d);
    const t=document.createElement('div');t.className='pdp-thumb'+(i===0?' active':'');t.innerHTML=`<img src="${pdpImages[i]}" alt="">`;t.onclick=()=>setPdpImg(i);thumbsEl.appendChild(t);
  });
  const freqHtml=p.hasFreq?(function(){
  var rows='';
  for(var i=0;i<FREQS.length;i++){
    if(i===3) rows+='<div style="margin:16px 0 8px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;display:flex;align-items:center;gap:10px"><span style="flex:1;height:1px;background:#ddd"></span>Eller<span style="flex:1;height:1px;background:#ddd"></span></div>';
    rows+='<div class="freq-opt'+(i===1?' sel':'')+'" data-freq="'+FREQS[i].name+'" onclick="pickFreq(this,this.dataset.freq)">';
    rows+='<div class="freq-radio"></div><div class="freq-info"><div class="freq-name">'+FREQS[i].name+(FREQS[i].save?' <span class="freq-save">'+FREQS[i].save+'</span>':'')+'</div>';
    rows+='<div class="freq-sub">'+FREQS[i].sub+'</div></div></div>';
  }
  return '<div class="freq-wrap"><div class="opt-label">Prenumeration – välj frekvens</div><div class="freq-options" id="pdp-freq">'+rows+'<div style="margin-top:40px;padding:24px 0;border-top:1px solid rgba(0,0,0,0.08);display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:center">'
    +'<span style="font-size:12px;color:#888;display:flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>Fri frakt</span>'
    +'<span style="font-size:12px;color:#888;display:flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L8.5 5.5L13 5.5L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5L5.5 5.5L7 1Z" stroke="currentColor" stroke-width="1.2"/></svg>30 dagars öppet köp</span>'
    +'<span style="font-size:12px;color:#888;display:flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="5" width="10" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M4 5V3.5C4 2.12 5.34 1 7 1C8.66 1 10 2.12 10 3.5V5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>SSL-säker betalning</span>'
    +'<span style="font-size:12px;color:#888;display:flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 3H12L11 10H3L2 3Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M2 3L1 1H0" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>Enkel avslutning</span>'
    +'</div>'
    +'</div></div>';
}()):'';
  const colorHtml=p.hasColor&&p.colors.length?`<div style="margin-bottom:24px"><div class="opt-label">Välj färg</div><div class="color-grid" id="pdp-colors">${p.colors.map((c,i)=>`<div class="cswatch ${i===0?'sel':''}" style="background:${c.hex}" data-name="${c.name}" onclick="pickColor(this)" title="${c.name}"></div>`).join('')}</div><div class="color-chosen" id="pdp-color-name">${p.colors[0].name}</div></div>`:'';
  const specRows=p.specs.map(([k,v])=>`<div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>`).join('');
  const feats=p.features.map(([b,t])=>`<div class="feat-item"><div class="feat-dot"></div><div class="feat-text"><strong>${b}</strong> – ${t}</div></div>`).join('');
  const certs=`<div class="certs-grid"><div class="cert"><div class="cert-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="8" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="5" y1="14" x2="23" y2="14" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="8" x2="12" y2="20" stroke="currentColor" stroke-width="1.5"/></svg></div><div class="cert-name">Svenskt stål</div><div class="cert-desc">Kirurgisk kvalitet</div></div><div class="cert"><div class="cert-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 10C18 8 16 7 14 7C10.69 7 8 9.69 8 13C8 16.31 10.69 19 14 19C16 19 18 18 19 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M22 10C21 8 19 7 17 7C13.69 7 11 9.69 11 13C11 16.31 13.69 19 17 19C19 19 21 18 22 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="cert-name">CE-märkt</div><div class="cert-desc">EU-säkerhetskrav</div></div><div class="cert"><div class="cert-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 22V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 17C8 13.13 10.69 10 14 10C17.31 10 20 13.13 20 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 17C10 17 12 16 14 14" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg></div><div class="cert-name">Återvinningsbar</div><div class="cert-desc">FSC-certifierat</div></div><div class="cert"><div class="cert-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M10 13L7 22H21L18 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="cert-name">Dermatologtestad</div><div class="cert-desc">Känslig hud</div></div><div class="cert"><div class="cert-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="8" stroke="currentColor" stroke-width="1.5"/><line x1="8.5" y1="8.5" x2="19.5" y2="19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="cert-name">Cruelty-free</div><div class="cert-desc">Inga djurförsök</div></div><div class="cert"><div class="cert-icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4L20 7V13C20 17.5 17 20.5 14 22C11 20.5 8 17.5 8 13V7L14 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><polyline points="11,13 13,16 17,11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="cert-name">ISO 9001</div><div class="cert-desc">Certifierad kvalitet</div></div></div>`;
  const reviews=p.reviews.map(r=>`<div class="review-card"><div class="rv-head"><span class="rv-name">${r.name}</span><span class="rv-stars">${''.repeat(r.stars)}${''.repeat(5-r.stars)}</span></div><div class="rv-text">${r.text}</div></div>`).join('');
  document.getElementById('pdp-info').className='pdp-info '+p.infoClass;
  document.getElementById('pdp-info').innerHTML=`
    <div class="pdp-breadcrumb"><a href="#" onclick="closePDP();return false">Hem</a> / ${p.name}</div>
    <h1 class="pdp-title">${p.name}</h1>
    <p class="pdp-tagline">${p.tagline}</p>
    <div class="pdp-price-row"><div class="pdp-price">${p.price} kr</div><div class="pdp-price-note">${p.priceNote}<br><span class="${p.freeClass}"> Fri frakt</span></div></div>
    ${colorHtml}${freqHtml}
    <div class="cta-row">
      <div class="qty-wrap"><button class="qty-btn" onclick="changeQty(-1)">−</button><span class="qty-num" id="pdp-qty">1</span><button class="qty-btn" onclick="changeQty(1)">+</button></div>
      <button class="btn-atc" onclick="addFromPDP()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>Lägg i kassa</button>
      
    </div>
    <div class="pdp-badges"><span class="pdp-badge"> CE-märkt</span><span class="pdp-badge"> Fri frakt</span><span class="pdp-badge"> 30 dagars retur</span><span class="pdp-badge"> Secure checkout</span>${p.gender==='m'?'<span class="pdp-badge"> Kirurgiskt stål</span><span class="pdp-badge"> 12° bladvinkel</span>':''}</div>
    <div class="pdp-section"><div class="pdp-section-title">Produktspecifikationer</div>${specRows}</div>
    <div class="pdp-section"><div class="pdp-section-title">${p.gender==='m'?'Teknisk precision':'Det här gör biiw speciellt'}</div>${feats}</div>
    <div class="pdp-section"><div class="pdp-section-title">Certifieringar & godkännanden</div>${certs}</div>
    <div class="pdp-section"><div class="pdp-section-title">Vad kunderna säger</div><div style="display:flex;align-items:center;gap:12px;margin-bottom:20px"><span style="font-size:22px;color:#C4873A"></span><span style="font-family:var(--serif);font-size:24px">4.9</span><span style="font-size:13px;opacity:0.6">(127 recensioner)</span></div>${reviews}</div>`;
}
function setPdpImg(i){pdpImgIdx=i;const im=document.getElementById('pdp-main-img');im.style.opacity='0';setTimeout(()=>{im.src=pdpImages[i];im.style.opacity='1'},180);document.querySelectorAll('.pdp-dot').forEach((d,j)=>d.classList.toggle('active',j===i));document.querySelectorAll('.pdp-thumb').forEach((t,j)=>t.classList.toggle('active',j===i));}
function pdpPrev(){setPdpImg((pdpImgIdx-1+pdpImages.length)%pdpImages.length)}
function pdpNext(){setPdpImg((pdpImgIdx+1)%pdpImages.length)}


function addFromPDP(){
  if(!currentPDP) return;
  var p=currentPDP;
  var key=p.id+'-'+pdpColor+'-'+pdpFreq;
  var existing=cart.find(function(i){return i.key===key;});
  if(existing){
    existing.qty+=pdpQty;
  } else {
    // Get image for current color
    var imgSrc=pdpImages[0];
    if(pdpColor && p.colors){
      var col=p.colors.find(function(c){return c.name===pdpColor;});
      if(col && col.img && IMG_MAP[col.img]) imgSrc=IMG_MAP[col.img];
    }
    cart.push({
      key:key,
      id:p.id,
      name:p.name,
      color:pdpColor,
      freq:pdpFreq,
      price:p.price,
      qty:pdpQty,
      img:imgSrc
    });
  }
  updateCartUI();
  showToast('Lagd i kassan!');
  // Open cart drawer
  setTimeout(function(){openCart();},400);
}
function pickFreq(el, freqName){
  document.querySelectorAll('.freq-opt.sel').forEach(function(e){e.classList.remove('sel');});
  el.classList.add('sel');
  pdpFreq=freqName;
}
function pickColor(el){
  document.querySelectorAll('.cswatch.sel').forEach(function(e){e.classList.remove('sel');});
  el.classList.add('sel');
  var colorName=el.title||el.dataset.name;pdpColor=colorName;
  var nameEl=document.getElementById('pdp-color-name');
  if(nameEl) nameEl.textContent=colorName;
  // Swap gallery image based on color
  var prod=currentPDP;
  if(prod && prod.colors){
    var col=prod.colors.find(function(c){return c.name===colorName;});
    if(col && col.img && IMG_MAP[col.img]){
      var mainImg=document.getElementById('pdp-main-img');
      if(mainImg) mainImg.src=IMG_MAP[col.img];
      // Update first thumbnail too
      var firstThumb=document.querySelector('.pdp-thumb');
      if(firstThumb){firstThumb.src=IMG_MAP[col.img];pdpImages[0]=IMG_MAP[col.img];}
    }
  }
}
function removeItem(k){cart=cart.filter(i=>i.key!==k);updateCartUI();renderOSItems();}
function updateCartUI(){
  const count=cart.reduce((s,i)=>s+i.qty,0);const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  ['cart-count','pdp-cart-count'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=count;});
  document.getElementById('cart-total').textContent=total+' kr';
  const body=document.getElementById('cart-body');const emp=document.getElementById('cart-empty');
  body.querySelectorAll('.ci').forEach(e=>e.remove());emp.style.display=cart.length?'none':'block';
  cart.forEach(item=>{const d=document.createElement('div');d.className='ci';let meta=[];if(item.color)meta.push(item.color);if(item.freq)meta.push(item.freq);meta.push('×'+item.qty);d.innerHTML=`<div class="ci-thumb"><img src="${item.img}" alt=""></div><div class="ci-info"><div class="ci-name">${item.name}</div><div class="ci-meta">${meta.join(' · ')}</div></div><div class="ci-price">${item.price*item.qty} kr</div><button class="ci-rm" onclick="removeItem('${item.key}')"></button>`;body.appendChild(d);});
}
function openCart(){document.getElementById('cart-overlay').classList.add('open');document.getElementById('cart-drawer').classList.add('open');}
function closeCart(){document.getElementById('cart-overlay').classList.remove('open');document.getElementById('cart-drawer').classList.remove('open');}
function goCheckout(){
  if(!cart.length){showToast('Lägg till produkter först');return;}
  closeCart();
  const coPage=document.getElementById('checkout-page');
  coPage.className='checkout-page '+(currentGender==='women'?'w-co':'m-co');
  document.getElementById('order-summary').className='os';
  coPage.classList.add('open');
  document.getElementById('main-site').style.display='none';
  document.getElementById('men-site').style.display='none';
  document.getElementById('pdp-page').classList.remove('open');
  renderOSItems();window.scrollTo(0,0);
}
function closeCheckout(){
  document.getElementById('checkout-page').classList.remove('open');
  if(currentGender==='women') document.getElementById('main-site').style.display='block';
  else document.getElementById('men-site').style.display='block';
}
function renderOSItems(){const el=document.getElementById('os-items');el.innerHTML='';cart.forEach(item=>{let meta=[];if(item.color)meta.push(item.color);if(item.freq)meta.push(item.freq);if(item.qty>1)meta.push('×'+item.qty);el.innerHTML+=`<div class="os-item"><div class="os-thumb"><img src="${item.img}" alt=""></div><div><div class="os-name">${item.name}</div><div class="os-meta">${meta.join(' · ')}</div></div><div class="os-price">${item.price*item.qty} kr</div></div>`;});const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);const tot=sub+deliveryCost;document.getElementById('os-sub').textContent=sub+' kr';document.getElementById('os-ship').textContent=deliveryCost?deliveryCost+' kr':'Gratis';document.getElementById('os-tot').textContent=tot+' kr';}
function setDelivery(el,cost){document.querySelectorAll('.del-opt').forEach(o=>o.classList.remove('sel'));el.classList.add('sel');deliveryCost=cost;renderOSItems();}
function setPay(el,method){document.querySelectorAll('.pay-opt').forEach(o=>o.classList.remove('sel'));el.classList.add('sel');document.getElementById('card-fs').classList.toggle('show',method==='card');document.getElementById('swish-fs').style.display=method==='swish'?'block':'none';document.getElementById('klarna-fs').style.display=method==='klarna'?'block':'none';}
function fmtCard(el){let v=el.value.replace(/[^0-9]/g,'').substring(0,16);el.value=v.replace(/(.{4})/g,'$1 ').trim();}
function fmtExp(el){let v=el.value.replace(/[^0-9]/g,'');if(v.length>=2)v=v.substring(0,2)+'/'+v.substring(2,4);el.value=v;}
function placeOrder(){const fn=document.getElementById('co-fn').value;const em=document.getElementById('co-em').value;const ad=document.getElementById('co-ad').value;if(!fn||!em||!ad){showToast('Fyll i alla obligatoriska fält');return;}const num='BIIW-'+Math.floor(10000+Math.random()*90000);document.getElementById('confirm-num').textContent='Order #'+num;const cp=document.getElementById('confirm-pg');cp.className='confirm-pg '+(currentGender==='women'?'w-conf':'m-conf');document.getElementById('confirm-btn').className=currentGender==='women'?'btn-w-primary':'btn-m-primary';cp.classList.add('open');document.getElementById('checkout-page').classList.remove('open');cart=[];updateCartUI();window.scrollTo(0,0);}
function backToShop(){document.getElementById('confirm-pg').classList.remove('open');if(currentGender==='women')document.getElementById('main-site').style.display='block';else document.getElementById('men-site').style.display='block';}
const obs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('v'),i*100);});},{threshold:0.07});
document.querySelectorAll('.fi').forEach(el=>obs.observe(el));
function showToast(msg){
  const isM=currentGender==='men';
  const tw=document.getElementById('toast-w'),tm=document.getElementById('toast-m');
  tw.style.display=isM?'none':'flex';tm.style.display=isM?'flex':'none';
  const t=isM?tm:tw;const msgEl=isM?document.getElementById('toast-msg-m'):document.getElementById('toast-msg-w');
  msgEl.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3200);
}

(function(){if(sessionStorage.getItem('biiw_pw')==='1')document.getElementById('pw-screen').style.display='none';})();
function checkPw(){var v=document.getElementById('pw-input').value;if(v==='biiw2026'){sessionStorage.setItem('biiw_pw','1');document.getElementById('pw-screen').style.display='none';}else{document.getElementById('pw-err').style.display='block';document.getElementById('pw-input').value='';}}
function toggleHam(){
  document.getElementById('ham-menu').classList.toggle('open');
}
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('#ham-menu a').forEach(function(a){
    a.addEventListener('click',function(){
      document.getElementById('ham-menu').classList.remove('open');
    });
  });
});
function submitForm(e,g){e.preventDefault();showToast('Tack! Vi återkommer inom ett dygn ');e.target.reset();}
