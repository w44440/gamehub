import { Image, ImageProps } from '@chakra-ui/react';

import bullseye from '../assets/bullseye.png';
import meh from '../assets/meh.webp';
import thumbsup from '../assets/thumbsup.png';

type Props = {
  rating: number;
};

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: string]: ImageProps } = {
    3: {
      src: meh,
      alt: 'meh',
      boxSize: '25px',
    },
    4: {
      src: thumbsup,
      alt: 'recommend',
      boxSize: '25px',
    },
    5: {
      src: bullseye,
      alt: 'exceptional',
      boxSize: '35px',
    },
  };
  return (
    <Image
      {...emojiMap[rating]}
      marginTop={2}
    />
  );
};

export default Emoji;
