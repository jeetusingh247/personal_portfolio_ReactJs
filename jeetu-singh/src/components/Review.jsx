/*
* @copyright 2024 Jeetu Singh
* @license Apache-2.0
*/

// --> Component <-- //
import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 1',
      imgSrc: '/images/people-1.jpg',
      company: 'Client 1'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 2',
      imgSrc: '/images/people-2.jpg',
      company: 'Client 2'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 3',
      imgSrc: '/images/people-3.jpg',
      company: 'Client 3'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 4',
      imgSrc: '/images/people-4.jpg',
      company: 'Client 4'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 5',
      imgSrc: '/images/people-5.jpg',
      company: 'Client 5'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name 6',
      imgSrc: '/images/people-6.jpg',
      company: 'Client 6'
    }
  ];

const Review = () => {
  return (
    <section id="reviews" className="section">
        <div className="container">
          <h2 className="headline-2">
            What Our Customers Say
          </h2>
          <div className="">
            {reviews.map(({content, name, imgSrc, company}, key) => (
              <ReviewCard key={key} name={name} imgSrc={imgSrc} company={company} content={company} />
            ))}
          </div>
        </div>
    </section>
  )
}

export default Review
