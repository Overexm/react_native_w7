const Images = [
    {image: require('../assets/banners/img_2.jpeg')},
    {image: require('../assets/banners/img_1.jpg')},
    {image: require('../assets/banners/opera.jpeg')},
    {image: require('../assets/banners/saken_museum.jpeg')},
    {image: require('../assets/banners/museum.jpeg')},
  ];
  
  export const data = [
    {
      id: '1',
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: 'Mangilik El Triumphal Arch',
      description: `It symbolizes the achievements of the Kazakh people. It is one of the most recognizable architectural structures in Nur-Sultan, the capital of Kazakhstan. The name of the arch means "Eternal Country". `,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      address: 'Nur-Sultan, Mangilik El ave ',
    },
    {
      id: '2',
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: 'Kazakhstan Central Concert Hall',
      description: `The Central Concert Hall  is a center for performing arts in Nur-Sultan, the capital city of Kazakhstan. It was designed by Italian architect Manfredi Nicoletti and was inaugurated by the President of Kazakhstan`,
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      address: 'pr-t.  Mangilik El.  10/1, Nur-Sultan 010000  ',
      
    },
    {
      id: '3',
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: 'The State Opera and Ballet Theatre “Astana Opera”',
      description: `The State Opera and Ballet Theatre “Astana Opera” was founded in 2013 on the initiative of the First President of Kazakhstan N. Nazarbayev. 
      The largest theatre in Central Asia, Astana Opera is constructed according to the best classical architectural traditions. `,
      image: Images[2].image,
      rating: 3,
      reviews: 220,
      address: 'Dinmukhamed Kunaev 12/1, Nur-Sultan 010000   ',
    },
    {
      id: '4',
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      title: ' Museum of Saken Seifullin',
      description: `Dedicated to a pioneer of Kazakh literature, Saken Seifullin Museum celebrates the work of a major 20th-century artist, who challenged literary boundaries by calling for his country's independence from the Soviet Union. Observe the office in which Saken worked and created some of his finest prose and poetry.`,
      image: Images[3].image,
      rating: 4,
      reviews: 48,
      address: 'Auezov Street, Nur-Sultan 010000  ',
    },
    {
      id: '5',
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: 'The National Museum of the Republic of Kazakhstan',
      description: `This huge blue-glass-and-white-marble museum covers the history and culture of Kazakhstan from ancient to modern times. Themed halls comprise interactive displays and artifact exhibits, ranging from a yurt in the Hall of Ethnography to a chronicle of the capital's modern history in the Hall of Astana. `,
      image: Images[4].image,
      rating: 4,
      reviews: 178,
      categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
      id: '6',
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: 'Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[0].image,
      rating: 4,
      reviews: 99,
      categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
      id: '7',
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: 'Second Amazing Food Place',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      image: Images[1].image,
      rating: 5,
      reviews: 102,
      categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
  ];