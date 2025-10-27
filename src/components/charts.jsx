import { ResponsiveBar } from "@nivo/bar";
import { useSpotifyContext } from "../hooks/useSpotifyContext";

export function TrackGraph() {
  const { tracksPerAlbum } = useSpotifyContext();
  return (
    <ResponsiveBar
      data={tracksPerAlbum}
      keys={["total_tracks"]}
      indexBy="name"
      margin={{ top: 50, right: 130, bottom: 150, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors="#9ca3af"
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      theme={{
        axis: {
          legend: {
            text: {
              fontSize: 14,
              fill: '#9ca3af',
            },
          },
        },
      }}
      layers={[
        'grid',
        'axes',
        'bars',
        'markers',
        'legends',
        'annotations',
        ({ innerWidth }) => (
          <text
            x={innerWidth / 2}
            y={-20}
            textAnchor="middle"
            style={{
              fontSize: 20,
              fontWeight: 600,
              fill: '#333333'
            }}
          >
            Tracks Per Album
          </text>
        )
      ]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: "Albums",
        legendPosition: "middle",
        legendOffset: 120,
        truncateTickAt: 15,
        format: (value) => {
          if (value.length > 15) {
            return value.slice(0, 12) + "...";
          }
          return value;
        },
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Total Tracks",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      enableLabel={true}
      label={(d) => d.value}
      labelPosition="end"
      labelOffset={10}
      legends={[]}
      animate={true}
      motionConfig="gentle"
    />
  );
}
