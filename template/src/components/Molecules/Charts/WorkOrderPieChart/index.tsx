import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "../styles.module.scss";
import COLORS from "@/constants/COLORS";
import Text from "../../../Atoms/Text";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

function WorkOrderPieChart({
  i18Title,
  data,
}: {
  i18Title: TranslationKeyEnum;
  data?: { name: string; value: number; color: string }[];
}) {
  // @ts-ignore
  const CustomLabel = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, outerRadius, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 8;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={COLORS.primary700}
          fill="none"
        />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 4}
          y={ey}
          textAnchor={textAnchor}
          fill={COLORS.primary700}
          fontSize={10}
        >
          {payload.name}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 4}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill={COLORS.primary700}
          fontSize={10}
        >
          {`${value}(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <div className={`${styles.container} ${styles.pie}`}>
      <Text variant="P5" color="text50" i18nText={i18Title} />
      <ResponsiveContainer>
        <PieChart>
          <Pie
            startAngle={90}
            endAngle={450}
            data={data}
            innerRadius={40}
            outerRadius={80}
            fill={COLORS.primary400}
            dataKey="value"
            label={<CustomLabel />}
            labelLine={false}
          >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend iconSize={8} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorkOrderPieChart;
