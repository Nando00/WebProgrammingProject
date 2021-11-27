import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div class="the-header px-3 py-2 text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <Image src="/animal-logo2sc.png" width="100" height="92"></Image>
            </a>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 top-tex">
              <li>
                <a href="/" class="nav-link text-white">
                  <svg
                    class="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Discover
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg
                    class="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Charities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
