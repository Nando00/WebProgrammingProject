import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main>
        <section className="top-section text-center container">
          <div className="container">
            <div className="row justify-content-start">
              <div className="first-part-landing col-6">
                <Link href="/">
                  <Image
                    src="/animal-logo2sc.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </Link>
              </div>

              <div className="col-6 card mx-auto text-white">
                <div className="card-body">
                  <h5 className="card-title top-text">Enjoy the Wildlife?</h5>
                  <p className="card-text">
                    View and learn about extinct animals all over the world!
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
            <div className="row featurette">
              <div className=" text-white col-md-7">
                <h2 className="featurette-heading">African Forest Elephant</h2>
                <p className="text-white lead">
                  Inhabits the dense rainforests of west and central Africa.
                  Since the diet of forest elephants is dominated by fruit, they
                  play a crucial role in dispersing many tree species,
                  particularly the seeds of large trees which tend to have high
                  carbon content.
                </p>
              </div>
              <div className="col-md-5">
                <Image
                  className="rounded "
                  width={550}
                  height={500}
                  src="/African_Forest_Elephant.jpg"
                />
              </div>
            </div>

            <div className="row featurette">
              <div className="text-white col-md-7 order-md-2">
                <h2 className="featurette-heading">Blue Whale</h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <Image
                  className="rounded "
                  width={550}
                  height={500}
                  src="/Blue Whale.jpg"
                />
              </div>
            </div>

            <div className="row featurette">
              <div className="text-white col-md-7">
                <h2 className="featurette-heading">Cross River Gorilla</h2>
                <p className="lead">
                  Cross River gorillas are scattered in lowland montane forests
                  and rainforests of Cameroon and Nigeria,200 to 300 of these
                  gorillas left in the wild. Poaching, disease and habitat
                  destruction remain threats for gorillas.
                </p>
              </div>
              <div className="text-white col-md-5">
                <Image
                  className="rounded "
                  width={550}
                  height={500}
                  src="/crossrivergorilla.jpg"
                />
              </div>
            </div>

            <div className="row featurette">
              <div className="text-white col-md-7 order-md-2">
                <h2 className="featurette-heading">Hawksbill Turtle</h2>
                <p className="lead">
                  Sea Turtles are the living representatives of a group of
                  reptiles that has existed on Earth and travelled our seas for
                  the last 100 million years!!! The loss of nesting habitat and
                  coral reefs due to coastal development, rising seas from
                  climate change, poaching and pollution. They rely on coral
                  reefs for food resources and habitat.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <Image
                  className="rounded "
                  width={550}
                  height={500}
                  src="/Hawksbill Turtle.jpg"
                />
              </div>
            </div>

            <div className="row featurette">
              <div className="text-white col-md-7 order-md-2">
                <h2 className="featurette-heading">African Rhino</h2>
                <p className="lead">
                  There is three kinds of rhinos but there is only two white
                  rhinos left in the world. They eat trees and bushes. Their
                  habitat or source of food isn&apos;t why they&apos;re going
                  extinct. They are facing a constant threat of poaching for
                  their horns. There is only 27,000 rhinos left in the world.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <Image
                  className="rounded "
                  width={550}
                  height={500}
                  src="/rhino.jpg"
                />
              </div>
            </div>

            <div className="row featurette">
              <div className="text-white col-md-7">
                <h2 className="featurette-heading">Yangtze Finless Porpoise</h2>
                <p className="lead">
                  The Yangtze finless porpoise, is known for its mischievous
                  smile and has a level of intelligence comparable to that of a
                  gorilla. There is only 1000-1800 of them left in the world.
                  They’re in the longest river of Asia “The Yangtze River” The
                  destruction of the Baiji dolphin food supply was central to
                  its extinction. Overfishing is the main factor
                </p>
              </div>
              <div className="text-white col-md-5">
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
    </>
  );
}
