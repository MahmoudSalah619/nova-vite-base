import { useMemo, useState } from "react";
import useAbortableQuery from "./useAbortableQuery";
import useOnScroll from "./useOnScroll";

export default function useSelectDropdownUtils<
  HookFn extends (...args: any[]) => any,
>(
  useLazyQuery: HookFn,
  params?: any,
  queryOptions?: any,
  transformFn?: (item: any) => any
) {
  const [Page, setPage] = useState(1);
  const [Search, setSearch] = useState("");

  const Params = useMemo(() => {
    return {
      page: Page,
      search: Search ? Search : undefined,
      ...params,
    };
  }, [Page, Search, params]);

  const { data, queryState } = useAbortableQuery(
    useLazyQuery,
    Params,
    queryOptions
  );

  const options = transformFn
    ? data?.results.map(transformFn)
    : data?.results.map((item: any) => ({
        value: item.id?.toString(),
        label: item.name || item.code,
      }));

  const onScroll = useOnScroll({
    object: data,
    isLoading: queryState.isLoading || queryState.isFetching || false,
    cb: () => setPage(Page + 1),
  });

  const onSearch = (val: string) => {
    if (!val) setPage(1);
    setSearch(val);
  };

  const handleResetPage = (page?: number) => {
    setPage(page ?? 1);
  };

  return { data, options, queryState, onScroll, onSearch, handleResetPage };
}
