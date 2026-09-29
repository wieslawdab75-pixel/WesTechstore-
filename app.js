
"use strict";

// WesTechstore
// Main JavaScript

const WHATSAPP_NUMBER = "447345066367";

const translations = {
  en: {
    navService: "AI help",
    navInstitute: "Institute",
    navSafety: "Safety",
    eyebrow: "PRACTICAL AI FOR REAL LIFE",
    heroTitle: "Get confident with AI on your phone.",
    heroText:
      "Friendly, one-to-one help with AI apps, translation tools and everyday phone setup — explained clearly, at your pace.",
    bookNow: "Book 30 minutes — £19",
    explore: "Explore free learning",
    paymentNote:
      "Book on WhatsApp first. Payment details are confirmed before the session.",
    available: "Booking now",
    session: " / 30-minute session",
    benefit1: "AI apps explained simply",
    benefit2: "Phone and translation setup",
    benefit3: "English or Polish support",
    benefit4: "No subscription required",

    serviceEyebrow: "ONE-TO-ONE SUPPORT",
    serviceTitle: "What we can help you do",
    card1Title: "Start using AI",
    card1Text:
      "Learn prompts, voice conversations and useful everyday tasks.",
    card2Title: "Set up translation",
    card2Text:
      "Use voice and text translation for conversations and messages.",
    card3Title: "Organise your phone",
    card3Text:
      "Install trusted apps and understand essential settings.",
    ready: "Ready to begin?",
    readyText:
      " Send a WhatsApp message and tell us what you need help with.",
    messageWhatsApp: "Message on WhatsApp",

    learnTitle: "Learn practical AI step by step",
    learnText:
      "Short, accessible learning for beginners. Our first public lesson is free while the full course catalogue is being prepared.",
    freePreview: "FREE PREVIEW",
    lessonTitle: "Your first useful AI conversation",
    lessonText:
      "A simple five-minute exercise for asking an AI assistant a clear, safe and useful question.",
    startLesson: "Start lesson",
    closeLesson: "Close lesson",
    lessonHeading: "The three-part prompt",
    step1: "Goal: say what you want to achieve.",
    step2: "Context: give the essential details.",
    step3: "Format: say how you want the answer presented.",
    example:
      "Example: “Help me write a short, friendly advert for phone setup help in Hucknall. Include the £19 price and a WhatsApp call to action.”",
    courseNotice:
      "More lessons and paid courses will be released only after their content, price and support terms are complete.",

    safetyEyebrow: "YOUR SAFETY",
    safetyTitle: "Your private information stays private",
    safetyText:
      "We guide you while you control your own device. We never ask for passwords, PINs, bank details, verification codes or remote access to banking.",
    scopeText:
      "The service provides general technology help. It does not provide financial, medical or legal advice.",

    footer: "Practical AI for real life",
    contact: "Contact on WhatsApp"
  },

  pl: {
    navService: "Pomoc AI",
    navInstitute: "Instytut",
    navSafety: "Bezpieczeństwo",
    eyebrow: "PRAKTYCZNA AI W CODZIENNYM ŻYCIU",
    heroTitle: "Korzystaj pewnie z AI na swoim telefonie.",
    heroText:
      "Przyjazna pomoc jeden na jeden z aplikacjami AI, tłumaczeniem i codzienną konfiguracją telefonu — jasno wyjaśniona, w Twoim tempie.",
    bookNow: "Zarezerwuj 30 minut — £19",
    explore: "Zobacz darmową naukę",
    paymentNote:
      "Najpierw zarezerwuj przez WhatsApp. Szczegóły płatności potwierdzimy przed sesją.",
    available: "Rezerwacje otwarte",
    session: " / sesja 30-minutowa",
    benefit1: "Proste wyjaśnienie aplikacji AI",
    benefit2: "Konfiguracja telefonu i tłumaczenia",
    benefit3: "Pomoc po angielsku lub polsku",
    benefit4: "Bez wymaganego abonamentu",

    serviceEyebrow: "POMOC JEDEN NA JEDEN",
    serviceTitle: "W czym możemy Ci pomóc",
    card1Title: "Zacznij korzystać z AI",
    card1Text:
      "Naucz się promptów, rozmów głosowych i przydatnych codziennych zastosowań.",
    card2Title: "Skonfiguruj tłumaczenie",
    card2Text:
      "Korzystaj z tłumaczenia głosu i tekstu podczas rozmów i wiadomości.",
    card3Title: "Uporządkuj swój telefon",
    card3Text:
      "Instaluj zaufane aplikacje i poznaj najważniejsze ustawienia.",
    ready: "Gotowy, aby zacząć?",
    readyText:
      " Wyślij wiadomość WhatsApp i napisz, w czym potrzebujesz pomocy.",
    messageWhatsApp: "Napisz na WhatsApp",

    learnTitle: "Ucz się praktycznej AI krok po kroku",
    learnText:
      "Krótkie i przystępne lekcje dla początkujących. Pierwsza publiczna lekcja jest bezpłatna, a pełny katalog kursów jest przygotowywany.",
    freePreview: "DARMOWA LEKCJA",
    lessonTitle: "Twoja pierwsza przydatna rozmowa z AI",
    lessonText:
      "Proste pięciominutowe ćwiczenie pokazujące, jak zadać asystentowi AI jasne, bezpieczne i użyteczne pytanie.",
    startLesson: "Rozpocznij lekcję",
    closeLesson: "Zamknij lekcję",
    lessonHeading: "Prompt w trzech częściach",
    step1: "Cel: powiedz, co chcesz osiągnąć.",
    step2: "Kontekst: podaj najważniejsze informacje.",
    step3: "Format: określ, jak ma wyglądać odpowiedź.",
    example:
      "Przykład: „Pomóż mi napisać krótkie, przyjazne ogłoszenie o pomocy w konfiguracji telefonu w Hucknall. Dodaj cenę £19 i możliwość kontaktu przez WhatsApp.”",
    courseNotice:
      "Kolejne lekcje i płatne kursy zostaną opublikowane po przygotowaniu ich treści, cen i warunków pomocy.",

    safetyEyebrow: "TWOJE BEZPIECZEŃSTWO",
    safetyTitle: "Twoje prywatne informacje pozostają prywatne",
    safetyText:
      "Prowadzimy Cię krok po kroku, ale to Ty kontrolujesz swoje urządzenie. Nigdy nie prosimy o hasła, PIN-y, dane bankowe, kody weryfikacyjne ani zdalny dostęp do bankowości.",
    scopeText:
      "Usługa obejmuje ogólną pomoc technologiczną. Nie świadczymy porad finansowych, medycznych ani prawnych.",

    footer: "Praktyczna AI w codziennym życiu",
    contact: "Kontakt przez WhatsApp"
  }
};

let currentLanguage = "en";

function updateLanguage() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[currentLanguage][key];

    if (translatedText !== undefined) {
      element.textContent = translatedText;
    }
  });

  const languageToggle = document.getElementById("languageToggle");

  if (languageToggle) {
    languageToggle.textContent =
      currentLanguage === "en" ? "PL" : "EN";
  }

  const lessonContent = document.getElementById("lessonContent");
  const lessonButton = document.getElementById("openLesson");

  if (lessonContent && lessonButton && !lessonContent.hidden) {
    lessonButton.textContent =
      translations[currentLanguage].closeLesson;
  }

  updateWhatsAppLinks();
}

function toggleLanguage() {
  currentLanguage =
    currentLanguage === "en" ? "pl" : "en";

  updateLanguage();
}

function toggleLesson() {
  const lessonContent = document.getElementById("lessonContent");
  const lessonButton = document.getElementById("openLesson");

  if (!lessonContent || !lessonButton) {
    return;
  }

  lessonContent.hidden = !lessonContent.hidden;

  lessonButton.textContent = lessonContent.hidden
    ? translations[currentLanguage].startLesson
    : translations[currentLanguage].closeLesson;

  if (!lessonContent.hidden) {
    lessonContent.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
}

function getWhatsAppMessage(type) {
  if (currentLanguage === "pl") {
    if (type === "booking") {
      return "Dzień dobry WesTechstore. Chcę zarezerwować 30-minutową pomoc w konfiguracji AI za £19. Proszę o informację o dostępnych terminach.";
    }

    return "Dzień dobry WesTechstore. Mam pytanie dotyczące pomocy z AI.";
  }

  if (type === "booking") {
    return "Hello WesTechstore. I would like to book a 30-minute AI setup assistance session for £19. Please let me know the available times.";
  }

  return "Hello WesTechstore. I have a question about your AI assistance service.";
}

function updateWhatsAppLinks() {
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const messageType = link.dataset.message || "question";
    const message = encodeURIComponent(
      getWhatsAppMessage(messageType)
    );

    link.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const languageToggle =
    document.getElementById("languageToggle");

  if (languageToggle) {
    languageToggle.addEventListener(
      "click",
      toggleLanguage
    );
  }

  const lessonButton =
    document.getElementById("openLesson");

  if (lessonButton) {
    lessonButton.addEventListener(
      "click",
      toggleLesson
    );
  }

  updateLanguage();
});
