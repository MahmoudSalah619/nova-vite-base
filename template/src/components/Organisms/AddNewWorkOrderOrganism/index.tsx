import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import TableSelectionOptions from "@/constants/TableSelectionOptions";
import Button from "../../Atoms/Button";
import { useNavigate } from "react-router-dom";
import showSuccessMsg from "@/utils/showSuccessMsg";
import { useForm } from "react-hook-form";
import { addNewWorkOrderSchema, IAddNewWorkOrder } from "./types";
import ControlledInput from "@components/Molecules/ControlledInput";

export default function AddNewWorkOrderOrganism() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddNewWorkOrder>();

  const handleSubmitBtn = () => {
    navigate("/");
    showSuccessMsg({ msg: "Adding New work order #1534345" });
  };

  return (
    <section className={styles.container}>
      <Text
        variant="P6"
        className={styles.headerTitle}
        i18nText="ADD_BASIC_DETAILS"
      />

      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(handleSubmitBtn)}
      >
        <ControlledInput
          type="dropdown"
          required
          control={control}
          name="project"
          i18nLabel="SELECT_PROJECT"
          options={TableSelectionOptions.DummyData}
          i18nPlaceholder="MALL_MASR"
          validationRules={addNewWorkOrderSchema?.project}
          errorMsg={errors?.project?.message}
        />

        <div className={styles.locationContainer}>
          <ControlledInput
            type="dropdown"
            required
            control={control}
            name="levelOne"
            fullWidth
            i18nLabel="SELECT_LOCATION_LEVEL_ONE"
            options={TableSelectionOptions.DummyData}
            i18nPlaceholder="GIZA"
            validationRules={addNewWorkOrderSchema?.levelOne}
            errorMsg={errors?.levelOne?.message}
          />
          <ControlledInput
            control={control}
            type="dropdown"
            name="levelTwo"
            i18nLabel="SELECT_LOCATION_LEVEL_TWO"
            fullWidth
            options={TableSelectionOptions.DummyData}
            i18nPlaceholder="GIZA"
            validationRules={addNewWorkOrderSchema?.levelTwo}
            errorMsg={errors?.levelTwo?.message}
          />
        </div>

        <div className={styles.locationContainer}>
          <ControlledInput
            type="dropdown"
            control={control}
            name="levelThree"
            i18nLabel="SELECT_LOCATION_LEVEL_THREE"
            options={TableSelectionOptions.DummyData}
            i18nPlaceholder="GIZA"
            validationRules={addNewWorkOrderSchema?.levelThree}
            errorMsg={errors?.levelThree?.message}
            fullWidth
          />
          <ControlledInput
            type="dropdown"
            control={control}
            name="levelFour"
            i18nLabel="SELECT_LOCATION_LEVEL_FOUR"
            options={TableSelectionOptions.DummyData}
            i18nPlaceholder="GIZA"
            validationRules={addNewWorkOrderSchema?.levelFour}
            errorMsg={errors?.levelFour?.message}
            fullWidth
          />
        </div>

        <ControlledInput
          type="dropdown"
          control={control}
          name="levelFive"
          i18nLabel="SELECT_LOCATION_LEVEL_FIVE"
          options={TableSelectionOptions.DummyData}
          i18nPlaceholder="GIZA"
          validationRules={addNewWorkOrderSchema?.levelFive}
          errorMsg={errors?.levelFive?.message}
        />

        <ControlledInput
          type="dropdown"
          required
          control={control}
          name="serviceType"
          i18nLabel="SELECT_SERVICE_TYPE"
          options={TableSelectionOptions.DummyData}
          i18nPlaceholder="Type"
          validationRules={addNewWorkOrderSchema?.serviceType}
          errorMsg={errors?.serviceType?.message}
        />

        <ControlledInput
          control={control}
          type="date"
          name="startDate"
          i18nLabel="START_DATE"
          i18nPlaceholder="START_DATE"
        />

        <ControlledInput
          required
          control={control}
          type="dropdown"
          name="primaryTrade"
          i18nLabel="SELECT_PRIMARY_TRADE"
          options={TableSelectionOptions.DummyData}
          i18nPlaceholder="TRADE"
          validationRules={addNewWorkOrderSchema?.primaryTrade}
          errorMsg={errors?.primaryTrade?.message}
        />

        <ControlledInput
          required
          type="dropdown"
          control={control}
          name="problemType"
          i18nLabel="SELECT_PROBLEM_TYPE"
          options={TableSelectionOptions.DummyData}
          i18nPlaceholder="FIX_AC"
          validationRules={addNewWorkOrderSchema?.problemType}
          errorMsg={errors?.problemType?.message}
        />

        <ControlledInput
          type="dropdown"
          control={control}
          name="priority"
          i18nLabel="PRIORITY"
          options={TableSelectionOptions.Priority}
          i18nPlaceholder="SELECT"
          validationRules={addNewWorkOrderSchema?.priority}
          errorMsg={errors?.priority?.message}
        />

        <div className={styles.locationContainer}>
          <ControlledInput
            required
            control={control}
            type="text"
            name="workOrderDescription"
            i18nLabel="WO_DESCRIPTION"
            i18nPlaceholder="WO_DESCRIPTION"
            validationRules={addNewWorkOrderSchema?.workOrderDescription}
            errorMsg={errors?.workOrderDescription?.message}
            fullWidth
          />
          <ControlledInput
            type="text"
            control={control}
            name="workOrderSummery"
            i18nLabel="WO_SUMMARY"
            i18nPlaceholder="WO_SUMMARY"
            validationRules={addNewWorkOrderSchema?.workOrderSummery}
            errorMsg={errors?.workOrderSummery?.message}
            fullWidth
          />
        </div>

        <ControlledInput
          type="text"
          control={control}
          name="assetCode"
          i18nLabel="ASSETS_CODE"
          i18nPlaceholder="ENTER_ASSESTS_CODE"
          validationRules={addNewWorkOrderSchema?.assetCode}
          errorMsg={errors?.assetCode?.message}
        />

        <ControlledInput
          type="text"
          control={control}
          name="equipmentName"
          i18nLabel="EQUIPMENT_NAME"
          i18nPlaceholder="SEARCH_EQUIPMENT_NAME"
          suffixIcon="serachIcon"
          validationRules={addNewWorkOrderSchema?.equipmentName}
          errorMsg={errors?.equipmentName?.message}
        />

        <Button className={styles.btnContainer} title="Save" type="submit" />
      </form>
    </section>
  );
}
