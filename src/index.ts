import React, { useEffect, useCallback } from "react";

declare global {
  interface Window { onPoint: any; }
}

export type InpostGeowidgetProps = {
  token: string;
  onPoint: (e?: any) => void;
  language?: string;
  config?: string;
}

export const InpostGeowidget = ({
  token,
  onPoint,
  language = "pl",
  config = "parcelCollect",
}: InpostGeowidgetProps): any => {

  const callback = useCallback((e: any) => onPoint(e), [onPoint]);

  useEffect(() => {
    const css: HTMLLinkElement = document.createElement("link"),
      js: HTMLScriptElement = document.createElement("script"),
      body: HTMLElement = document.getElementsByTagName("body")[0];

    css.rel = "stylesheet";
    css.href = "https://geowidget.inpost.pl/inpost-geowidget.css";
    css.type = "text/css";

    js.defer = true;
    js.src = "https://geowidget.inpost.pl/inpost-geowidget.js";

    body.appendChild(css);
    body.appendChild(js);
  }, []);

  useEffect(() => {
    window.onPoint = callback
  }, [callback])

  return React.createElement("inpost-geowidget", {
    token,
    onPoint: "onPoint",
    language,
    config,
  });
};