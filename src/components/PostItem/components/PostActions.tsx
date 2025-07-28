import {Text} from '../../../components/Text/Text';
import {IconProps} from '../../..//components/Icon/Icon';
import {Box, TouchableOpacityBox} from '../../../components/Box/Box';
import {Icon} from '../../Icon/Icon';
import {Post} from '../../../domain/Post/postTypes';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  favoriteCount,
  commentCount,
}: Props) {
  function likePost() {
    //TODO: Implement post
  }

  function navigateToComment() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    //TODO: Implement favorite post
  }

  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        marked={false}
        onPress={navigateToComment}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (



    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      marginRight="s24"
      onPress={onPress}>
        
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold marginLeft="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
