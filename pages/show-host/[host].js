import { useRouter } from 'next/router'

const ShowHost = () => {
  const router = useRouter();
  return <p>Current host is {router.query?.host}</p>;
};

export default ShowHost;
