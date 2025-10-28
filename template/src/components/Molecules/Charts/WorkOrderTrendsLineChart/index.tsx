import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../styles.module.scss";
import COLORS from "@/constants/COLORS";
import Text from "../../../Atoms/Text";

function WorkOrderTrendsLineChart({
  data,
}: {
  data?: { name: string; value: number }[];
}) {
  // @ts-ignore
  const CustomizedDot = (props) => {
    return (
      <circle
        {...props}
        r="3"
        stroke={COLORS.primary700}
        stroke-width="4"
        fill={COLORS.primary700}
      />
    );
  };

  return (
    <div className={styles.container}>
      <Text variant="P5" color="text50" i18nText="WORK_ORDER_TRENDS" />
      <ResponsiveContainer>
        <LineChart height={135} data={data}>
          <CartesianGrid
            strokeDasharray={0}
            strokeOpacity={0.3}
            vertical={false}
          />
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Line
            dot={<CustomizedDot />}
            dataKey="value"
            stroke={COLORS.primary400}
            strokeWidth={4}
            fill={COLORS.primary400}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorkOrderTrendsLineChart;
