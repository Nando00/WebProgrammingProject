import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          The contributors are{" "}
          <Link href="https://nando00.github.io/mepersonal/">Fernando</Link> ,
          <Link href="https://www.kurbina.com/"> Keilin</Link> ,{" "}
          <Link href="https://nando00.github.io/IsraelPersonal/">Israel</Link>,{" "}
          <Link href="https://nando00.github.io/stephenpersonal/">Stephen</Link>
          ,{" "}
          <Link href="https://nando00.github.io/uzunfethullahwebsite/">
            Fethullah
          </Link>
        </div>
      </footer>
    </div>
  );
}
