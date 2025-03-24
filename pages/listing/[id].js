import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error'; // https://nextjs.org/docs/advanced-features/custom-error-page#reusing-the-built-in-error-page
import PageHeader from '@/components/PageHeader';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`http://localhost:8080/api/listings/${id}`);

  if (isLoading) {
    return null;
  } else {
    if(error){
        return <Error statusCode={404} />
    } else {
        if(data){
            return (
                <>
                      <PageHeader text={data.name} />
                      <ListingDetails listing={data} /><br />
                </>
              );
        }else{
            return <Error statusCode={404} />
        }
    }
  }
}