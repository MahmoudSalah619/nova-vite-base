import { useLocation, Link, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import Icon from "../../Atoms/Icon";

function NavbarLink() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathnames = useMemo(() => {
    if (location.pathname === "/") return [""];

    return location.pathname.split("/");
  }, [location]);

  const formatSegment = (segment: string, index: number) => {
    const numberSegments = pathnames
      .map((segmentItem, index) => ({
        item: segmentItem,
        index: index,
      }))
      .filter((segment) => Number(segment.item));

    if (Number(segment)) {
      return (
        searchParams.get("queryTitles")?.split(",")[
          numberSegments.findIndex((item) => item.index === index)
        ] || ""
      );
    }
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={styles.navbarLink}>
      {pathnames.map((segment, index) => {
        const isLastSegment = index === pathnames.length - 1;
        return (
          <div className={styles.navbarLink} key={segment}>
            {index > 0 && <Icon name="navbarArrowRight" size={8} />}
            <Link to={`/${pathnames.slice(1, index + 1).join("/")}`}>
              <Text
                variant="P10"
                color={isLastSegment ? "primary400" : "text200"}
                className={styles[segment]}
              >
                {index === 0 ? "Home" : formatSegment(segment, index)}
              </Text>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default NavbarLink;
