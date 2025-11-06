import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
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
              fill: "#9ca3af",
            },
          },
        },
      }}
      layers={[
        "grid",
        "axes",
        "bars",
        "markers",
        "legends",
        "annotations",
        ({ innerWidth }) => (
          <text
            x={innerWidth / 2}
            y={-20}
            textAnchor="middle"
            style={{
              fontSize: 20,
              fontWeight: 600,
              fill: "#333333",
            }}
          >
            Tracks Per Album
          </text>
        ),
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

export function AlbumGraph() {
  const { albumRelease } = useSpotifyContext();
  const chartData = [
    {
      id: "Albums",
      data: albumRelease.map((item) => {
        const date = new Date(item.year);
        return {
          x: date.getMonth() + 1, // Returns 1-12
          y: date.getFullYear(),
          name: item.name, // Add album name for tooltip
        };
      }),
    },
  ];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <ResponsiveScatterPlot
      data={chartData}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      xScale={{
        type: "linear",
        min: 1,
        max: 12,
      }}
      yScale={{ type: "linear", min: 2000, max: 2025 }}
      layers={[
        "grid",
        "axes",
        "nodes",
        "markers",
        "mesh",
        "legends",
        "annotations",
        ({ innerWidth }) => (
          <text
            x={innerWidth / 2}
            y={-20}
            textAnchor="middle"
            style={{
              fontSize: 20,
              fontWeight: 600,
              fill: "#333333",
            }}
          >
            Album Releases
          </text>
        ),
      ]}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendPosition: "middle",
        legendOffset: 40,
        format: (value) => monthNames[value - 1] || value,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Year",
        legendPosition: "middle",
        legendOffset: -40,
        format: (value) => Math.round(value),
      }}
      colors="#9ca3af"
      nodeSize={10}
      useMesh={true}
      tooltip={({ node }) => (
        <div
          style={{
            background: "white",
            padding: "12px 16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            minWidth: "200px",
            maxWidth: "300px",
          }}
        >
          <strong>{node.data.name}</strong>
          <br />
          Month: {monthNames[node.data.x - 1]}
          <br />
          Year: {node.data.y}
        </div>
      )}
      theme={{
        axis: {
          legend: {
            text: {
              fontSize: 14,
              fill: "#9ca3af",
            },
          },
        },
      }}
    />
  );
}
