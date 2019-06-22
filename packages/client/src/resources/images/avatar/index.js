import user1 from './user-1.png';
import user2 from './user-2.png';
import user3 from './user-3.png';
import user4 from './user-4.png';
import user5 from './user-5.png';
import user6 from './user-6.png';
import user7 from './user-7.png';
import user8 from './user-8.png';
import user9 from './user-9.png';
import user10 from './user-10.png';
import user11 from './user-11.png';
import user12 from './user-12.png';
import user13 from './user-13.png';
import user14 from './user-14.png';
import user15 from './user-15.png';
import user16 from './user-16.png';
import placeholder from './placeholder.png';

const avatars = [
  { name: 'placeholder', image: placeholder },
  { name: 'user1', image: user1 },
  { name: 'user2', image: user2 },
  { name: 'user3', image: user3 },
  { name: 'user4', image: user4 },
  { name: 'user5', image: user5 },
  { name: 'user6', image: user6 },
  { name: 'user7', image: user7 },
  { name: 'user8', image: user8 },
  { name: 'user9', image: user9 },
  { name: 'user10', image: user10 },
  { name: 'user11', image: user11 },
  { name: 'user12', image: user12 },
  { name: 'user13', image: user13 },
  { name: 'user14', image: user14 },
  { name: 'user15', image: user15 },
  { name: 'user16', image: user16 },
];

const getAvatarByName = name => {
  if (!name || avatars.filter(avatar => avatar.name === name).length === 0) {
    return avatars[0].image;
  }
  return avatars.find(avatar => avatar.name === name).image;
};

export default avatars;
export { getAvatarByName };
