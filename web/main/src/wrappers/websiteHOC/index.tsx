// import Footer from '@devsoutinho/ui/src/patterns/Footer';
import Provider from '../Provider';

export default function websiteHOC(Component: React.ComponentType) {
  return (): JSX.Element => (
    <Provider>
      <Component />
      {/* <Footer /> */}
    </Provider>
  );
}
