import {Text} from '../../../components/Text/Text';
import {Post} from '../../../domain/Post/postTypes';
import {Box} from '../../../components/Box/Box';
import { useNavigation } from '@react-navigation/native';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'|'id'>;

export function PostBottom({author, text, commentCount, id}: Props) {
const navigation = useNavigation()

  const commentText = getCommentText(commentCount);
function navigateToPostCommentScreen(){
  navigation.navigate('PostCommentScreen',{ postId:id, postAuthorId:author.id})
}
  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text onPress={navigateToPostCommentScreen} preset="paragraphSmall" color="primary" bold marginTop="s8">
          Ver {commentCount} Comentarios
        </Text>
      )}
    </Box>
  );
}

// criar função para renderizar a descrição do post

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'Ver Comentario '
  } else {
    return `ver ${commentCount} comentarios`;
  }
}
