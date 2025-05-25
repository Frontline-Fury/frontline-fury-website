import React from 'react';
import './Gamemode.css';
import { useNavigate } from 'react-router-dom';
import spikerush from '../assests/spikerush.jpg';
import gamevid from '../assests/bgvid.mp4'

const listings = [
  {
    slug: 'spike-rush-1',
    image: spikerush,
    title: 'Spike Rush',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    tagline: 'helping hands',
    video: gamevid,
    rules: [
      "Rule 1 description",
      "Rule 2 description"
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },
  {
    slug: 'capture-the-flag-1',
    image: spikerush,
    title: 'Capture The Flag',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Medium',
    team: '3v3 / 5v5',
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.6,
  },
  {
    slug: 'deathmatch',
    image: spikerush,
    title: 'Deathmatch',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },
  {
    slug: 'zombie-mode',
    image: spikerush,
    title: 'Zombie Mode',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Medium',
    team: '3v3 / 5v5',
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.6,
  },
  {
    slug: 'spike-rush-2',
    image: spikerush,
    title: 'Spike Rush',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },
  {
    slug: 'capture-the-flag-2',
    image: spikerush,
    title: 'Capture The Flag',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Medium',
    team: '3v3 / 5v5',
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.6,
  },
  {
    slug: 'spike-rush-3',
    image: spikerush,
    title: 'Spike Rush',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },
  {
    slug: 'capture-the-flag-3',
    image: spikerush,
    title: 'Capture The Flag',
    discription: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
    difficulty: 'Medium',
    team: '3v3 / 5v5',
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the shrinking zone mechanic. Makes for exciting endgames!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.6,
  },
];


const Gamemode = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/gamemode/${slug}`);
  };

  return (
    <div className="card-container">
      {listings.map((item, index) => (
        <div key={index} className="card" onClick={() => handleClick(item.slug)}>
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-details">
            <div className="card-header">
              <h4 className="card-location">{item.title}</h4>
              <div className="card-rating-badge">
                <span className="star">★</span> {item.rating}
              </div>
            </div>
            <p className="card-title">{item.difficulty}</p>
            <p className="card-price"><strong>{item.team}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { listings };
export default Gamemode;
