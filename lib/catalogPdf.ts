/** Mobile / iOS browsers rarely embed PDFs in iframes; use the native viewer instead. */
export function prefersNativePdfViewer(): boolean {
  if (typeof window === "undefined") return false;

  const isNarrow = window.matchMedia("(max-width: 767px)").matches;
  const ua = navigator.userAgent;
  const isIos =
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  return isNarrow || isIos;
}
