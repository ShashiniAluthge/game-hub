import { BsGlobe } from "react-icons/bs";
import { platforms } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platform: platforms[];
}

const PlatformIconList = ({ platform }: Props) => {
    const iconMap :{[key:string]:IconType}= {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        android:FaAndroid,
        ios:MdPhoneIphone,
        web:BsGlobe

    }
  return (
    <div>
        <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={'gray.500'}/>
      ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
