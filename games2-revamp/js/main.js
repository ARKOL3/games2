// Ads: paste your own Google AdSense publisher ID below (looks like "ca-pub-1234567890123456").
// Leave it empty and no ads load at all.
const AD_CLIENT = "";

// The "Do not show ads" checkbox on the Tools page sets this.
const adsOff = localStorage.getItem("adConsent") === "true";

if (AD_CLIENT && !adsOff) {
  const adScript = document.createElement("script");
  adScript.async = true;
  adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + AD_CLIENT;
  adScript.crossOrigin = "anonymous";
  document.head.appendChild(adScript);
}

// Apply the saved tab cloak (title + icon)
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");
if (local_title !== null) {
  document.title = local_title;
}
if (local_icon !== null) {
  const iconLink = document.querySelector("link[rel*='icon']");
  if (iconLink) iconLink.href = local_icon;
}
