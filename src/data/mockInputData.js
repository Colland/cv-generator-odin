import {v4 as uuidv4} from 'uuid'

export const mockEducationData = [
  {
    id: uuidv4(),
    uniName: "University of Auckland",
    degree: "Bachelors in Computer Science",
    startDate: "2024-06",
    endDate: "2025-01",
    location: "Auckland, New Zealand"
  },
  {
    id: uuidv4(),
    uniName: "University of Technology",
    degree: "Bachelors in Law and Commerce", 
    startDate: "2024-06", 
    endDate: "2025-01",
    location: "Des Moines, Iowa"
  }
]

export const mockExperienceData = [
  {
    id: uuidv4(),
    companyName: "Spark New Zealand",
    jobTitle: "Backend Engineer",
    startDate: "2023-04",
    endDate: "2024-07",
    location: "Auckland, New Zealand",
    description: "Worked on internal APIs and services to support Spark's customer platform. Maintained backend systems and implemented new features using Node.js and AWS."
  },
  {
    id: uuidv4(),
    companyName: "Fisher & Paykel Healthcare",
    jobTitle: "Software Developer Intern",
    startDate: "2022-11",
    endDate: "2023-02",
    location: "East Tamaki, Auckland",
    description: "Assisted in building internal tools for production monitoring. Collaborated with engineers on dashboards and automated data processing scripts.",
  }
]

export const mockReferenceData = [
  {
    id: uuidv4(),
    referenceName: "John Goodman",
    relation: "Former boss",
    email: "j.goodman@gmail.com"
  }
]