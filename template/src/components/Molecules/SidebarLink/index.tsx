import { Link, useLocation } from "react-router-dom";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { SidebarLinkProps } from "./types";
import Icon from "../../Atoms/Icon";

function SidebarLink({
  icon,
  label,
  className,
  href,
  subLinks,
  hasActiveStyle = true,
  color = "text300",
  textVariant = "P7",
  onClick,
}: SidebarLinkProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const firstSegment = `/${currentPath.split("/")[1]}`;
  const secondSegment = currentPath.split("/")[2];
  const isMainLinkActive = firstSegment === href;

  return (
    <div className={styles.sidebarLinkContainer}>
      <Link
        className={`${styles.navbarLink} ${className} ${
          isMainLinkActive && hasActiveStyle ? styles.active : ""
        }`}
        to={href}
        onClick={onClick}
        replace
      >
        <div className={styles.navbarInnerContent}>
          {icon && <Icon {...icon} />}
          <Text
            color={color}
            variant={isMainLinkActive && hasActiveStyle ? "P9" : textVariant}
          >
            {label}
          </Text>
        </div>

        {subLinks?.length && (
          <Icon
            name="siderArrowDown"
            size={15}
            className={isMainLinkActive ? styles.flipArrowStyle : ""}
          />
        )}
      </Link>

      {isMainLinkActive &&
        subLinks?.map((subLink) => {
          const isSubLinkActive = secondSegment === subLink.href;

          return (
            <Link
              className={`${styles.subNavbarLink}  ${
                isSubLinkActive ? styles.active : ""
              }`}
              to={subLink.href}
              onClick={subLink.onClick}
            >
              <li />
              <Text
                variant="P10"
                color={isSubLinkActive ? "text50" : "text300"}
              >
                {subLink.label}
              </Text>
            </Link>
          );
        })}
    </div>
  );
}

export default SidebarLink;
