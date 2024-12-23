import {
  Avatar,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

type UserImageProps = {
  imagePath: string;
  userName: string;
};

const UserImage: React.FC<UserImageProps> = ({
  imagePath,
  userName,
}: {
  imagePath: string;
  userName: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!imagePath) return <Box>Loading...</Box>;

  return (
    <Box>
      <Avatar
        name="User Icon"
        src={imagePath || "/default-avatar.jpeg"}
        bg="blue.300"
        size="md"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザー</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box textAlign="center">
              <Avatar
                name={userName}
                src={imagePath}
                bg="blue.300"
                size="xl"
                mb={4}
              />
              <Text fontSize="lg" fontWeight="bold">
                {userName}
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UserImage;
