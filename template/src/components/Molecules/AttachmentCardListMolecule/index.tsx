import styles from "./styles.module.scss";
import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import { Divider, Tooltip, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import Button from "../../Atoms/Button";

function AttachmentCardListMolecule() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onRemove: UploadProps["onRemove"] = (file) => {
    setFileList((prev) => prev.filter((item) => item.uid !== file.uid));
  };

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      hasControlInside
      className={styles.uploadContainer}
      itemRender={(_, file) => {
        return (
          <div className={`${styles.cardContainer} ${styles.defaultContainer}`}>
            <div className={styles.upperContainer}>
              <Icon name="attachmentDefault" size={36} />

              {/* TODO: add style to tooltip */}
              <Tooltip title={file.name}>
                <Text variant="P10" color="text50">
                  {file.name.substring(0, 10)}
                  {file.name.length > 20 ? "..." : ""}
                </Text>
              </Tooltip>
            </div>

            <div>
              <Divider className={styles.divider} />
            </div>

            <div className={styles.btnContainer}>
              <Button variant="noStyle">
                <Text variant="P10" color="text50" i18nText="VIEW" />
              </Button>

              <Button variant="noStyle" onClick={() => onRemove(file)}>
                <Text variant="P10" color="danger700" i18nText="DELETE" />
              </Button>
            </div>
          </div>
        );
      }}
    >
      <div className={`${styles.cardContainer} ${styles.addTypeContainer}`}>
        <div className={styles.upperContainer}>
          <Icon name="attachmentAdd" size={36} />

          <Text
            variant="P10"
            color="text50"
            i18nText="ADD_ATTACHMENT"
            className={styles.addAttachmentText}
          />
        </div>
      </div>
    </Upload>
  );
}

export default AttachmentCardListMolecule;
