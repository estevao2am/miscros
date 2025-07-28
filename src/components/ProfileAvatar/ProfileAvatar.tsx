import { Image } from "react-native";


interface ProfileAvatarProps {
    imageURL:string;
    size?:number;
    borderRadius?:number
}
export function ProfileAvatar({size=32,imageURL,borderRadius=14}:ProfileAvatarProps) {
  return (
    <Image
      source={{uri: imageURL}}
      style={{width:size, height: size, borderRadius}}
    />
  );
}
