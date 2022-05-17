import React, { useEffect } from "react";

interface InpostGeowidgetProps {
  token: string;
  onpoint: (e: Event) => void;
  language?: string;
  config?: string;
}

const InpostGeowidget = ({
  token,
  onpoint,
  language = "pl",
  config = "parcelCollect",
}: InpostGeowidgetProps): any => {
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

  return React.createElement("inpost-geowidget", {
    token,
    onpoint,
    language,
    config,
  });
};

export { InpostGeowidgetProps, InpostGeowidget };
