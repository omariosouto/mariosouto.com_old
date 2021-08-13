import { Grid, GridCell } from '../index';

// https://styled-css-grid.js.org/
export const HolyGrailExample = (): JSX.Element => {
  return (
    <Grid
      columns={'100px 1fr 100px'}
      rows={'45px 1fr 45px'}
      areas={[
        'header header  header',
        'menu   content ads   ',
        'footer footer  footer',
      ]}
    >
      <GridCell area="header" className="border border-indigo-600">
        <h1>Header</h1>
      </GridCell>

      <GridCell area="menu" className="border border-indigo-600">
        Menu
      </GridCell>
      <GridCell area="content" className="border border-indigo-600">
        Content
      </GridCell>
      <GridCell area="ads" className="border border-indigo-600">
        Ads
      </GridCell>

      <GridCell area="footer" className="border border-indigo-600">
        Footer
      </GridCell>
    </Grid>
  );
};

export const TwoColumnExample = (): JSX.Element => {
  return (
    <Grid columns={2} gap="15px" minRowHeight="250px">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <GridCell
          className="border border-indigo-600"
          key={`TwoColumnExample_${item}`}
          center
          middle
        >
          <h1>Item {item}</h1>
        </GridCell>
      ))}
    </Grid>
  );
};
