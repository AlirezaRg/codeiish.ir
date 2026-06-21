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
    tl4d:'Started wiring Claude Code CLI into desktop apps — Rasco and CodePilot — to automate my own day-to-day development.',
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
    ctEyb:'Get in Touch', ctTitle:'Work with <span class="g">AlirezaRg</span>',
    ctDesc:"Have a backend, Odoo, or hardware-integration project in mind? Or just want to talk about Linux and AI tooling? I'm open to new work and good conversations.",
    emailLabel:'Email',
    fFirst:'First Name', fLast:'Last Name', fEmail:'Email', fTopic:'Topic', fMessage:'Message',
    fMessagePh:'Tell me about your project...',
    topicSelect:'Select a topic...', topic1:'Backend Project', topic2:'Odoo / ERP Integration', topic3:'AI Tooling', topic4:'General Inquiry',
    sendBtn:'Send Message',
    formNote:'Until a backend is connected, this opens a pre-filled email instead.',
    footerCopy:'© 2026 AlirezaRg · Alireza Rogni · All rights reserved',
    sendingTxt:'Sending...', sentTxt:'✓ Message Sent!', failTxt:'✗ Failed — Try Again'
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
    tl4d:'شروع کردم به وصل کردن Claude Code CLI به اپ‌های دسکتاپ — Rasco و CodePilot — برای خودکارسازی کار روزمره‌ی خودم.',
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
    ctEyb:'در ارتباط باشید', ctTitle:'همکاری با <span class="g">AlirezaRg</span>',
    ctDesc:'یه پروژه‌ی بک‌اند، اودوو، یا یکپارچه‌سازی سخت‌افزار در ذهن داری؟ یا فقط می‌خوای درباره‌ی لینوکس و ابزارهای AI صحبت کنی؟ من برای کار و گفت‌وگوهای خوب در دسترسم.',
    emailLabel:'ایمیل',
    fFirst:'نام', fLast:'نام خانوادگی', fEmail:'ایمیل', fTopic:'موضوع', fMessage:'پیام',
    fMessagePh:'درباره پروژه‌تون بگید...',
    topicSelect:'یه موضوع انتخاب کنید...', topic1:'پروژه بک‌اند', topic2:'یکپارچه‌سازی اودوو / ERP', topic3:'ابزار هوش مصنوعی', topic4:'سوال عمومی',
    sendBtn:'ارسال پیام',
    formNote:'تا وقتی بک‌اند واقعی وصل نشه، این دکمه یه ایمیل از پیش پرشده باز می‌کنه.',
    footerCopy:'© ۲۰۲۶ AlirezaRg · علیرضا رُگنی · تمام حقوق محفوظ است',
    sendingTxt:'در حال ارسال...', sentTxt:'✓ پیام ارسال شد!', failTxt:'✗ ناموفق — دوباره تلاش کنید'
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

// ─── PARTICLES ───
(()=>{
  const cv=document.getElementById('hcv'),cx=cv.getContext('2d');
  let pts=[];const N=55;
  function rs(){cv.width=window.innerWidth;cv.height=window.innerHeight;ip()}
  function ip(){pts=[];for(let i=0;i<N;i++)pts.push({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.1+.4})}
  rs();window.addEventListener('resize',rs);
  function dr(){
    cx.clearRect(0,0,cv.width,cv.height);
    for(let p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>cv.width)p.vx*=-1;if(p.y<0||p.y>cv.height)p.vy*=-1;cx.beginPath();cx.arc(p.x,p.y,p.r,0,Math.PI*2);cx.fillStyle='rgba(255,180,84,.4)';cx.fill()}
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);if(d<120){cx.beginPath();cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.strokeStyle=`rgba(54,224,193,${.09*(1-d/120)})`;cx.lineWidth=.5;cx.stroke()}}
    requestAnimationFrame(dr);
  }dr();
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

// ─── INIT ───
applyLang('en');
tl();
