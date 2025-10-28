interface UserAvatarAtomProps {
  href?: string;
  className?: string;
  user: string;
  fontVariant?: TextVariant;
  avatar?: string;
  onClick?: () => void;
}

export default UserAvatarAtomProps;
