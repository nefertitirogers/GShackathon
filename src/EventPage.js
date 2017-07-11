import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './EventPage.css';

const tilesData = [
  {
    img: 'http://telemet.com/wp-content/uploads/2015/07/redcross2.jpg',
    title: 'Blood Drive',
    author: 'The Red Cross',
  },
  {
    img: 'http://www.habitatstw.org/sites/default/files/styles/large/public/photo-volunteer-3.jpg?itok=pgDjRDOO',
    title: 'SLC Build',
    author: 'Habitat for Humanity',
  },
  {
    img: 'https://s3.amazonaws.com/usn-cache.salvationarmy.org/30bb76dd-9b2d-4660-b91d-c162c1bc64e3_christmas.jpg',
    title: 'Clothing Drive',
    author: 'The Salvation Army',
  },
  {
    img: 'https://umrelief.org/wp-content/uploads/2017/03/17039231_1353589874700083_5005572581379834047_o.jpg',
    title: 'Fundraising Gala',
    author: 'United Muslim Relief',
  },
  {
    img: 'https://www.rescue-uk.org/sites/default/files/styles/window_width_breakpoints_theme_rescue_large_1x/public/article/1147/teaser/20150720_fparrish_nyarugusutanzania_002.jpg?itok=x2Aw4CWF&timestamp=1474990077',
    title: 'Basic Needs Drive',
    author: 'International Refugee Commitee',
  },
  {
    img: 'https://donate.doctorswithoutborders.org/images/ecards/ephoto2.jpg?v=20151124',
    title: 'SLC Clinic',
    author: 'Doctors Without Borders',
  },
  {
    img: 'http://3.bp.blogspot.com/-xBBBUYnJTQ0/UU23SK1hUcI/AAAAAAAASv8/OXuVliRuSI0/s1600/wwflogo.jpg',
    title: 'Save the Pandas!',
    author: 'World Wildlife Fund',
  },
  {
    img: 'https://pbs.twimg.com/media/C3AYoaCXUAA6-np.jpg',
    title: 'Canned Food Drive',
    author: 'End Hunger Network',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const EventPage = () => (
  <MuiThemeProvider>
  <div className="eventGrid">
    <GridList
      cellHeight={180}
      className="gridList"
    >
      <Subheader className="header">Upcoming Charity Events:</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default EventPage;
