window.addEventListener("load", () => {
  window.document.body.classList.add("c_darkmode");
  var cc = initCookieConsent();

  // run plugin with your configuration
  cc.run({
    current_lang: "de",
    page_scripts: true, // default: false
    force_consent: true,
    gui_options: {
      consent_modal: {
        layout: "box",
        position: "middle center",
      },
    },

    languages: {
      de: {
        consent_modal: {
          description:
            'Diese Website benutzt Google Analytics, und damit Cookies. Indem Sie auf "Akzeptieren" klicken, stimmen Sie deren Verwendung zu.',
          primary_btn: {
            text: "Akzeptieren",
            role: "accept_necessary", // 'accept_selected' or 'accept_all'
          },
        },
        settings_modal: {
          title: "Cookie-Einstellungen",
          save_settings_btn: "Einstellungen speichern",
          accept_all_btn: "Alle akzeptieren",
          reject_all_btn: "Alle ablehnen",
          close_btn_label: "Schließen",
          blocks: [
            {
              title: "Analyse-Daten",
              description:
                "Wir benutzen zur Analyse der Nutzungsdaten Google Analytics, welches Cookies verwendet. Mit der Erlaubnis, Cookies zu erstellen helfen Sie uns, diese Website zu optimieren.",
              toggle: {
                value: "analytics",
                enabled: true,
                readonly: true,
              },
            },
          ],
        },
      },
    },
  });
});
