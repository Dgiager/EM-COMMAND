(async () => {
  const loadParts = async (paths) => {
    const responses = await Promise.all(paths.map(async (path) => {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) throw new Error(`Could not load ${path} (${response.status})`);
      return response.text();
    }));
    return responses.join("");
  };

  try {
    const css = await loadParts(['styles-1.txt', 'styles-2.txt', 'styles-3.txt']);
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    const javascript = await loadParts(['app-1.txt', 'app-2.txt', 'app-3.txt', 'app-4.txt']);
    (0, eval)(`${javascript}
//# sourceURL=em-command-app.js`);
  } catch (error) {
    console.error(error);
    document.body.innerHTML = `<main style="max-width:760px;margin:48px auto;padding:24px;font-family:system-ui;background:#111;color:#fff;border-radius:12px"><h1>EM Command could not load</h1><p>${String(error.message || error)}</p><p>Refresh the page. If the problem continues, verify all repository files were published.</p></main>`;
  }
})();
