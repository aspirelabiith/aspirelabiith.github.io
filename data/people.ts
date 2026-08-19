import RPKumarImage from "@/public/people/Prasanth_Kumar_R.png";
import AshishSahuImage from "@/public/people/Aashish.jpeg";
import ArkaImage from "@/public/people/Arka.jpeg";
import SaurabhImage from "@/public/people/Saurabh_Shukla.jpeg";
import ViswaKiranImage from "@/public/people/Viswa_Kiran.jpeg";
import RamiReddyImage from "@/public/people/Rami_Reddy.jpeg";
import ChinniImage from "@/public/people/Chinnikrishna.jpeg";
import SathwikImage from "@/public/people/Sathwik.jpeg";
import SagarImage from "@/public/people/Vidya_Sagar.jpeg";
import MukeshImage from "@/public/people/Mukesh.png";
import UdayImage from "@/public/people/Uday.png";

import { Faculty, Student, Alumnus } from "../lib/types";

const faculty: Faculty[] = [
  {
    name: "R Prasanth Kumar",
    role: "Head of the Lab",
    positions: [
      "Professor, Department of Artificial Intelligence",
      "Affiliate Professor, Department of Mechanical & Aerospace Engineering",
    ],
    email: "ni.ca.htii.ia [ta] ramukpr",
    web: "https://www.iith.ac.in/~rpkumar",
    image: RPKumarImage,
  },
];

const phdStudents: Student[] = [
  { name: "Aashish Sahu", image: AshishSahuImage },
  { name: "B V Shiva Reddy", image: undefined },
];

const mastersStudents: Student[] = [
  {
    name: "S Rami Reddy",
    program: "Mechanics and Design",
    image: RamiReddyImage,
    joined: "Jul 2024",
  },
  {
    name: "Arkaprabha Sinha Roy",
    program: "Artificial Intelligence",
    image: ArkaImage,
    joined: "Jul 2025",
  },
  {
    name: "S Chinnikrishna Yadav",
    program: "Robotics",
    image: ChinniImage,
    joined: "Jul 2025",
  },
  {
    name: "Banoth Nikhil",
    program: "Artificial Intelligence",
    image: undefined,
    joined: "Jan 2026",
  },
  {
    name: "Bestha Mukesh",
    program: "Robotics",
    image: MukeshImage,
    joined: "Jan 2026",
  },
  {
    name: "Md Shanshad P K",
    program: "Robotics",
    image: undefined,
    joined: "Jan 2026",
  },
  {
    name: "NCSS Uday L",
    program: "Smart Mobility",
    image: UdayImage,
    joined: "Jan 2026",
  },
  {
    name: "Vidya Sagar Tirandas",
    program: "Robotics",
    image: SagarImage,
    joined: "Jan 2026",
  },
  {
    name: "Guruvignesh R M",
    program: "Additive Manufacturing",
    image: undefined,
    joined: "Jul 2026",
  },
  {
    name: "Krinsh Dhedhi",
    program: "Artificial Intelligence",
    image: undefined,
    joined: "Jul 2026",
  },
  {
    name: "Rayadu Vijay Setti",
    program: "Robotics",
    image: undefined,
    joined: "Jul 2026",
  },
  {
    name: "Sidharth D",
    program: "Artificial Intelligence",
    image: undefined,
    joined: "Jul 2026",
  },
];

const undergradStudents: Student[] = [];

const alumni: Alumnus[] = [
  {
    name: "Krishnendu Roy",
    degree: "PhD",
    graduationYear: 2026,
    image: undefined,
  },
  {
    name: "Shriram Hari",
    degree: "BTech",
    program: "Mechanical Engineering",
    graduationYear: 2026,
    image: undefined,
  },
  {
    name: "B Vijaya Sathwik",
    degree: "MTech",
    program: "Mechanics and Design",
    graduationYear: 2026,
    image: SathwikImage,
  },
  {
    name: "Saurabh Shukla",
    degree: "MTech",
    program: "Mechanics and Design",
    graduationYear: 2026,
    image: SaurabhImage,
  },
  {
    name: "VVS Viswa Kiran",
    degree: "MTech",
    program: "Artificial Intelligence",
    graduationYear: 2026,
    image: ViswaKiranImage,
  },
];

export { faculty, phdStudents, mastersStudents, undergradStudents, alumni };
