import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section class=" text-center container">
        <div class="row justify-content-start">
          <div class="first-part-landing col-6">
            <Image
              src="/animal-logo2sc.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>

          <div className="col-6 card mx-auto text-white">
            <div class="card-body">
              <h5 class="card-title top-text">Enjoy the Wildlife?</h5>
              <p class="card-text">
                View & learn about extinct animals all over the world!
              </p>
              <button
                className="btn  text-white landing-btn card-link"
                type="submit"
              >
                YES TAKE ME NOW!
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
