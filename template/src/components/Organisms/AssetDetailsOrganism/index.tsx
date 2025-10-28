import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import styles from "./styles.module.scss";
import QrCode from "../../../assets/images/qr-code.png";
import { useForm } from "react-hook-form";
import { assetDetailsSchema, IAssetDetails } from "./types";
import DetailsScreenOrganism from "../DetailsScreenOrganism";

function AssetDetailsOrganism() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IAssetDetails>({
    defaultValues: {
      assetName: "ADCD-123",
      assetCode: "PJ_02_009_044",
      primaryTrade: "Bit68",
      qrCode: QrCode,
    },
  });

  const detailsScreenCells: DetailsScreenCells<IAssetDetails> = {
    assetName: {
      label: "ASSET_NAME",
      isEditable: true,
    },
    assetCode: {
      label: "ASSET_CODE",
      isEditable: true,
    },
    primaryTrade: {
      label: "PRIMARY_TRADE",
      isEditable: true,
    },
    qrCode: {
      label: "QR_CODE",
      isEditable: false,
      renderViewComponent: (data) => {
        return <img src={data} alt="QR Code" className={styles.qrCode} />;
      },
    },
  };

  const detailsScreenSections: DetailsScreenSection<IAssetDetails>[] = [
    {
      rows: [
        {
          cells: ["assetName", "assetCode", "primaryTrade"],
          className: styles.customRowStyle,
        },
        { cells: ["qrCode"] },
      ],
    },
  ];
  return (
    <DetailsScreenOrganism
      className={styles.container}
      title="General"
      initialData={getValues()}
      cells={detailsScreenCells}
      sections={detailsScreenSections}
      editable
      deletable
      control={control}
      handleSubmit={handleSubmit}
      onEdit={(data) => console.error(data)}
      errors={errors}
      validationRules={assetDetailsSchema}
    />
  );
}

export default AssetDetailsOrganism;
