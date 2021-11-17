chrome.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const redirectUrl = url.replace('https://music.yandex.ru', '');
    console.log({redirectUrl})
    return redirectUrl ? { redirectUrl: `yandex-music-app:${redirectUrl}` } : null;
  },
  {
    urls: ["https://music.yandex.ru/*"],
    types: [
      "main_frame",
      "sub_frame",
      "script",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
