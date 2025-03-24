import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/listings/1206363");
  const data = await res.json();
  return { props: { listing: data } };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About the Developer : Student Name" />
      <Card>
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra, lectus eu aliquam ornare, ante lorem euismod nulla, a
            efficitur ante urna id nunc. In consequat pretium mollis. Nullam
            porta metus leo. Aenean sit amet justo at quam lobortis venenatis.
            Vestibulum vestibulum elementum mauris at placerat. Quisque placerat
            commodo augue vitae ultrices. Proin malesuada urna ac ipsum
            tincidunt pharetra. Curabitur ullamcorper scelerisque ligula. Nam
            ultricies rutrum risus, non aliquam ante placerat eget. Quisque
            dapibus felis urna, id aliquet ligula sodales quis.
          </p>
          <p>
            Nunc quam ipsum, dapibus in imperdiet eu, scelerisque sed diam.
            Proin vel nibh maximus, venenatis leo sit amet, condimentum odio.
            Vivamus consequat lectus eros, a iaculis lectus ornare eu. Donec sit
            amet placerat odio. Morbi eget velit ut ante interdum tristique.
            Nullam et orci id nisl tincidunt accumsan sed vel dolor. Integer
            blandit odio diam, id tempus tortor lacinia quis. Suspendisse
            pretium arcu purus, in lobortis nulla ullamcorper ac. Fusce
            sollicitudin orci eu leo sodales maximus.
          </p>
          <p>
            One of the places that I would like to visit is the: <Link href="/listing/1206363"> &ldquo;Eco Hale Hawaii in the Rainforest Lots Of Aloha&rdquo;</Link> Bed &amp; Breakfast (Airbnb).
          </p>
        </Card.Body>

        <ListingDetails listing={listing} />
      </Card>
    </>
  );
}
