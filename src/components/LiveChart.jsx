import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "./LiveChart.module.css";
import { contractAddress, launchDate } from "../../data/data";

const LiveChart = () => {
  const [countDown, setCountDown] = useState("");
  const [remove, setRemove] = useState(launchDate > Date.now());
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Eluncat Price (SOL)",
        data: [],
        borderColor: "#ff9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.birdeye.so/token/${contractAddress}/chart?interval=1m`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setChartData({
            labels: data.map((entry) =>
              new Date(entry.timestamp * 1000).toLocaleTimeString()
            ),
            datasets: [
              {
                label: "Eluncat Price (SOL)",
                data: data.map((entry) => entry.price),
                borderColor: "#ff9800",
                backgroundColor: "rgba(255, 152, 0, 0.2)",
                fill: true,
                tension: 0.4,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch new data every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const difference = launchDate - now;

      if (difference <= 0) {
        setCountDown("00:00:00"); // Stop at 12 PM
        clearInterval(interval);
        return;
      }

      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0"
      );

      setCountDown(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemove(launchDate > Date.now()); // Update state every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.chartContainer}>
      <h2>Eluncat Price Chart</h2>
      <div className={styles.chart}>
        <Line data={chartData} />
        {remove && (
          <div className={styles.chartBlur}>
            <span className={styles.countDown}>{countDown}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChart;
