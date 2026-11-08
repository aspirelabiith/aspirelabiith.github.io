import { Project } from "../lib/types";

const currentProjects: Project[] = [
  {
    title:
      "Multi-Robot Construction Automation with a Unified Monitoring and Control Platform - Phase 1",
    pi: "R Prasanth Kumar",
    duration: "Oct 2026 - Ongoing",
  },
  {
    title:
      "Design and Development of Autonomous Wheeled Humanoid Robot for Anubhava Mantapa",
    pi: "R Prasanth Kumar",
    duration: "Feb 2025 - Ongoing",
  },
  {
    title:
      "Fabrication and Maintenance of Autonomous Wheeled Humanoid Robot for Anubhava Mantapa",
    pi: "R Prasanth Kumar",
    duration: "Feb 2025 - Ongoing",
  },
];

const completedProjects: Project[] = [
  {
    title:
      "Design and Development of Collaborative Payload Maneuvering with 04 Number of UAVs",
    pi: "R Prasanth Kumar",
    duration: "April 2021 - April 2025",
    agency: "Asymmetric Technologies, DYSL-AT, Hyderabad",
  },
  {
    title: "Design and Fabrication of Autonomous Passenger Drone",
    pi: "Vineeth Balasubramanian",
    coPi: "B Venkatesham",
    investigator: "R Prasanth Kumar",
    duration: "2019 - 2024",
    agency: "MEITY",
  },
];

export { currentProjects, completedProjects };
