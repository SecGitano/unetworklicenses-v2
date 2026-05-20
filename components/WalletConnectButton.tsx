"use client";

import dynamic from "next/dynamic";

const ConnectButton = dynamic(
  () =>
    import("@rainbow-me/rainbowkit").then(
      (mod) => mod.ConnectButton
    ),
  {
    ssr: false,
  }
);

export default function WalletConnectButton() {
  return <ConnectButton />;
}