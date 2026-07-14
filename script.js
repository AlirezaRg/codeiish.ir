// ════════════════════ GLOBAL CINEMATIC BACKGROUND ════════════════════
(()=>{
  const gImg=document.getElementById('global-img');
  const gOvl=document.getElementById('global-overlay');
  if(!gImg||!gOvl)return;

  // Section → background config
  const SCENES=[
    {id:'hero',   img:'',          overlay:'rgba(5,6,8,.55)',  pos:'center'},
    {id:'studio', img:'',          overlay:'rgba(5,6,8,.72)',  pos:'center'},
    {id:'about',  img:'',          overlay:'rgba(5,6,8,.72)',  pos:'center'},
    {id:'skills', img:'',          overlay:'rgba(5,6,8,.72)',  pos:'center'},
    {id:'contact',img:'',          overlay:'rgba(5,6,8,.72)',  pos:'center'},
  ];

  // Project images (injected into global bg when projects section active)
  const PROJ_IMGS=[
    {img:'./img/rasco.jpg',    overlay:'rgba(5,20,15,.72)',  pos:'center top'},
    {img:'./img/gosi.jpg',     overlay:'rgba(20,10,25,.65)', pos:'center'},
    {img:'./img/odoo.jpg',     overlay:'rgba(5,5,25,.70)',   pos:'center'},
    {img:'',                   overlay:'rgba(10,5,3,.75)',   pos:'center'},
    {img:'./img/exchange.png', overlay:'rgba(5,5,5,.60)',    pos:'center'},
    {img:'./img/codeanalysis.png',overlay:'rgba(5,5,5,.60)',  pos:'center'},
    {img:'./img/telegram.jpg', overlay:'rgba(0,0,0,.60)',    pos:'center top'},
    {img:'',                   overlay:'rgba(20,5,5,.72)',   pos:'center'},
  ];

  let curImg=null;

  function applyBg(imgSrc, overlay, pos){
    if(imgSrc===curImg)return;
    curImg=imgSrc;
    if(imgSrc){
      gImg.style.backgroundImage=`url(${imgSrc})`;
      gImg.style.backgroundPosition=pos||'center';
      gImg.classList.remove('prev');
      requestAnimationFrame(()=>{ gImg.classList.add('visible'); });
    } else {
      gImg.classList.remove('visible');
      gImg.classList.add('prev');
      setTimeout(()=>gImg.classList.remove('prev'),1200);
    }
    gOvl.style.background=overlay||'rgba(5,6,8,.6)';
  }

  // Observe non-project sections
  const sectionObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const id=e.target.id;
      if(id==='projects')return; // handled by project scroll
      const s=SCENES.find(x=>x.id===id);
      if(s)applyBg(s.img,s.overlay,s.pos);
    });
  },{threshold:.3});

  ['hero','studio','about','skills','contact'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)sectionObs.observe(el);
  });

  // Hook into project switch
  window._onProjChange=(idx)=>{
    const p=PROJ_IMGS[Math.max(0,Math.min(idx,PROJ_IMGS.length-1))];
    applyBg(p.img,p.overlay,p.pos);
  };

  // init
  applyBg('','rgba(5,6,8,.55)','center');
})();

// ════════════════════ PRELOADER ════════════════════
(()=>{
  const pre=document.getElementById('preloader');
  if(!pre)return;
  document.body.classList.add('pl-active');
  const num=document.getElementById('plNum');
  const bar=document.getElementById('plBarFill');
  const icons=pre.querySelectorAll('.pli');
  const duration=1700;
  const start=performance.now();
  function step(ts){
    const elapsed=ts-start;
    const p=Math.min(100,Math.round((elapsed/duration)*100));
    if(num)num.textContent=p;
    if(bar)bar.style.width=p+'%';
    const lit=Math.ceil((p/100)*icons.length);
    icons.forEach((ic,i)=>{ ic.classList.toggle('on', i<lit); });
    if(p<100){ requestAnimationFrame(step); }
    else{
      setTimeout(()=>{
        pre.classList.add('done');
        document.body.classList.remove('pl-active');
        setTimeout(()=>{ pre.remove(); },850);
      },300);
    }
  }
  requestAnimationFrame(step);
})();

// ════════════════════ I18N DICTIONARY ════════════════════
const I18N = {
  en: {
    navStudio:'Studio', navAbout:'About', navSkills:'Skills', navProjects:'Projects', navContact:'Contact',
    heroBadge:'Open to backend &amp; integration work',
    heroLabel:'// founder of alirezarg',
    heroTagline:"I build backends that don't fall over, bridge hardware that was never meant to talk to ERP systems, and ship small AI tools for the boring parts of my own workflow.",
    btnProjects:'View Projects', btnContact:'Get in Touch',
    studioEyb:'The Practice',
    studioTitle:'Backend work that <span class="g">actually ships</span>',
    studioSub:'AlirezaRg is the practice of one developer — Python and Linux at the core, with a habit of connecting systems that were never designed to meet each other.',
    pillar1T:'Bridge real hardware',
    pillar1D:'Biometric devices, legacy protocols, ERP systems — none of them speak the same language until something sits in the middle and translates.',
    pillar2T:'Build for production',
    pillar2D:"Linux servers, systemd services, secure APIs — code that's still standing after the demo, running quietly on a server somewhere.",
    pillar3T:'Automate the repetitive',
    pillar3D:"Sync jobs, background workers, small AI-driven assistants — if a task repeats more than twice, it probably shouldn't need a human anymore.",
    scTitle:'One developer. <i>Real systems.</i>',
    scDesc:'AlirezaRg sits at the intersection of Python backends, Linux administration, and AI-assisted tooling — built by Alireza Rogni, with a particular fondness for making stubborn hardware behave.',
    stat1:'Shipped Projects', stat2:'ERP / Hardware Bridges', stat3:'Primary Deployment OS', stat4:'Source on GitHub', statOpenVal:'Open',
    aboutEyb:'Who I Am',
    aboutTitle:'The person behind <span class="g">AlirezaRg</span>',
    aboutSub:"Backend developer, Linux administrator, and someone who'd rather automate a problem than repeat it. Currently deep in Odoo integrations and small AI-powered tools.",
    availStatus:'Available for work', foundTag:'FOUNDER',
    tl1y:'Foundations', tl1t:'Python &amp; the terminal',
    tl1d:'Started writing scripts to avoid repeating work by hand — and got hooked on automation and the Linux shell.',
    tl2y:'Going Deeper', tl2t:'Linux &amp; server administration',
    tl2d:'Managing Debian servers, services, and remote access — including the occasional self-inflicted xrdp outage to learn from.',
    tl3y:'Production Systems', tl3t:'Flask, Django &amp; ERP integration',
    tl3d:'Built a Flask middleware bridging ST-Face biometric devices with Odoo 18 — and a full Django e-commerce app from scratch.',
    tl4y:'AI Tooling', tl4t:'Building with Claude Code as an engine',
    tl4d:'Started wiring Claude Code CLI into desktop apps — Rasco and Gosi — to automate my own day-to-day development.',
    tl5y:'Now', tl5t:'AlirezaRg',
    tl5d:'Taking on backend, Linux, and integration work under one name — and still automating everything I possibly can.',
    skillsEyb:'Technical Stack', skillsTitle:'What <span class="g">AlirezaRg</span> Does',
    sk1T:'Backend Engineering', sk1D:'REST APIs, background workers, and database-driven services built with Python — designed to keep running unattended.',
    sk2T:'Linux &amp; Server Ops', sk2D:'Debian administration, systemd services, remote access, and deployment pipelines — comfortable living in the terminal.',
    sk3T:'Databases', sk3D:'Schema design, migrations, and query tuning across relational databases for systems that need to stay consistent.',
    sk4T:'ERP &amp; Hardware Integration', sk4D:'Custom Odoo modules and middleware that connect biometric devices and other hardware to real ERP workflows.',
    sk5T:'AI-Powered Tooling', sk5D:'Desktop assistants and coding tools built on top of Claude Code CLI, wired in as the reasoning engine.',
    sk6T:'Real-Time Systems', sk6D:'WebSocket communication and event-driven sync between devices and servers, built to react as things happen.',
    projEyb:'AlirezaRg Builds', projTitle:'Featured <span class="g">Projects</span>',
    badgeOpenSource:'Open Source', badgeClient:'Client Project', badgePersonal:'Personal Project',
    pj1D:'A JARVIS-style desktop AI assistant with a Tkinter UI, using Claude Code CLI via subprocess as its reasoning engine.',
    pj2D:'A cyberpunk-themed coding assistant, also powered by Claude Code CLI under the hood for day-to-day dev tasks.',
    pj3T:'Flask + Odoo Attendance Bridge',
    pj3D:'Flask middleware connecting ST-Face biometric attendance devices to Odoo 18, with a custom Odoo module for employee photo sync, device wizards, and secure API key handling.',
    pj4T:'Omid Market',
    pj4D:'A full Django e-commerce app for a supermarket, with PostgreSQL, ZarinPal payment integration, and RTL-ready Bootstrap 5 templates.',
    pj5D:'An AI-powered code translator between 13 programming languages, with a dual-panel Tkinter UI, using Claude Code CLI as the translation engine.',
    pj6D:'An AI-powered codebase search and file-explainer — scans an entire project folder and answers natural-language questions about where things live in the code, powered by Claude Code CLI.',
    pj7D:'A full-featured Telegram bot for downloading video and audio from YouTube, Instagram, TikTok, SoundCloud, and Twitter/X, with an in-chat admin panel and SQLite-backed user management.',
    pj8T:'Video01',
    pj8D:'A playful Telegram bot (with a desktop GUI twin) that converts video files frame-by-frame into pure binary — shipped back as a reconstructable ZIP of bits and base64 frame data.',
    ctEyb:'Get in Touch', ctTitle:'Work with <span class="g">AlirezaRg</span>',
    ctDesc:"Have a backend, Odoo, or hardware-integration project in mind? Or just want to talk about Linux and AI tooling? I'm open to new work and good conversations.",
    emailLabel:'Email',
    fFirst:'First Name', fLast:'Last Name', fEmail:'Email', fTopic:'Topic', fMessage:'Message',
    fMessagePh:'Tell me about your project...',
    topicSelect:'Select a topic...', topic1:'Backend Project', topic2:'Odoo / ERP Integration', topic3:'AI Tooling', topic4:'General Inquiry',
    sendBtn:'Send Message',
    formNote:'Until a backend is connected, this opens a pre-filled email instead.',
    footerCopy:'© 2026 AlirezaRg · Alireza Rogni · All rights reserved',
    sendingTxt:'Sending...', sentTxt:'✓ Message Sent!', failTxt:'✗ Failed — Try Again',
    filterAll:'All', copyEmailLabel:'Copy email', copiedLabel:'✓ Copied!', ghLiveLabel:'Live from github.com/AlirezaRg'
  },
  fa: {
    navStudio:'استودیو', navAbout:'درباره من', navSkills:'مهارت‌ها', navProjects:'پروژه‌ها', navContact:'تماس',
    heroBadge:'آماده همکاری روی پروژه‌های بک‌اند و یکپارچه‌سازی',
    heroLabel:'// بنیان‌گذار AlirezaRg',
    heroTagline:'بک‌اندهایی می‌سازم که از پا نمی‌افتن، سخت‌افزارهایی رو که قرار نبوده با ERP حرف بزنن به هم وصل می‌کنم، و ابزارهای کوچیک هوش مصنوعی برای بخش‌های خسته‌کننده‌ی کار خودم می‌سازم.',
    btnProjects:'مشاهده پروژه‌ها', btnContact:'تماس بگیرید',
    studioEyb:'روش کار',
    studioTitle:'کار بک‌اندی که <span class="g">واقعاً تحویل می‌شه</span>',
    studioSub:'AlirezaRg کار یک توسعه‌دهنده‌ست — پایتون و لینوکس در مرکز، و عادت وصل کردن سیستم‌هایی که هیچ‌وقت قرار نبوده همدیگه رو ببینن.',
    pillar1T:'اتصال سخت‌افزار واقعی',
    pillar1D:'دستگاه‌های بیومتریک، پروتکل‌های قدیمی، سیستم‌های ERP — هیچ‌کدوم زبون مشترکی ندارن تا یه چیزی وسط بنشینه و ترجمه کنه.',
    pillar2T:'ساخت برای Production',
    pillar2D:'سرورهای لینوکسی، سرویس‌های systemd، APIهای امن — کدی که بعد از دمو هم سرپا می‌مونه و یه‌جایی روی سرور آروم کار می‌کنه.',
    pillar3T:'خودکارسازی کارهای تکراری',
    pillar3D:'جاب‌های sync، workerهای پس‌زمینه، دستیارهای کوچیک مبتنی بر AI — اگه یه کار بیشتر از دوبار تکرار شه، احتمالاً دیگه نباید دست انسان باشه.',
    scTitle:'یک توسعه‌دهنده. <i>سیستم‌های واقعی.</i>',
    scDesc:'AlirezaRg جایی‌ست که بک‌اند پایتون، مدیریت لینوکس، و ابزارهای مبتنی بر AI به هم می‌رسن — ساخته‌ی علیرضا رُگنی، با علاقه‌ی خاص به سر راه آوردن سخت‌افزارهای سرسخت.',
    stat1:'پروژه‌ی تحویل‌شده', stat2:'اتصال ERP / سخت‌افزار', stat3:'سیستم‌عامل اصلی دیپلوی', stat4:'سورس روی گیت‌هاب', statOpenVal:'باز',
    aboutEyb:'من کی‌ام',
    aboutTitle:'آدمی پشت <span class="g">AlirezaRg</span>',
    aboutSub:'توسعه‌دهنده‌ی بک‌اند، مدیر سرور لینوکس، و کسی که ترجیح می‌ده یه مشکل رو خودکار کنه تا اینکه دوباره و دوباره تکرارش کنه. این روزها غرق در یکپارچه‌سازی اودوو و ابزارهای کوچیک هوش مصنوعیه.',
    availStatus:'آماده همکاری', foundTag:'بنیان‌گذار',
    tl1y:'پایه‌ها', tl1t:'پایتون و ترمینال',
    tl1d:'شروع کردم به نوشتن اسکریپت برای اینکه کار تکراری رو با دست انجام ندم — و همون‌جا عاشق خودکارسازی و شل لینوکس شدم.',
    tl2y:'عمیق‌تر شدن', tl2t:'مدیریت سرور و لینوکس',
    tl2d:'مدیریت سرورهای دبیان، سرویس‌ها، و دسترسی ریموت — همراه با یه قطعی xrdp که خودم باعثش شدم و از دلش یاد گرفتم.',
    tl3y:'سیستم‌های Production', tl3t:'یکپارچه‌سازی Flask، Django و ERP',
    tl3d:'یه میدل‌ور Flask ساختم که دستگاه‌های بیومتریک ST-Face رو به اودوو ۱۸ وصل می‌کنه — و یه اپ فروشگاهی کامل با Django از صفر.',
    tl4y:'ابزارهای هوش مصنوعی', tl4t:'ساخت ابزار با موتور Claude Code',
    tl4d:'شروع کردم به وصل کردن Claude Code CLI به اپ‌های دسکتاپ — Rasco و Gosi — برای خودکارسازی کار روزمره‌ی خودم.',
    tl5y:'الان', tl5t:'AlirezaRg',
    tl5d:'بک‌اند، لینوکس و یکپارچه‌سازی رو زیر یه اسم انجام می‌دم — و هنوز هرچیزی که می‌شه رو خودکار می‌کنم.',
    skillsEyb:'استک فنی', skillsTitle:'کاری که <span class="g">AlirezaRg</span> انجام می‌ده',
    sk1T:'مهندسی بک‌اند', sk1D:'APIهای REST، workerهای پس‌زمینه، و سرویس‌های دیتابیس‌محور با پایتون — طراحی‌شده برای کار کردن بدون نظارت.',
    sk2T:'لینوکس و عملیات سرور', sk2D:'مدیریت دبیان، سرویس‌های systemd، دسترسی ریموت، و پایپ‌لاین دیپلوی — راحت توی ترمینال.',
    sk3T:'دیتابیس‌ها', sk3D:'طراحی schema، migration، و تیون کوئری روی دیتابیس‌های رابطه‌ای برای سیستم‌هایی که باید consistent بمونن.',
    sk4T:'یکپارچه‌سازی ERP و سخت‌افزار', sk4D:'ماژول‌های اختصاصی اودوو و میدل‌ورهایی که دستگاه‌های بیومتریک و سخت‌افزار دیگه رو به فرآیندهای واقعی ERP وصل می‌کنن.',
    sk5T:'ابزارهای مبتنی بر AI', sk5D:'دستیارهای دسکتاپ و ابزارهای کدنویسی روی Claude Code CLI، به‌عنوان موتور استدلال.',
    sk6T:'سیستم‌های Real-Time', sk6D:'ارتباط WebSocket و سینک event-driven بین دستگاه‌ها و سرورها، برای واکنش لحظه‌ای.',
    projEyb:'ساخته‌های AlirezaRg', projTitle:'پروژه‌های <span class="g">منتخب</span>',
    badgeOpenSource:'متن‌باز', badgeClient:'پروژه‌ی مشتری', badgePersonal:'پروژه شخصی',
    pj1D:'یه دستیار هوش مصنوعی دسکتاپ به سبک JARVIS با رابط Tkinter، که از Claude Code CLI از طریق subprocess به‌عنوان موتور استدلال استفاده می‌کنه.',
    pj2D:'یه دستیار کدنویسی با تم سایبرپانک، که اون هم زیرش با Claude Code CLI برای کارهای روزمره‌ی توسعه کار می‌کنه.',
    pj3T:'پل Flask + Odoo برای حضور و غیاب',
    pj3D:'میدل‌ور Flask که دستگاه‌های حضور و غیاب بیومتریک ST-Face رو به اودوو ۱۸ وصل می‌کنه، با یه ماژول اختصاصی اودوو برای سینک عکس پرسنل، ویزارد انتخاب دستگاه، و مدیریت امن API key.',
    pj4T:'امید مارکت',
    pj4D:'یه اپ فروشگاهی کامل با Django برای یه سوپرمارکت، با PostgreSQL، درگاه پرداخت زرین‌پال، و قالب‌های Bootstrap 5 آماده برای راست‌چین.',
    pj5D:'یه مبدل کد مبتنی بر هوش مصنوعی بین ۱۳ زبان برنامه‌نویسی، با رابط دوپنلی Tkinter، که از Claude Code CLI به‌عنوان موتور ترجمه استفاده می‌کنه.',
    pj6D:'یه ابزار جست‌وجوی هوشمند کدبیس و توضیح‌دهنده‌ی فایل — کل پوشه‌ی پروژه رو اسکن می‌کنه و به سوالات طبیعی درباره‌ی محل کدها جواب می‌ده، با موتور Claude Code CLI.',
    pj7D:'یه بات تلگرام کامل برای دانلود ویدیو و صدا از یوتیوب، اینستاگرام، تیک‌تاک، ساندکلاد و توییتر/X، با پنل ادمین داخل چت و مدیریت کاربران روی SQLite.',
    pj8T:'Video01',
    pj8D:'یه بات تلگرام بازیگوش (همراه با نسخه‌ی دسکتاپ) که ویدیو رو فریم‌به‌فریم به ۰ و ۱ خالص تبدیل می‌کنه و یه ZIP قابل بازسازی از بیت‌ها و داده‌ی هر فریم پس می‌فرسته.',
    ctEyb:'در ارتباط باشید', ctTitle:'همکاری با <span class="g">AlirezaRg</span>',
    ctDesc:'یه پروژه‌ی بک‌اند، اودوو، یا یکپارچه‌سازی سخت‌افزار در ذهن داری؟ یا فقط می‌خوای درباره‌ی لینوکس و ابزارهای AI صحبت کنی؟ من برای کار و گفت‌وگوهای خوب در دسترسم.',
    emailLabel:'ایمیل',
    fFirst:'نام', fLast:'نام خانوادگی', fEmail:'ایمیل', fTopic:'موضوع', fMessage:'پیام',
    fMessagePh:'درباره پروژه‌تون بگید...',
    topicSelect:'یه موضوع انتخاب کنید...', topic1:'پروژه بک‌اند', topic2:'یکپارچه‌سازی اودوو / ERP', topic3:'ابزار هوش مصنوعی', topic4:'سوال عمومی',
    sendBtn:'ارسال پیام',
    formNote:'تا وقتی بک‌اند واقعی وصل نشه، این دکمه یه ایمیل از پیش پرشده باز می‌کنه.',
    footerCopy:'© ۲۰۲۶ AlirezaRg · علیرضا رُگنی · تمام حقوق محفوظ است',
    sendingTxt:'در حال ارسال...', sentTxt:'✓ پیام ارسال شد!', failTxt:'✗ ناموفق — دوباره تلاش کنید',
    filterAll:'همه', copyEmailLabel:'کپی ایمیل', copiedLabel:'✓ کپی شد!', ghLiveLabel:'زنده از github.com/AlirezaRg'
  }
};

const rolesByLang = {
  en:['Backend Developer','Python Developer','Linux Administrator','Odoo Integrator','AI Tools Builder','Founder of AlirezaRg'],
  fa:['توسعه‌دهنده بک‌اند','توسعه‌دهنده پایتون','مدیر سرور لینوکس','یکپارچه‌ساز اودوو','سازنده ابزار هوش مصنوعی','بنیان‌گذار AlirezaRg']
};

let curLang='en';
function applyLang(lang){
  curLang=lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='fa'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n;
    if(I18N[lang][k]!==undefined)el.innerHTML=I18N[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k=el.dataset.i18nPh;
    if(I18N[lang][k]!==undefined)el.placeholder=I18N[lang][k];
  });
  const lb=document.getElementById('langBtn');
  if(lb)lb.textContent=lang==='fa'?'EN':'FA';
  ri=0;ci=0;del=false;
  if(tel)tel.textContent='';
}
const langBtnEl=document.getElementById('langBtn');
if(langBtnEl)langBtnEl.addEventListener('click',()=>applyLang(curLang==='en'?'fa':'en'));

// ─── POINTER TRACKER ───
const isMob=()=>!window.matchMedia('(hover:hover)').matches;
const ptrDot=document.getElementById('ptr-dot'),ptrRing=document.getElementById('ptr-ring');
let mx=window.innerWidth/2,my=window.innerHeight/2,rx=0,ry=0;
if(!isMob()){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;ptrDot.style.cssText+=`;left:${mx}px;top:${my}px`});
  (function lp(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ptrRing.style.cssText+=`;left:${Math.round(rx)}px;top:${Math.round(ry)}px`;requestAnimationFrame(lp)})();
  document.querySelectorAll('a,button,.pjc,.sk,.soc,.pillar,.sc-stat').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ptrDot.classList.add('h');ptrRing.classList.add('h')});
    el.addEventListener('mouseleave',()=>{ptrDot.classList.remove('h');ptrRing.classList.remove('h')});
  });
}

// ─── SKILL GLOW ───
document.querySelectorAll('.sk').forEach(c=>c.addEventListener('mousemove',e=>{
  const r=c.getBoundingClientRect();
  c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
  c.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
}));

// ─── TYPING (hero role line) ───
let ri=0,ci=0,del=false;
const tel=document.getElementById('typed');
function tl(){
  const roles=rolesByLang[curLang];
  const w=roles[ri];
  if(!del){tel.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(tl,1900);return}}
  else{tel.textContent=w.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%roles.length}}
  setTimeout(tl,del?55:105);
}

// ─── TERMINAL PANEL (signature animation) ───
(()=>{
  const body=document.getElementById('term-body');
  if(!body)return;
  const blocks=[
    [
      {p:true,text:'whoami'},
      {p:false,text:'alireza',cls:'t-dim'},
      {p:true,text:'systemctl status odoo'},
      {p:false,text:'● active (running) since 14:02:11',cls:'t-ok'}
    ],
    [
      {p:true,text:'python3'},
      {p:true,py:true,text:'from flask_bridge import sync_employee'},
      {p:true,py:true,text:'sync_employee(device="ST-Face X7")'},
      {p:false,text:'✓ synced 42 employees',cls:'t-ok'}
    ],
    [
      {p:true,text:'python rasco/main.py'},
      {p:false,text:'[Rasco] booting JARVIS-style core...',cls:'t-dim'},
      {p:false,text:'[Rasco] Claude Code CLI engine: online',cls:'t-ok'}
    ],
    [
      {p:true,text:'git push origin main'},
      {p:false,text:'Enumerating objects: done.',cls:'t-dim'},
      {p:false,text:'To github.com:AlirezaRg/Rasco-Gosi.git',cls:'t-dim'}
    ]
  ];
  let bIdx=0,killed=false;
  function typeBlock(){
    if(killed)return;
    body.innerHTML='';
    const block=blocks[bIdx];
    let lIdx=0;
    function nextLine(){
      if(lIdx>=block.length){setTimeout(()=>{bIdx=(bIdx+1)%blocks.length;typeBlock();},2400);return}
      const line=block[lIdx];
      const div=document.createElement('div');
      if(line.cls)div.className=line.cls;
      body.appendChild(div);
      let ci2=0;
      const full=line.text;
      const prompt=line.p?(line.py?'&gt;&gt;&gt; ':'$ '):'';
      function typeChar(){
        if(ci2<=full.length){
          const cur=ci2<full.length?'<span class="term-cursor"></span>':'';
          div.innerHTML=(line.p?`<span class="t-prompt">${prompt}</span>`:'')+escapeHtml(full.slice(0,ci2))+cur;
          ci2++;
          setTimeout(typeChar,line.p?30:12);
        }else{
          lIdx++;
          setTimeout(nextLine,line.p?280:420);
        }
      }
      typeChar();
    }
    nextLine();
  }
  function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
  typeBlock();
})();

// ─── SCROLL PROGRESS ───
const spb=document.getElementById('spb');
window.addEventListener('scroll',()=>{
  const pct=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;
  spb.style.width=pct.toFixed(1)+'%';
  document.getElementById('nav').classList.toggle('s',window.scrollY>60);
},{ passive:true });

// ─── REVEAL ───
const ro=new IntersectionObserver(en=>{
  en.forEach(e=>{if(e.isIntersecting){const d=+(e.target.dataset.delay||0);setTimeout(()=>e.target.classList.add('in'),d)}});
},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.rv,.rvl,.rvr,.sk,.pjc,.tli,.pillar').forEach(el=>ro.observe(el));

// ─── HAMBURGER ───
const hbg=document.getElementById('hbg'),mNav=document.getElementById('mNav');
function cm(){hbg.classList.remove('o');mNav.classList.remove('o');document.body.style.overflow=''}
hbg.addEventListener('click',()=>{const o=hbg.classList.toggle('o');mNav.classList.toggle('o',o);document.body.style.overflow=o?'hidden':''});

// ─── SMOOTH SCROLL ───
function gs(sel){const t=document.querySelector(sel);if(t)t.scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const h=a.getAttribute('href');if(h&&h!=='#'){e.preventDefault();gs(h);cm()}})});

// ─── ACTIVE NAV ───
const secs=['studio','about','skills','projects','contact'];
const nls=document.querySelectorAll('.nav-links a');
const ao=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting){nls.forEach(l=>l.classList.remove('act'));const ac=document.querySelector(`.nav-links a[href="#${e.target.id}"]`);if(ac)ac.classList.add('act')}})},{threshold:.35});
secs.forEach(id=>{const el=document.getElementById(id);if(el)ao.observe(el)});

// ─── COPYRIGHT YEAR ───
(()=>{
  const yr=new Date().getFullYear();
  I18N.en.footerCopy=I18N.en.footerCopy.replace(/© \d{4}/,'© '+yr);
})();

// ─── CONTACT FORM (Formspree + mailto fallback) ───
const FORMSPREE_ID='YOUR_FORMSPREE_ID';
const sbtn=document.getElementById('sbtn');
const sendIconSVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';

function getFormData(){
  const form=sbtn.closest('.cform')||document.getElementById('contact');
  const inputs=form?form.querySelectorAll('input, textarea, select'):[];
  const data={};
  inputs.forEach(el=>{ if(el.name)data[el.name]=el.value.trim(); });
  return data;
}

function validateForm(){
  const firstEl=document.getElementById('first_name');
  const lastEl=document.getElementById('last_name');
  const emailEl=document.getElementById('email');
  const messageEl=document.getElementById('message');
  const mark=(el)=>{if(!el)return;el.style.borderColor='#ff5555';el.focus();el.addEventListener('input',()=>{el.style.borderColor=''},{once:true})};
  if(firstEl&&!firstEl.value.trim()){mark(firstEl);return false}
  if(lastEl&&!lastEl.value.trim()){mark(lastEl);return false}
  if(emailEl){
    const v=emailEl.value.trim();
    if(!v||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){mark(emailEl);return false}
  }
  if(messageEl&&!messageEl.value.trim()){mark(messageEl);return false}
  return true;
}

sbtn.addEventListener('click',async function(){
  if(!validateForm())return;
  const span=this.querySelector('span');

  if(!FORMSPREE_ID||FORMSPREE_ID==='YOUR_FORMSPREE_ID'){
    const firstEl=document.getElementById('first_name');
    const lastEl=document.getElementById('last_name');
    const topicEl=document.getElementById('topic');
    const emailEl=document.getElementById('email');
    const messageEl=document.getElementById('message');
    const name=[firstEl?.value.trim(),lastEl?.value.trim()].filter(Boolean).join(' ');
    const email=emailEl?.value.trim()||'';
    const topic=topicEl?.options[topicEl.selectedIndex]?.text?.trim()||topicEl?.value||'';
    const message=messageEl?.value.trim()||'';
    const subject=encodeURIComponent('Portfolio Contact from '+name);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
    window.location.href=`mailto:alirezarogni@gmail.com?subject=${subject}&body=${body}`;
    return;
  }

  this.disabled=true;
  if(span)span.textContent=I18N[curLang].sendingTxt;

  const formData=getFormData();
  try{
    const res=await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify(formData)
    });
    if(res.ok){
      if(span)span.textContent=I18N[curLang].sentTxt;
      this.style.background='linear-gradient(135deg,#36e0c1,#1fae8f)';
      document.querySelectorAll('.cform input, .cform textarea').forEach(el=>el.value='');
      document.querySelectorAll('.cform select').forEach(el=>el.selectedIndex=0);
      setTimeout(()=>{
        if(span)span.textContent=I18N[curLang].sendBtn;
        this.style.background='';
        this.disabled=false;
      },4000);
    }else{throw new Error('Server error')}
  }catch(err){
    if(span)span.textContent=I18N[curLang].failTxt;
    this.style.background='linear-gradient(135deg,#ff6b5b,#cc3322)';
    this.disabled=false;
    setTimeout(()=>{ if(span)span.textContent=I18N[curLang].sendBtn; this.style.background=''; },3500);
  }
});

// ─── PROJECTS — AUTO-SCROLL MARQUEE + DETAIL GRID ───
(()=>{
  const GH='<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>';
  const PI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h4"/></svg>';

  const PROJ = [
    { badge:'os', accent:'#ffb454', title:'Rasco',
      en:{desc:'A JARVIS-style desktop AI assistant — Claude Code CLI wired as the reasoning engine, Tkinter as the face. Reads your code, runs commands, and answers questions in real time.'},
      fa:{desc:'دستیار هوش مصنوعی دسکتاپ به سبک JARVIS — Claude Code CLI به‌عنوان موتور استدلال و Tkinter به‌عنوان رابط. کد رو می‌خونه، دستورات رو اجرا می‌کنه و سوالات رو لحظه‌ای جواب می‌ده.'},
      tags:['Python','Tkinter','Claude Code CLI'], link:'https://github.com/AlirezaRg/Rasco-Gosi' },
    { badge:'os', accent:'#ff7a1a', title:'Gosi',
      en:{desc:'A cyberpunk-themed coding assistant with a sheep mascot, powered by Claude Code CLI. Explains functions, finds bugs, and suggests fixes — all from a sleek desktop UI.'},
      fa:{desc:'دستیار کدنویسی با تم سایبرپانک و ماسکات گوسفند، مبتنی بر Claude Code CLI. توابع رو توضیح می‌ده، باگ پیدا می‌کنه و راه‌حل پیشنهاد می‌ده — همه از یه رابط دسکتاپ شیک.'},
      tags:['Python','Claude Code CLI','Desktop UI'], link:'https://github.com/AlirezaRg/Rasco-Gosi' },
    { badge:'cl', accent:'#ffb454', title:'Flask + Odoo Bridge',
      en:{desc:'Flask middleware connecting ST-Face E540 biometric devices to Odoo 18 ERP. Employees check in on a physical device — Odoo records it instantly via WebSocket, no manual data entry.'},
      fa:{desc:'میدل‌ور Flask که دستگاه‌های بیومتریک ST-Face E540 رو به اودوو ۱۸ وصل می‌کنه. کارمندان از دستگاه فیزیکی ورود می‌زنن — اودوو فوری از طریق WebSocket ثبت می‌کنه، بدون ورود دستی.'},
      tags:['Flask','Odoo 18','WebSocket','PostgreSQL'], link:'' },
    { badge:'cl', accent:'#ff7a1a', title:'Omid Market',
      en:{desc:'A full-featured Django e-commerce app for a supermarket. Product catalog, cart management, ZarinPal payment gateway, and admin panel — with complete RTL support for Persian users.'},
      fa:{desc:'اپ فروشگاهی کامل با Django برای یه سوپرمارکت. کاتالوگ محصول، مدیریت سبد خرید، درگاه پرداخت زرین‌پال و پنل ادمین — با پشتیبانی کامل RTL برای کاربران فارسی‌زبان.'},
      tags:['Django','PostgreSQL','ZarinPal','Bootstrap 5 RTL'], link:'' },
    { badge:'os', accent:'#ffb454', title:'EX-CHANGE',
      en:{desc:'AI-powered code translator across 13 programming languages. Write in Python, get it in Rust, Go, Java or any other — instantly, with Claude Code CLI preserving the idioms of the target language.'},
      fa:{desc:'مبدل کد هوشمند بین ۱۳ زبان برنامه‌نویسی. به پایتون بنویس، فوری به Rust، Go یا Java تبدیل کن — با Claude Code CLI که اصطلاحات هر زبان رو حفظ می‌کنه.'},
      tags:['Python','Tkinter','Claude Code CLI','Threading'], link:'https://github.com/AlirezaRg/Ex-Changes-Code' },
    { badge:'os', accent:'#ff7a1a', title:'CODEANALYSIS',
      en:{desc:'Scan your entire project folder with one click, then ask anything in plain language. "Where do I handle auth?", "Which file sends emails?" — Claude Code CLI reads the code and answers instantly.'},
      fa:{desc:'با یه کلیک کل پروژه رو اسکن کن، بعد هر چیزی به زبان ساده بپرس. "کجا auth رو handle می‌کنم؟"، "کدوم فایل ایمیل می‌فرسته؟" — Claude Code CLI کد رو می‌خونه و فوری جواب می‌ده.'},
      tags:['Python','Tkinter','Claude Code CLI','Threading'], link:'https://github.com/AlirezaRg/code-analysis' },
    { badge:'os', accent:'#ffb454', title:'Telegram Downloader Bot',
      en:{desc:'Downloads from YouTube, Instagram, TikTok, SoundCloud and Twitter/X. Users pick video or audio format. Admins get a built-in panel for user stats, banning, and broadcasting — all inside Telegram.'},
      fa:{desc:'از یوتیوب، اینستاگرام، تیک‌تاک، ساندکلاد و توییتر/X دانلود می‌کنه. کاربران فرمت ویدیو یا صدا رو انتخاب می‌کنن. ادمین‌ها پنل کامل آمار، مسدودسازی و بُرودکست دارن — همه داخل تلگرام.'},
      tags:['Python','python-telegram-bot','yt-dlp','SQLite'], link:'https://github.com/AlirezaRg/telegram_downloader' },
    { badge:'os', accent:'#ff7a1a', title:'Video01',
      en:{desc:'Converts any video frame-by-frame into pure binary — 0s and 1s. A 60-second clip becomes 119M bits, shipped as a reconstructable ZIP. Has both a Telegram bot and a desktop GUI.'},
      fa:{desc:'هر ویدیو رو فریم‌به‌فریم به باینری خالص تبدیل می‌کنه — صفر و یک. یه کلیپ ۶۰ ثانیه‌ای ۱۱۹ میلیون بیت می‌شه و به‌صورت ZIP قابل بازسازی ارسال می‌شه. هم بات تلگرام داره هم GUI دسکتاپ.'},
      tags:['Python','OpenCV','python-telegram-bot','Pillow'], link:'https://github.com/AlirezaRg/telegrambot-video01' }
  ];

  const MQ_IMAGES=[
    {src:'./img/rasco.jpg',alt:'Rasco'},
    {src:'./img/gosi.jpg',alt:'Gosi'},
    {src:'./img/odoo.jpg',alt:'Flask + Odoo Bridge'},
    {src:'./img/exchange.png',alt:'EX-CHANGE'},
    {src:'./img/codeanalysis.png',alt:'CODEANALYSIS'},
    {src:'./img/telegram.jpg',alt:'Telegram Downloader Bot'}
  ];

  function renderMarquee(){
    const cols=[[MQ_IMAGES[0],MQ_IMAGES[3]],[MQ_IMAGES[1],MQ_IMAGES[4]],[MQ_IMAGES[2],MQ_IMAGES[5]]];
    cols.forEach((list,i)=>{
      const col=document.getElementById('mqCol'+(i+1));
      if(!col)return;
      const doubled=list.concat(list);
      col.innerHTML=`<div class="mq-track">${doubled.map(im=>`<div class="mq-card"><img src="${im.src}" alt="${im.alt}" loading="lazy"></div>`).join('')}</div>`;
    });
  }

  function renderGrid(){
    const grid=document.getElementById('pjGrid');
    if(!grid)return;
    const lang=curLang||'en';
    grid.innerHTML=PROJ.map(p=>{
      const badgeLabel=I18N[lang][p.badge==='os'?'badgeOpenSource':'badgeClient'];
      const linkHtml=p.link
        ? `<a class="pb pbg" href="${p.link}" target="_blank" rel="noopener noreferrer" style="border-color:${p.accent}55;color:${p.accent}">${GH} GitHub</a>`
        : '';
      return `
        <div class="pjc" data-delay="0">
          <div class="pjb" style="background:radial-gradient(ellipse 80% 90% at 70% 20%, ${p.accent}22, transparent 60%), var(--bg3)">
            <div class="pi" style="color:${p.accent}">${PI}</div>
            <span class="pjbadge">${badgeLabel}</span>
          </div>
          <div class="pjbody">
            <h3 class="pjt">${p.title}</h3>
            <p class="pjd">${(p[lang]&&p[lang].desc)||p.en.desc}</p>
            <div class="pjs">${p.tags.map(t=>`<span class="stag">${t}</span>`).join('')}</div>
            ${linkHtml?`<div class="pjl">${linkHtml}</div>`:''}
          </div>
        </div>`;
    }).join('');
    grid.querySelectorAll('.pjc').forEach(el=>{
      ro.observe(el);
      if(!isMob()){
        el.addEventListener('mouseenter',()=>{ptrDot.classList.add('h');ptrRing.classList.add('h')});
        el.addEventListener('mouseleave',()=>{ptrDot.classList.remove('h');ptrRing.classList.remove('h')});
      }
    });
  }

  renderMarquee();
  renderGrid();

  const origApplyLang=applyLang;
  window.applyLang=(lang)=>{ origApplyLang(lang); renderGrid(); };
})();

// ─── COPY EMAIL ───
(()=>{
  const btn=document.getElementById('copyEmailBtn');
  if(!btn)return;
  btn.addEventListener('click',async()=>{
    const span=btn.querySelector('span');
    try{
      await navigator.clipboard.writeText('alirezarogni@gmail.com');
    }catch(e){
      const ta=document.createElement('textarea');
      ta.value='alirezarogni@gmail.com';
      document.body.appendChild(ta);
      ta.select();
      try{document.execCommand('copy')}catch(e2){}
      ta.remove();
    }
    btn.classList.add('copied');
    if(span)span.textContent=I18N[curLang].copiedLabel;
    setTimeout(()=>{
      btn.classList.remove('copied');
      if(span)span.textContent=I18N[curLang].copyEmailLabel;
    },1800);
  });
})();

// ─── INIT ───
applyLang('en');
tl();


// ─── NEAT ANIMATED GRADIENT (safe - after everything else) ───
try {
  const _neatEl = document.getElementById('gradient');
  if(_neatEl && window.neat && window.neat.NeatGradient) {
    const _gradient = new window.neat.NeatGradient({
      ref: _neatEl,
      colors: [
        { color: '#181817', enabled: true },
        { color: '#FF8F00', enabled: true },
        { color: '#FF7A1A', enabled: true },
        { color: '#E4E4E4', enabled: false },
        { color: '#F6FFFF', enabled: false },
      ],
      speed: 4, horizontalPressure: 4, verticalPressure: 5,
      waveFrequencyX: 1, waveFrequencyY: 2, waveAmplitude: 10,
      shadows: 4, highlights: 7, colorBrightness: 1, colorSaturation: 0,
      wireframe: false, colorBlending: 7,
      backgroundColor: '#00A2FF', backgroundAlpha: 1,
      grainScale: 4, grainSparsity: 0, grainIntensity: 0.2, grainSpeed: 2.2,
      resolution: 0.65, yOffset: 0,
      yOffsetWaveMultiplier: 5, yOffsetColorMultiplier: 4.5, yOffsetFlowMultiplier: 5.5,
      flowDistortionA: 0, flowDistortionB: 0, flowScale: 1, flowEase: 0, flowEnabled: true,
      enableProceduralTexture: false, domainWarpEnabled: false,
      vignetteIntensity: 0, fresnelEnabled: false, iridescenceEnabled: false,
      bloomIntensity: 0, chromaticAberration: 0,
      shapeType: 'plane', flatShading: true, cameraLock: true,
    });
    window.addEventListener('scroll', () => { _gradient.yOffset = window.scrollY; }, { passive: true });
  }
} catch(e) { console.warn('NEAT gradient failed silently:', e.message); }
