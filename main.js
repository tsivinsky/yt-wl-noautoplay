(() => {
  const params = new URLSearchParams(location.search);
  const u = params.get("url");
  if (!u) {
    return;
  }

  const url = new URL(u);
  const urlParams = new URLSearchParams(url.search);
  const videoId = urlParams.get("v");

  if (videoId) {
    location.href = `https://youtube.com/watch?v=${videoId}`;
  } else {
    location.href = url.toString();
  }
})();
