I got this pattern from 14-MVC assignment 11-Ins_Partials.




images >
- 01-blossoming-apricot.jpg
- 02-cosmos-flowers.jpg

etc

If we serve images we can upload them to this folder.




In the demo, these images were a part of the paintingData.js within the Seeds folder:

`const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Blossoming Apricot',
    artist: 'LedyX',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    artist: 'WStudio',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
`

In the demo, the home page is being rendered with Gallery data that includes the Painting data.

Gallery model:
- id
- name
- starting_data
- ending_date

Painting model:
- id
- title
- artist
- exhibition_date
- filename - how images are contained (see above)
- description - alt attribute
- gallery_id - how it speaks to the gallery to be included


