import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
  limit?: number;
}
const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (children.length < limit) {
    return <Text>{children}</Text>;
  }

  const summary = children.substring(0, limit);

  return (
    <Text>
      {expanded ? children : summary + '...'}
      <Button
        size='xs'
        fontWeight='bold'
        colorScheme='yellow'
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'show less' : 'show more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
