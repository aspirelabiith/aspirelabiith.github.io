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
import UdayImage from "@/public/people/Uday.jpeg";

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
  },
  {
    name: "Arkaprabha Sinha Roy",
    program: "Artificial Intelligence",
    image: ArkaImage,
  },
  {
    name: "S Chinnikrishna Yadav",
    program: "Robotics and Intelligent Systems",
    image: ChinniImage,
  },
  {
    name: "Banoth Nikhil",
    program: "Artificial Intelligence",
    image: undefined,
  },
  {
    name: "Bestha Mukesh",
    program: "Robotics and Intelligent Systems",
    image: MukeshImage,
  },
  {
    name: "Md Shanshad P K",
    program: "Robotics and Intelligent Systems",
    image: undefined,
  },
  {
    name: "Vidya Sagar Tirandas",
    program: "Robotics and Intelligent Systems",
    image: SagarImage,
  },
  {
    name: "NCSS Uday L.",
    program: "Smart Mobility",
    image: UdayImage,
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
