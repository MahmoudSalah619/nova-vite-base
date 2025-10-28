import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import PageHeaderProps from "./types";
import Icon from "../../Atoms/Icon";
import { useLocation, useNavigate } from "react-router-dom";

function PageHeader({
  className,
  title,
  i18nTitle,
  canGoBack,
  childCon,
  children,
  subtitleContent,
}: PageHeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    const segments = location.pathname.split("/");
    segments.pop(); // Remove the last segment
    const newPath = segments.join("/");

    navigate(!newPath ? "/" : newPath);
  };
  return (
    <div className={`${styles.container} ${className}`}>
      {(title || i18nTitle) && (
        <div className={styles.titleCon}>
          {canGoBack && (
            <div className={styles.arrowCon}>
              <Icon
                name="arrowDown"
                className={styles.arrowleft}
                size={16}
                onClick={handleGoBack}
              />
            </div>
          )}

          <div>
            {i18nTitle ? (
              <Text variant="H7" color="text50" i18nText={i18nTitle} />
            ) : (
              <Text variant="H7" color="text50">
                {title}
              </Text>
            )}
            {subtitleContent}
          </div>
        </div>
      )}

      <div className={`${styles.childrenContainer} ${childCon}`}>
        {children}
      </div>
    </div>
  );
}

export default PageHeader;
