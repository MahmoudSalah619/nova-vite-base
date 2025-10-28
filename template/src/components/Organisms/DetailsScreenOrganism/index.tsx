import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import IReviewScreenOrganismProps, { DetailsScreenCells } from "./types";
import styles from "./styles.module.scss";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

type Mode = "view" | "edit";

function ViewCell<T>({
  initialData,
  cellName,
  cells,
}: {
  initialData: T;
  cells: DetailsScreenCells<T>;
  cellName: keyof T;
}) {
  const cellObject = cells[cellName];
  const cellData = initialData[cellName];
  return (
    <div
      key={cellName.toString()}
      className={`${styles.cellContent} ${cellObject?.className ?? ""}`}
    >
      {cellObject?.renderViewComponent ? (
        <>
          {cellObject?.label && (
            <Text variant="P7" color="text200" i18nText={cellObject?.label} />
          )}
          {cellObject.renderViewComponent(cellData)}
        </>
      ) : (
        <>
          {cellObject?.label && (
            <Text variant="P7" color="text200" i18nText={cellObject?.label} />
          )}
          <Text variant="P9" color="text50">
            {typeof cellData === "string" ||
            typeof cellData === "number" ||
            typeof cellData === "boolean"
              ? cellData
              : cellObject?.valueGetter?.(cellData)}
          </Text>
        </>
      )}
    </div>
  );
}

function DetailsScreenOrganism<T extends FieldValues>({
  className,
  title,
  editable,
  editBtnText,
  exportable,
  deletable,
  deletableInEditMode,
  sections,
  cells,
  initialData,
  onEdit,
  onDelete,
  handleSubmit,
}: IReviewScreenOrganismProps<T>) {
  const [mode, setMode] = useState<Mode>("view");

  const handleToggleMode = () => {
    setMode(mode === "view" ? "edit" : "view");
  };

  const handleEdit: SubmitHandler<T> = (data) => {
    setMode("view");

    // TODO: replace initialData with the updated data from the form
    onEdit?.(data);
  };

  return (
    <CardWrapper className={`${styles.container} ${className}`}>
      <form className={styles.form} onSubmit={handleSubmit(handleEdit)}>
        <div className={styles.header}>
          <div className={styles.title}>
            <Text variant="P1" color="text50" i18nText={title} />
            {/* {statusId && (
              <StatusMolecule
                indicator
                statusId={statusId}
                i18StatusText={statusText}
              />
            )} */}
          </div>

          <div className={styles.btns}>
            {mode === "view" ? (
              <>
                {editable && (
                  <Button
                    variant="secondary"
                    prefixIcon="editIcon"
                    title={editBtnText ?? "EDIT"}
                    onClick={handleToggleMode}
                    type="button"
                  />
                )}

                {exportable && (
                  <Button
                    variant="secondary"
                    prefixIcon="exportIcon"
                    title="EXPORT"
                    type="button"
                  />
                )}
                {deletable && (
                  <Button
                    variant="secondary"
                    prefixIcon="deleteIcon"
                    title="DELETE"
                    fontColor="danger700"
                    onClick={() => onDelete?.(initialData)}
                    type="button"
                  />
                )}
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  prefixIcon="close"
                  prefixIconSize={12}
                  title="CANCEL"
                  onClick={handleToggleMode}
                  type="button"
                />
                <Button
                  variant="secondary"
                  prefixIcon="doneAll"
                  title="UPDATE_DATA"
                  type="submit"
                />
                {deletableInEditMode && (
                  <Button
                    variant="secondary"
                    prefixIcon="deleteIcon"
                    title="DELETE"
                    fontColor="danger700"
                    onClick={() => onDelete?.(initialData)}
                    type="button"
                  />
                )}
              </>
            )}
          </div>
        </div>

        {sections.map((section) => {
          const { className, title, rows } = section;
          return (
            <section className={`${styles.section} ${className}`}>
              {title && <Text variant="P1" color="text50" i18nText={title} />}

              {rows.map((row, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.row} ${row.className ?? ""}`}
                  >
                    {row.cells.map((cellName) => {
                      return (
                        <ViewCell
                          cellName={cellName}
                          initialData={initialData}
                          cells={cells}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </section>
          );
        })}
      </form>
    </CardWrapper>
  );
}

export default DetailsScreenOrganism;
