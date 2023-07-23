"use client";
import { useState } from "react";
import  Movie_row from "./movie_row.js";

const MoviesData = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Dear Zindagi",
      release_date: "2016 • 2h 31m",
      type: "Drama, Romance",
      img: "image1.png",
      description:
        "Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections. 20",
    },
    {
      id: 2,
      name: "Brave",
      release_date: "2012 • 1h 33m",
      type: "Adventurous, Comedy",
      img: "image1.png",
      description:
        "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse",
    },
    {
      id: 3,
      name: "Moana",
      release_date: "2016 • 2h 31m",
      type: "Adventurous, Comedy",
      img: "image1.png",
      description:
        "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right. 23",
    },
    {
      id: 4,
      name: "Mulan",
      release_date: "2012 • 1h 33m",
      img: "image1.png",
      type: "Adventurous, Comedy",
      description:
        "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process. 66",
    },
    {
      id: 5,
      name: "Mulan",
      release_date: "1998 • 1h 27m",
      type: "Adventurous, Comedy",
      img: "image1.png",
      description:
        "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process. 66",
    },
    {
      id: 6,
      name: "He Named Me Malala",
      release_date: "2015 • 1h 28m",
      img: "image1.png",
      type: "Biography, Documentary",
      description:
        "A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations. 102",
    },
    {
      id: 7,
      name: "Soul Surfer",
      release_date: "2015 • 1h 28m",
      img: "image1.png",
      type: "Drama, Biography, Family",
      description:
        "Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack. 1236",
    },
    {
      id: 8,
      name: "Bend it like Beckham",
      img: "image1.png",
      release_date: "2002 • 1h 52m",
      type: "Drama & Romance",
      description:
        "Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football. 9",
    },
    {
      id: 9,
      name: "Into the Wild",
      img: "image1.png",
      release_date: "2007 • 2h 28",
      description:
        "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity, and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life. 9",
    },
  ]);

  const handleDelete = (itemId) => {
    const updatedItems = movies.filter((movie) => movie.id !== itemId);
    setMovies(updatedItems);
  };

  return (
    <div>
      {movies.map((movie) => (
        < Movie_row key={movie.id} movie={movie} onDelete={(handleDelete)} />
      ))}
    </div>
  );
};

export default MoviesData;

