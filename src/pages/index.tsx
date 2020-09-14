import { withTranslation } from '../i18n';
import { useQuery } from '@apollo/client';
import QUERY_COUNTRIES from './queryCountries.graphql';
import Head from 'next/head';

type Props = {
  t: Function;
};

const IndexPage = ({ t }: Props) => {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);

  if (loading) {
    return <p>loading...</p>;
  }

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <div>
      <h1>{t('homeTitle')}</h1>
      <Head>
        <title>Countries GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Countries</h1>
      <div>
        {data.countries.map((country: any) => (
          <div key={country._id}>{country.name}</div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation('Home')(IndexPage);
