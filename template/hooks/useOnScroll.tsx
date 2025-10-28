import { PaginatedResponse } from "@apis/types/general";

export default function useOnScroll({
  isLoading,
  object,
  cb,
}: {
  isLoading?: boolean;
  object?: PaginatedResponse<any>;
  cb: () => void;
}) {
  const onScroll = (event: any) => {
    const { target } = event;
    if (
      !isLoading &&
      object?.next &&
      target.offsetHeight > 200 &&
      target.scrollTop + target.offsetHeight === target.scrollHeight
    ) {
      cb();
    }
  };

  return onScroll;
}
