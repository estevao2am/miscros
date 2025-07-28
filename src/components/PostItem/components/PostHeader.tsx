import { Box } from "../../../components/Box/Box";
import { Text } from "../../..//components/Text/Text";
import { Post } from "../../../domain/Post/postTypes";
import { ProfileAvatar } from "../../../components/ProfileAvatar/ProfileAvatar";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";


type Props = Pick<Post, 'author'>; // extrair apenas os dados do usuario


export function PostHeader({author}:Props){
    const navigation = useNavigation()

    function navigateToProfile(){
        navigation.navigate('ProfileScreen', {userId:author.id})
    }

    return (
        <Pressable onPress={navigateToProfile}>
         <Box flexDirection='row' alignItems="center" mb="s16">
                        <ProfileAvatar imageURL={author.profileURL}/>
                         <Text ml="s12" semiBold preset="paragraphMedium">{author.userName}</Text>
                     </Box>
                     </Pressable>
    ) 
}