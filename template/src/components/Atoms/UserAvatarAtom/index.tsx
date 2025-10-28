import { Link } from "react-router-dom";
import Button from "../Button";
import Text from "../Text";
import styles from "./styles.module.scss";
import UserAvatarAtomProps from "./types";

function UserAvatarAtom({
  className,
  fontVariant,
  user,
  avatar,
  href,
  onClick,
}: UserAvatarAtomProps) {
  // Split the user's name into parts (assumes a space-separated full name)
  const nameParts = user.split(" ");

  // Destructure the first and last name from the name parts
  const [firstName, lastName] = nameParts;

  // Get the first character of the first name, default to an empty string if undefined
  const firstChar = firstName?.[0] ?? "";

  // Get the first character of the last name, default to an empty string if undefined
  const secondChar = lastName?.[0] ?? "";

  return (
    <>
      {href ? (
        <Link to={href}>
          <Text
            variant={fontVariant ?? "P9"}
            className={`${styles.userAvatar} ${className}`}
            color="text200"
          >
            {firstChar}
            {secondChar}
          </Text>
        </Link>
      ) : (
        <Button variant="noStyle" onClick={onClick}>
          {avatar ? (
            <>
              <img src={avatar} alt={user} className={styles.imgAvatar} />
              <Text variant="P7">{user}</Text>
            </>
          ) : (
            <Text
              variant={fontVariant ?? "P9"}
              className={`${styles.userAvatar} ${className}`}
              color="text200"
            >
              {firstChar}
              {secondChar}
            </Text>
          )}
        </Button>
      )}
    </>
  );
}

export default UserAvatarAtom;
