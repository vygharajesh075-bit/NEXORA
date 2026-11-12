
import { buildings } from "@/lib/campus";

export function getCampusIntelligence() {
  const totalBuildings = buildings.length;

  const averageEnergy =
    buildings.reduce((sum, b) => sum + b.energy, 0) /
    totalBuildings;

  const averageTemperature =
    buildings.reduce((sum, b) => sum + b.temperature, 0) /
    totalBuildings;

  const averageOccupancy =
    buildings.reduce((sum, b) => sum + b.occupancy, 0) /
    totalBuildings;

  const highestEnergy = [...buildings].sort(
    (a, b) => b.energy - a.energy
  )[0];

  const highestOccupancy = [...buildings].sort(
    (a, b) => b.occupancy - a.occupancy
  )[0];

  const alerts: {
    building: string;
    buildingId: string;
    severity: "warning" | "critical";
    message: string;
  }[] = [];

  for (const building of buildings) {
    if (building.energy >= 80) {
      alerts.push({
        building: building.name,
        buildingId: building.id,
        severity: building.energy >= 90
          ? "critical"
          : "warning",
        message: `Energy demand is elevated at ${building.energy}%.`,
      });
    }

    if (building.temperature >= 26) {
      alerts.push({
        building: building.name,
        buildingId: building.id,
        severity: "warning",
        message: `Temperature is above the configured comfort threshold: ${building.temperature}°C.`,
      });
    }

    if (building.occupancy >= 80) {
      alerts.push({
        building: building.name,
        buildingId: building.id,
        severity: "warning",
        message: `High occupancy detected: ${building.occupancy}%.`,
      });
    }
  }

  return {
    source: "SIMULATED_CAMPUS_DATA",
    lastUpdated: new Date().toISOString(),

    summary: {
      totalBuildings,
      averageEnergy: Number(averageEnergy.toFixed(1)),
      averageTemperature: Number(
        averageTemperature.toFixed(1)
      ),
      averageOccupancy: Number(
        averageOccupancy.toFixed(1)
      ),
    },

    highestEnergyBuilding: highestEnergy,
    highestOccupancyBuilding: highestOccupancy,

    alerts,

    buildings: buildings.map((building) => ({
      id: building.id,
      name: building.name,
      type: building.type,
      energy: building.energy,
      temperature: building.temperature,
      occupancy: building.occupancy,
    })),
  };
}
