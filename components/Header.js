import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className="the-header px-3 py-2 text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link href="/">
              <a className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <Image src="/" width="100" height="92"></Image>
              </a>
            </Link>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 top-tex">
              <li>
                <Link href="/">
                  <a className="nav-link text-white">
                    <svg
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    ></svg>
                    Discover
                  </a>
                </Link>
              </li>
              {/* <li>
                <a href="#" className="nav-link text-white">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="24"
                    height="24"
                  ></svg>
                  Charities
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
