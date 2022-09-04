window.addEventListener("load", () => {
  var cc = initCookieConsent();

  // run plugin with your configuration
  cc.run({
    current_lang: "de",
    page_scripts: true, // default: false
    force_consent: false,
    gui_options: {
      consent_modal: {
        layout: "bar", // box/cloud/bar
      },
      settings_modal: {
        layout: "cloud", // box/cloud/bar
      }
      
    },

    languages: {
      de: {
        consent_modal: {
          title: "Wir nutzen Cookies!",
          description:
            'Diese Website nutzt Cookies, damit wir verstehen, wie Sie diese nutzen. Indem Sie auf "Akzeptieren" klicken, stimmen Sie deren Verwendung zu.',
          primary_btn: {
            text: "Akzeptieren",
            role: "accept_all", // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: "Cookie-Einstellungen",
            role: "reject_all", // 'accept_selected' or 'accept_all'
          }
        },
        settings_modal: {
          title: "Cookie-Einstellungen",
          save_settings_btn: "Einstellungen speichern",
          accept_all_btn: "Alle akzeptieren",
          reject_all_btn: "Alle ablehnen",
          close_btn_label: "Schließen",
          blocks: [
            {
              title: "Notwendige Daten",
              description: "damit wir wissen ob der Cookie Banner geglicked wurde",
              toggle: {
                value: "cookiebanner",
                enabled: true,
                readonly: true,
              },
            },
            {
              title: "Analyse-Daten",
              description:
                "Wir benutzen zur Analyse der Nutzungsdaten Google Analytics, welches Cookies verwendet. Mit der Erlaubnis, Cookies zu erstellen helfen Sie uns, diese Website zu optimieren.",
              toggle: {
                value: "analytics",
                enabled: true,
                readonly: false,
              },
            },
          ],
        },
      },
    },
  });
});
