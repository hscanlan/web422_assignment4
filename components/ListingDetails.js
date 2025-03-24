import { Container, Row, Col } from "react-bootstrap";

export default function ListingDetails({ listing }) {
  //listing.images.picture_url = "http://asdf.com/123.jpg";

  return (
    <>
      <Container>
        <Row>
          <Col lg>
            <img
              onError={(event) => {
                event.target.onerror = null; // Remove the event handler to prevent infinite loop
                event.target.src =
                  "https://placehold.co/600x400?text=Photo+Not+Available";
              }}
              className="img-fluid w-100"
              src={listing.images.picture_url}
              alt="Listing Image"
            />
            <br />
            <br />
          </Col>
          <Col lg>
            {listing.neighborhood_overview &&
              <>{listing.neighborhood_overview} <br /><br /></>}
            <strong>Price:</strong> ${listing.price.toFixed(2)}
            <br />
            <strong>Room:</strong> {listing.room_type}
            <br />
            <strong>Bed:</strong> {listing.bed_type} ({listing.beds})<br /><br />
            <strong>Rating:</strong> {listing.review_scores.review_scores_rating}/100 ({listing.number_of_reviews} Reviews)<br />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}

// <img onerror="this.onerror=null;this.src = 'https://placehold.co/600x400?text=Photo+Not+Available'" class="img-fluid w-100" src="${data.images.picture_url}" /><br /><br />
// ${data.neighborhood_overview && data.neighborhood_overview + "<br /><br />"}
// <strong>Price:</strong> ${data.price.toFixed(2)}<br />
// <strong>Room:</strong> ${data.room_type}<br />
// <strong>Bed:</strong> ${data.bed_type} (${data.beds})<br /><br />
