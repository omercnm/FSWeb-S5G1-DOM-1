const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
let link1 = document.querySelectorAll("nav a");

link1.forEach((item, i) => {
  item.textContent = siteContent.nav[`nav-item-${i + 1}`];
  item.classList.add("italic");
});

let logo = document.querySelector("#logo-img");
logo.src = siteContent.images["logo-img"];

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document.querySelector("#cta-img").src = siteContent.images["cta-img"];

let topContentsH4 = document.querySelectorAll(".top-content h4");
let topContentsP = document.querySelectorAll(".top-content p");
topContentsH4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
topContentsP[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topContentsH4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
topContentsP[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent.images["accent-img"];

let bottomContentH4 = document.querySelectorAll(".bottom-content h4");
let bottomContentP = document.querySelectorAll(".bottom-content p");
bottomContentH4[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomContentP[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomContentH4[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomContentP[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContentH4[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];
bottomContentP[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];
let contactPs = document.querySelectorAll(".contact p");
contactPs[0].textContent = siteContent.iletisim.adres;
contactPs[1].textContent = siteContent.iletisim.telefon;
contactPs[2].textContent = siteContent.iletisim.email;

let footerA = document.querySelector("footer a");
footerA.textContent = siteContent.footer.copyright;
footerA.classList.add("bold");
