import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section class="top-section text-center container">
        <div className="container">
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
        </div>
      </section>

      <body>
        <div className="container featurette-cont">
          <div class="row featurette">
            <div class=" text-white col-md-7">
              <h2 class="featurette-heading">
                First featurette heading.{" "}
                <span class="text-muted">It’ll blow your mind.</span>
              </h2>
              <p class="text-white lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div class="col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/African_Forest_Elephant.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/amur leopard.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Black-footed Ferret.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Blue Whale.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Bonobo.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Bornean Elephant.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/bornean orangutan.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Chimpanzee.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/crossrivergorilla.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/eastern lowland gorilla.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/gpen.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Hawksbill Turtle.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Humphead Wrasse.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/rhino.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/sundatiger.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/vaquita.jpg"
              />
            </div>
          </div>
          <div class="row featurette">
            <div class="text-white col-md-7">
              <h2 class="featurette-heading">
                And lastly, this one. <span class="text-muted">Checkmate.</span>
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="text-white col-md-5">
              <Image
                className="rounded "
                width={550}
                height={500}
                src="/Yangtze Finless Porpoise.jpg"
              />
            </div>
          </div>
        </div>
      </body>
    </main>
  );
}
