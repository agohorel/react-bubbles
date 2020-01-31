import React, { useState, useEffect } from "react";
import { Partition } from "@potion/layout";
import { Svg, Rect } from "@potion/element";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);

  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);

  return (
    <div className="bubble-wrap">
      <Svg width={800} height={800}>
        <Partition
          data={{ children: bubbleData }}
          sum={datum => datum.value}
          size={[400, 400]}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes.map(({ x0, y0, x1, y1 }, i) => {
              if (i < colors.length) {
                return (
                  <Rect
                    key={i}
                    x={x0}
                    y={y0}
                    width={x1 - x0}
                    height={y1 - y0}
                    transform={{ scale: [2.25, 2.25] }}
                    fill={colors[i].code.hex}
                  />
                );
              }
              return null;
            })
          }
        </Partition>
      </Svg>
    </div>
  );
};

export default Bubbles;
