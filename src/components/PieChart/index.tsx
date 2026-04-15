import React, {useState, useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {Svg, Path, Text as SvgText, Line, G, Defs, Filter, FeDropShadow} from 'react-native-svg';

const AnimatedG = Animated.createAnimatedComponent(G);

const BUBBLE_W = 52;
const BUBBLE_H = 24;
const ARROW_H = 6;
const BUBBLE_R = 6;

interface SliceData {
  value: number;
  color: string;
  label: string;
}

interface PieChartProps {
  data: SliceData[];
  radius?: number;
}

function toRad(deg: number): number {
  return ((deg - 90) * Math.PI) / 180;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  return {
    x: cx + r * Math.cos(toRad(angleDeg)),
    y: cy + r * Math.sin(toRad(angleDeg)),
  };
}

function slicePath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`,
    'Z',
  ].join(' ');
}

function bubblePath(tipX: number, tipY: number): string {
  const x = tipX - BUBBLE_W / 2;
  const y = tipY - BUBBLE_H - ARROW_H;
  const w = BUBBLE_W;
  const h = BUBBLE_H;
  const r = BUBBLE_R;
  return [
    `M ${x + r} ${y}`,
    `H ${x + w - r}`,
    `Q ${x + w} ${y} ${x + w} ${y + r}`,
    `V ${y + h - r}`,
    `Q ${x + w} ${y + h} ${x + w - r} ${y + h}`,
    `H ${tipX + ARROW_H}`,
    `L ${tipX} ${y + h + ARROW_H}`,
    `L ${tipX - ARROW_H} ${y + h}`,
    `H ${x + r}`,
    `Q ${x} ${y + h} ${x} ${y + h - r}`,
    `V ${y + r}`,
    `Q ${x} ${y} ${x + r} ${y}`,
    'Z',
  ].join(' ');
}

export default function PieChart({data, radius = 82}: PieChartProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const opacity = useRef(new Animated.Value(0)).current;

  const size = radius * 2;
  const cx = radius;
  const cy = radius;
  const total = data.reduce((sum, d) => sum + d.value, 0);

  useEffect(() => {
    if (selected !== null) {
      opacity.setValue(0);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        // SVG props não são suportados pelo native driver
      useNativeDriver: false,
      }).start();
    }
  }, [selected, opacity]);

  let currentAngle = 0;

  const slices = data.map(slice => {
    const angle = (slice.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    const midAngle = startAngle + angle / 2;
    const labelPos = polarToCartesian(cx, cy, radius * 0.65, midAngle);
    const boundaryPoint = polarToCartesian(cx, cy, radius, startAngle);

    currentAngle = endAngle;

    return {
      ...slice,
      path: slicePath(cx, cy, radius, startAngle, endAngle),
      labelX: labelPos.x,
      labelY: labelPos.y,
      dividerX: boundaryPoint.x,
      dividerY: boundaryPoint.y,
    };
  });

  return (
    <Svg width={size} height={size}>
      <Defs>
        <Filter id="tooltipShadow" x="-20%" y="-20%" width="140%" height="140%">
          <FeDropShadow dx="0" dy="-0.5" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
        </Filter>
      </Defs>
      {slices.map((slice, i) => (
        <Path
          key={`slice-${i}`}
          d={slice.path}
          fill={slice.color}
          onPress={() => setSelected(i === selected ? null : i)}
        />
      ))}

      {slices.map((slice, i) => (
        <Line
          key={`divider-${i}`}
          x1={cx}
          y1={cy}
          x2={slice.dividerX}
          y2={slice.dividerY}
          stroke="white"
          strokeWidth={1}
        />
      ))}

      {slices.map((slice, i) =>
        slice.value >= 8 && i !== selected ? (
          <SvgText
            key={`label-${i}`}
            x={slice.labelX}
            y={slice.labelY}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={11}
            fontWeight="bold"
            fill="white">
            {slice.label}
          </SvgText>
        ) : null,
      )}

      {selected !== null && (
        <AnimatedG opacity={opacity}>
          <Path
            d={bubblePath(slices[selected].labelX, slices[selected].labelY)}
            fill="white"
            filter="url(#tooltipShadow)"
          />
          <SvgText
            x={slices[selected].labelX}
            y={slices[selected].labelY - ARROW_H - BUBBLE_H / 2}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={12}
            fontWeight="bold"
            fill={slices[selected].color}>
            {slices[selected].label}
          </SvgText>
        </AnimatedG>
      )}
    </Svg>
  );
}
