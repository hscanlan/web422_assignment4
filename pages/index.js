import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';



export default function Home() {

  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([])
  const { data, error } = useSWR(`http://localhost:8080/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data)
    }
  }, [data]);

  function previous(e) {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  }

  function next(e) {
    setPage(prev => prev + 1);
  }


  return (
    <>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />

      <Accordion>
      {pageData?.map(listing => (
        <Accordion.Item eventKey={listing._id} key={listing._id}>
          <Accordion.Header><strong>{listing.name}</strong>&nbsp;&nbsp;{listing.address.street}</Accordion.Header>
          <Accordion.Body>
          <ListingDetails listing={listing} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>

    <br />

    <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
  </>
  );
}
