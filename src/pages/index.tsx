import { withTranslation } from '../i18n';

type Props = {
  t: Function;
};

const IndexPage = ({ t }: Props) => {
  return (
    <div>
      <h1>{t('homeTitle')}</h1>
    </div>
  );
};

export default withTranslation('Home')(IndexPage);
