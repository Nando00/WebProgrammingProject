import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <Image src="/school-logo.jpg" width="40" height="32"></Image>
            </a>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" class="nav-link text-white">
                  <svg
                    class="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg
                    class="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg
                    class="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Orders
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg
                    class="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg
                    class="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Customers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
