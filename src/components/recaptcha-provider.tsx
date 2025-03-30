"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

export default function ReCaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}