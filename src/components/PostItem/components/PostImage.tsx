import { Dimensions, Image } from "react-native";
import { Post } from "../../../domain/Post/postTypes";


type Props = Pick<Post, 'imageURL'>



export function PostImage({imageURL}:Props) {
    return (
        <Image
                 source={{uri:imageURL}}
                 resizeMode='cover'
                 style={{width:Dimensions.get('screen').width, height:300,marginHorizontal:-24}}
             />
    )
}// marginHorizontal:-24 para ficar alinhado com o padding do Box
//  o padding do Box é de 24, então para ficar alinhado com a tela, precisamos colocar -24