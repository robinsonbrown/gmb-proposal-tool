const auditFactors = [
  {name:"Public Profile Accessible",section:"Profile Completeness",points:2,meaning:"Checks whether the supplied public Google Business Profile link opens for customers.",impact:"A broken or inaccessible profile prevents customers from discovering the business information.",action:"Use the live public profile link and confirm that customers can open it without an owner login."},
  {name:"Primary Category Present And Relevant",section:"Profile Completeness",points:4,meaning:"Checks whether the main category is shown and represents the business’s core service.",impact:"An unclear or unsuitable category can reduce relevance for valuable local searches.",action:"Select the most accurate primary category for the main service offered."},
  {name:"Business Description Present",section:"Profile Completeness",points:3,meaning:"Checks whether the profile explains what the business offers in clear customer-friendly language.",impact:"A missing or weak description gives potential customers less context before they enquire.",action:"Add a concise description covering the main service, customer need and service area."},
  {name:"Opening Hours Complete",section:"Profile Completeness",points:3,meaning:"Checks whether regular hours and relevant special hours are visible and complete.",impact:"Unclear or outdated hours can cause missed calls, failed visits and lost enquiries.",action:"Add accurate regular hours and update special hours before holidays or closures."},
  {name:"Service Area Or Location Clearly Presented",section:"Profile Completeness",points:3,meaning:"Checks whether customers can understand where the business serves or receives them.",impact:"Unclear location information makes it harder for customers to decide whether the business is relevant to them.",action:"Present the service area or customer-facing location clearly and consistently."},
  {name:"Website Link Present And Working",section:"Profile Completeness",points:4,meaning:"Checks whether the profile includes a working website link that opens successfully.",impact:"A missing or broken website removes an important path for learning, trust and conversion.",action:"Add a relevant, mobile-friendly website or service landing page and test the link."},
  {name:"Services, Menu Or Products Present Where Relevant",section:"Profile Completeness",points:3,meaning:"Checks whether customers can see the main services, menu items or products offered.",impact:"Limited service information can reduce relevance for specific searches and make comparison harder.",action:"Add accurate service, menu or product entries that reflect genuine offers."},
  {name:"Relevant Attributes Present",section:"Profile Completeness",points:3,meaning:"Checks whether useful factual attributes are completed when they apply to the business.",impact:"Missing attributes can leave customers uncertain about facilities, access or service options.",action:"Complete only accurate attributes that help customers choose the business."},
  {name:"Main Service Clearly Described",section:"Search Relevance",points:4,meaning:"Checks whether the profile makes the core service immediately understandable.",impact:"If visitors cannot quickly understand the offer, the profile may attract fewer relevant enquiries.",action:"State the main service clearly in the description and service sections without keyword stuffing."},
  {name:"Service-Specific Terms Used Naturally",section:"Search Relevance",points:3,meaning:"Checks whether the public profile uses natural terms customers may use when looking for the service.",impact:"Vague wording can make it harder for customers and search systems to understand the profile’s relevance.",action:"Use clear service terminology naturally and keep it aligned with the actual offer."},
  {name:"Profile Content Matches Target Location",section:"Search Relevance",points:4,meaning:"Checks whether the visible profile information supports the location or service area being targeted.",impact:"A mismatch between the profile and target location can weaken local relevance and customer confidence.",action:"Keep the service area, location wording and customer-facing information consistent."},
  {name:"Website Landing Page Matches The GBP Service",section:"Search Relevance",points:5,meaning:"Checks whether the profile website link leads to a page relevant to the listed service and location.",impact:"Sending visitors to an unrelated or generic page can waste high-intent traffic and reduce enquiries.",action:"Link to the most relevant service or location page and make the next action clear."},
  {name:"Customer-Facing Offer Or Action Is Relevant",section:"Search Relevance",points:4,meaning:"Checks whether the profile gives customers a relevant next action such as calling, booking, ordering or requesting a quote.",impact:"Without a suitable next step, interested visitors may leave before contacting the business.",action:"Use the action that matches the business model and customer journey."},
  {name:"Rating Strength",section:"Reviews And Trust",points:3,meaning:"Reviews the public star rating as an initial trust signal for potential customers.",impact:"A weaker rating can make the business less attractive when prospects compare nearby providers.",action:"Improve the customer experience and request honest feedback from genuine customers."},
  {name:"Review Count Compared With Competitors",section:"Reviews And Trust",points:4,meaning:"Compares the visible review volume with similar businesses in the same local search results.",impact:"A smaller review footprint gives prospects less social proof during comparison.",action:"Build a consistent, policy-compliant process for requesting genuine customer reviews."},
  {name:"Recent Reviews Available",section:"Reviews And Trust",points:3,meaning:"Checks whether the profile has received customer reviews recently.",impact:"A long gap can make the business appear less active or less consistently chosen.",action:"Request honest feedback after completed work and monitor the customer experience."},
  {name:"Reviews Include Specific Service Details",section:"Reviews And Trust",points:3,meaning:"Checks whether visible reviews describe the service, staff, result or customer experience.",impact:"Generic reviews provide less useful proof to people deciding whether to enquire.",action:"Deliver a strong experience and make it easy for customers to share specific feedback."},
  {name:"Negative Review Themes Identified",section:"Reviews And Trust",points:3,meaning:"Looks for repeated concerns or unresolved issues in visible negative reviews.",impact:"Repeated complaints can directly reduce trust and reveal service problems that affect conversions.",action:"Identify the recurring issue, improve the process and respond professionally where appropriate."},
  {name:"Owner Replies Address Customer Feedback",section:"Reviews And Trust",points:4,meaning:"Checks the visible quality and consistency of business replies to customer reviews.",impact:"Unanswered or careless replies can make the business appear less engaged.",action:"Respond politely, specifically and promptly while moving private details offline."},
  {name:"Logo Or Profile Image Present",section:"Photos And Visual Proof",points:2,meaning:"Checks whether the profile has a recognisable logo or business image.",impact:"Without a recognisable image, customers may find it harder to remember or identify the business.",action:"Use a clear, consistent logo or profile image that remains legible at small size."},
  {name:"Cover Photo Present",section:"Photos And Visual Proof",points:2,meaning:"Checks whether the cover image presents the business clearly and professionally.",impact:"A weak or missing cover image can make the profile feel unfinished.",action:"Use a clear image that truthfully represents the business, service or location."},
  {name:"Exterior, Interior Or Work Photos Available",section:"Photos And Visual Proof",points:3,meaning:"Checks whether the profile shows the premises, team, work or customer experience where relevant.",impact:"Limited visual proof leaves prospects with less confidence before they contact the business.",action:"Build a useful photo library that shows the real customer experience and completed work."},
  {name:"Service-Specific Photos Available",section:"Photos And Visual Proof",points:3,meaning:"Checks whether photos demonstrate the actual services or products customers are considering.",impact:"Generic images may not prove that the business can deliver the specific service requested.",action:"Add genuine, relevant examples of services, products, projects or results."},
  {name:"Real And Original Business Imagery",section:"Photos And Visual Proof",points:2,meaning:"Checks whether the visible imagery appears genuine and connected to the business.",impact:"Stock-looking or unrelated images provide weaker proof and may reduce trust.",action:"Use recent original photos that truthfully represent the business and its work."},
  {name:"Photos Are Recent",section:"Photos And Visual Proof",points:2,meaning:"Checks whether customers can see recent visual evidence of current activity.",impact:"Old imagery can make the business look inactive or leave customers unsure what it currently offers.",action:"Add useful new photos regularly while keeping quality and truthfulness first."},
  {name:"Relevant Videos Available",section:"Photos And Visual Proof",points:1,meaning:"Checks whether short videos help demonstrate the service, team, premises or customer experience.",impact:"Without video, the profile has fewer ways to show quality and build familiarity.",action:"Add simple genuine videos when they provide useful proof for the customer."},
  {name:"Call Or Contact Option Visible",section:"Customer Conversion",points:3,meaning:"Checks whether a customer can easily find a visible way to contact the business.",impact:"Extra effort at the decision point can turn ready-to-buy searches into lost enquiries.",action:"Keep the primary contact option visible and make sure it leads to a monitored channel."},
  {name:"Website Button Opens Correctly",section:"Customer Conversion",points:3,meaning:"Checks whether the profile website action opens the intended destination successfully.",impact:"A broken or irrelevant action link wastes customer intent and weakens conversion.",action:"Test the button on desktop and mobile and send visitors to the most relevant page."},
  {name:"Booking, Quote Or Order Option Available Where Relevant",section:"Customer Conversion",points:2,meaning:"Checks whether the profile provides a suitable booking, quote, order or enquiry action when the business needs one.",impact:"Customers may choose a competitor if making contact requires unnecessary steps.",action:"Add the correct action link for the business model and keep it working."},
  {name:"Clear Customer Next Step And Opening Hours",section:"Customer Conversion",points:2,meaning:"Checks whether the profile makes the next action and the best contact timing clear.",impact:"Uncertainty about what to do next can reduce calls, visits and enquiries.",action:"Make the preferred next step obvious and keep the visible hours accurate."}
];

const state={business:{name:"",category:"",location:"",phone:"",website:"",gmbLink:""},audit:{}};
const $=id=>document.getElementById(id);
const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
const sections=[...new Set(auditFactors.map(x=>x.section))];
const resultOptions=["Not Checked","Pass","Needs Improvement","Missing","Not Applicable","Not Available Publicly"];

function renderChecklist(){
  let last="";
  $("auditList").innerHTML=auditFactors.map(factor=>{
    const heading=factor.section!==last?(last=factor.section?`<div class="audit-section">${esc(factor.section)} <span>${factor.points} points</span></div>`:""):"";
    const current=state.audit[factor.name]||{status:"Not Checked",notes:""};
    const options=resultOptions.map(option=>`<option ${current.status===option?"selected":""}>${option}</option>`).join("");
    return `${heading}<article class="audit-row"><div class="audit-question"><div class="audit-factor-title">${esc(factor.name)}</div><p><strong>What It Checks:</strong> ${esc(factor.meaning)}</p><p class="audit-impact"><strong>Business Effect:</strong> ${esc(factor.impact)}</p><p><strong>Recommended Action:</strong> ${esc(factor.action)}</p></div><div class="audit-control"><label>Audit Result<select data-factor="${esc(factor.name)}">${options}</select></label><small>${factor.points} weighted points</small></div><textarea data-note="${esc(factor.name)}" placeholder="Add Public Evidence / Notes">${esc(current.notes)}</textarea></article>`;
  }).join("");
  document.querySelectorAll("[data-factor]").forEach(el=>el.addEventListener("change",updateState));
  document.querySelectorAll("[data-note]").forEach(el=>el.addEventListener("input",updateState));
}

function updateState(event){
  const name=event.target.dataset.factor||event.target.dataset.note;
  const select=document.querySelector(`[data-factor="${CSS.escape(name)}"]`);
  const note=document.querySelector(`[data-note="${CSS.escape(name)}"]`);
  state.audit[name]={status:select?.value||"Not Checked",notes:note?.value||""};
  updateSummary();
}

function scoreRows(rows){
  const applicable=rows.filter(x=>["Pass","Needs Improvement","Missing"].includes(x.status));
  const possible=applicable.reduce((sum,x)=>sum+x.points,0);
  const earned=applicable.reduce((sum,x)=>sum+(x.status==="Pass"?x.points:x.status==="Needs Improvement"?x.points*.5:0),0);
  return {applicable,possible,earned,score:possible?Math.round(earned/possible*100):null,issues:rows.filter(x=>["Needs Improvement","Missing"].includes(x.status)).length};
}

function summary(){
  const values=auditFactors.map(f=>({...f,...(state.audit[f.name]||{status:"Not Checked",notes:""})}));
  const checked=values.filter(x=>x.status!=="Not Checked");
  const scored=scoreRows(values);
  const health=sections.map(section=>{
    const rows=values.filter(x=>x.section===section),result=scoreRows(rows);
    return {section,total:rows.length,checked:rows.filter(x=>x.status!=="Not Checked").length,score:result.score,issues:result.issues};
  });
  return {values,checked,applicable:scored.applicable,passed:values.filter(x=>x.status==="Pass"),issues:values.filter(x=>["Needs Improvement","Missing"].includes(x.status)),score:scored.score,health};
}

function statusClass(status){return status==="Pass"?"healthy":status==="Missing"?"opportunity":status==="Needs Improvement"?"warning":"pending"}
function icon(status){return status==="Pass"?"✓":status==="Missing"?"×":status==="Needs Improvement"?"!":"•"}

function readBusiness(){["name","category","location","phone","website","gmbLink"].forEach(key=>{const field=$("business"+key.charAt(0).toUpperCase()+key.slice(1));if(field)state.business[key]=field.value.trim()})}
function updateSummary(){const data=summary();$("liveCount").textContent=`${data.checked.length}/${auditFactors.length} Reviewed`;$("liveScore").textContent=data.score===null?"0%":`${data.score}%`}

function renderReport(){
  readBusiness();
  if(!state.business.name){alert("Please add the Business Name first.");return}
  const data=summary(),date=new Intl.DateTimeFormat(undefined,{year:"numeric",month:"long",day:"numeric"}).format(new Date());
  const top=data.issues.slice(0,6);
  const health=data.health.map(x=>`<article class="health-card"><div><span>${esc(x.section)}</span><b>${x.score===null?"-":x.score+"%"}</b></div><div class="health-track"><i style="width:${x.score||0}%"></i></div><small>${x.checked}/${x.total} Reviewed · ${x.issues} Opportunities</small></article>`).join("");
  const findings=top.length?top.map((x,i)=>`<article class="finding"><div class="report-overline">${String(i+1).padStart(2,"0")} · ${x.status==="Missing"?"Missing":"Needs Improvement"}</div><h3>${esc(x.name)}</h3><p><strong>Business Effect</strong><br>${esc(x.impact)}</p><aside><span>Recommended Next Step</span><strong>${esc(x.action)}</strong></aside></article>`).join(""):"<p class=\"report-muted\">Complete the public checklist to show priority opportunities here.</p>";
  const evidence=data.values.map(x=>`<article class="evidence-card"><div class="evidence-top"><span class="chip">${esc(x.section)} · ${x.points} pts</span><span class="status ${statusClass(x.status)}">${icon(x.status)} ${esc(x.status)}</span></div><h3>${esc(x.name)}</h3><div class="evidence-cols"><div><span>What It Checks</span><p>${esc(x.meaning)}</p></div><div><span>Business Effect</span><p>${esc(x.impact)}</p></div></div><aside><span>Recommended Action</span><strong>${esc(x.action)}</strong></aside>${x.notes?`<div class="evidence-note"><span>Public Evidence / Notes</span><p>${esc(x.notes)}</p></div>`:""}</article>`).join("");
  const scoreLabel=data.score===null?"Audit Not Complete":data.score<50?"Priority Attention":data.score<75?"Needs Attention":"Strong Foundation";
  $("reportRoot").innerHTML=`<section class="report-cover"><div class="report-cover-top">Google Business Profile Audit</div><div class="report-cover-main"><div><h1>${esc(state.business.name)}</h1><p>${esc(state.business.location||"Location Not Added")}</p></div><div class="report-score"><div class="score-ring" style="--score:${data.score||0}"><div><strong>${data.score===null?"-":data.score+"%"}</strong><span>Quality Score</span></div></div><b>${scoreLabel}</b></div></div><div class="report-date">${esc(date)}</div></section><section class="report-section"><span class="report-overline">01 · Executive Snapshot</span><h2>Where This Profile Can Win More Local Attention</h2><p class="report-muted">This public-profile audit turns visible gaps into practical opportunities across relevance, trust and customer action.</p></section><div class="kpi-grid"><div class="kpi score"><span>GBP Quality Score</span><strong>${data.score===null?"-":data.score+"%"}</strong><small>Weighted Public Checks</small></div><div class="kpi opportunity"><span>Opportunities</span><strong>${data.issues.length}</strong><small>Prioritised For Action</small></div><div class="kpi"><span>Audit Coverage</span><strong>${data.checked.length}/${auditFactors.length}</strong><small>Public Checks Reviewed</small></div></div><div class="impact-grid report-section"><div class="impact-card"><div class="impact-icon">◉</div><div><span>Visibility</span><strong>${data.issues.filter(x=>/Category|Description|Service|Location|Profile|Terms|Website/i.test(x.name)).length}</strong><small>Areas May Affect Discovery</small></div></div><div class="impact-card"><div class="impact-icon">★</div><div><span>Trust</span><strong>${data.issues.filter(x=>/Review|Photo|Rating|Video|Owner|Logo|Cover/i.test(x.name)).length}</strong><small>Areas May Affect Confidence</small></div></div><div class="impact-card"><div class="impact-icon">◎</div><div><span>Conversion</span><strong>${data.issues.filter(x=>/Action|Call|Contact|Booking|Quote|Order|Hours/i.test(x.name)).length}</strong><small>Areas May Affect Enquiries</small></div></div></div><section class="report-section"><div class="section-heading"><div><span class="report-overline">02 · Priority Opportunities</span><h2>What Should Be Improved First</h2></div><span class="step-badge">${data.issues.length} Findings</span></div><div class="finding-grid">${findings}</div></section><section class="report-section"><span class="report-overline">03 · Quality Breakdown</span><h2>Health By Growth Area</h2><div class="health-grid">${health}</div></section><section class="roadmap"><span class="report-overline">04 · Recommended Roadmap</span><h2>A Focused Path From Gaps To Growth</h2><p class="roadmap-copy">A practical 90-day sequence that turns public profile findings into visible improvements.</p><div class="roadmap-grid"><article class="roadmap-card"><b>01 · Days 1–30</b><h3>Build The Base</h3><p>Correct profile completeness, categories, services and customer paths.</p></article><article class="roadmap-card"><b>02 · Days 31–60</b><h3>Strengthen Trust</h3><p>Improve reviews, replies, photos and service-specific proof.</p></article><article class="roadmap-card"><b>03 · Days 61–90</b><h3>Improve Conversion</h3><p>Refine landing pages, action links and the customer enquiry journey.</p></article></div></section><section class="report-section"><span class="report-overline">05 · Public Audit Evidence</span><h2>Every Check, Explained For The Client</h2><p class="report-muted">Each card shows the public check, its business effect, recommended action and any evidence you recorded.</p><div class="evidence-grid">${evidence}</div></section><div class="report-footer"><span>Google Business Profile Audit</span><span>${esc(date)}</span></div>`;
  const contact=[state.business.category,state.business.location,state.business.phone,state.business.website].filter(Boolean);
  const contactRow=document.createElement("div");contactRow.className="report-contact";
  contact.forEach(value=>{const item=document.createElement("span");item.textContent=value;contactRow.appendChild(item)});
  if(state.business.gmbLink){const link=document.createElement("a");link.href=state.business.gmbLink;link.target="_blank";link.rel="noopener";link.textContent="Open Public GBP Profile";contactRow.appendChild(link)}
  $("reportRoot").querySelector(".report-cover").after(contactRow);
  $("reportView").classList.remove("hidden");document.querySelector(".app-shell").classList.add("hidden");window.scrollTo(0,0);
}

function clearAll(){if(!confirm("Clear this proposal?"))return;document.querySelectorAll("input,textarea").forEach(el=>el.value="");document.querySelectorAll("select").forEach(el=>el.value="Not Checked");state.business={name:"",category:"",location:"",phone:"",website:"",gmbLink:""};state.audit={};updateSummary()}
function openGmb(){
  const raw=$("businessGmbLink").value.trim();
  try{const url=new URL(raw);if(!/^https?:$/.test(url.protocol))throw new Error();window.open(url.href,"_blank","noopener")}catch{alert("Please enter a valid public Google Maps or GBP link first.")}
}

document.querySelectorAll("#businessForm input").forEach(input=>input.addEventListener("input",()=>{const key=input.id.replace(/^business/,"").replace(/^./,c=>c.toLowerCase());state.business[key]=input.value.trim()}));
$("openGmb").addEventListener("click",openGmb);
$("previewReport").addEventListener("click",renderReport);
$("printReport").addEventListener("click",()=>window.print());
$("backToAudit").addEventListener("click",()=>{$("reportView").classList.add("hidden");document.querySelector(".app-shell").classList.remove("hidden")});
$("clearForm").addEventListener("click",clearAll);
renderChecklist();updateSummary();
