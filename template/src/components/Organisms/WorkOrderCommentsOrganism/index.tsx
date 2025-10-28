import Button from "@components/Atoms/Button";
import styles from "./styles.module.scss";
import Icon from "@components/Atoms/Icon";
import Text from "@components/Atoms/Text";
import { IWorkOrderCommentsTypes } from "./types";
import ModalOrganism from "../ModalOrganism";
import { useState } from "react";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { Input } from "@components/Molecules/Input";

export default function WorkOrderCommentsOrganism({
  commentCards,
}: IWorkOrderCommentsTypes) {
  const { t } = useAutoCompleteTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleSubmit = () => {
    setIsVisible(false);
  };

  const addCommentsBtns: {
    iconName: "documentText" | "taskSquare";
    title: "WORK_ORDER_DESCRIPTION" | "WORK_ORDER_SUMMARY";
    addCommentCb: () => void;
  }[] = [
    {
      iconName: "documentText",
      title: "WORK_ORDER_DESCRIPTION",
      addCommentCb: () => setIsVisible(true),
    },
    {
      iconName: "taskSquare",
      title: "WORK_ORDER_SUMMARY",
      addCommentCb: () => setIsVisible(true),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.commentCardsContainer}>
        {commentCards.map((card) => (
          <div className={styles.commentCardItemContainer}>
            <div className={styles.commentTitle}>
              <div className={styles.iconContainer}>
                <Icon name={card.iconName} size={24} />
              </div>
              <Text variant="P8" i18nText={card.title} />
            </div>
            <Text variant="P3">{card.comment}</Text>
            <div className={styles.userInfo}>
              {card.userImage ? (
                <img
                  src={card.userImage}
                  alt={card.userName}
                  className={styles.imgAvatar}
                />
              ) : (
                <Text
                  variant={"P9"}
                  className={styles.userAvatar}
                  color="text200"
                >
                  {card.userName?.split(" ")?.[0]?.[0]}
                  {card.userName?.split(" ")?.[1]?.[0]}
                </Text>
              )}
              <Text variant="P7" color="text200">
                {card.userName}
              </Text>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.addCommentBtnsContainer}>
        {addCommentsBtns.map((btnData) => (
          <div className={styles.addCommentContainer}>
            <div className={styles.addCommentDescription}>
              <div className={styles.addCommentTitle}>
                <Icon name={btnData.iconName} size={24} />
                <Text variant="P7" i18nText={btnData.title} color="text200" />
              </div>
              {!commentCards.length && (
                <Text variant="P9" i18nText="NO_COMMENT" />
              )}
            </div>
            <Button
              variant="secondary"
              title="ADD_COMMENT"
              prefixIcon="addBlack"
              onClick={btnData.addCommentCb}
            />
          </div>
        ))}
      </div>
      <ModalOrganism
        isVisible={isVisible}
        onCancel={handleCancel}
        title={t("ADD_COMMENT")}
        prefix={
          <div className={styles.modalIconContainer}>
            <Icon name="addBlack" />
          </div>
        }
      >
        <div className={styles.modalBody}>
          <Text variant="L1" color="text50">
            {t("COMMENT")} *
          </Text>

          <Input type="textarea" i18nPlaceholder={"ADD_COMMENT"} />
        </div>

        <div className={styles.modalBtnContainer}>
          <Button variant="secondary" title="CANCEL" onClick={handleCancel} />
          <Button variant="primary" title="SUBMIT" onClick={handleSubmit} />
        </div>
      </ModalOrganism>
    </div>
  );
}
