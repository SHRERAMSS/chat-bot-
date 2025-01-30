import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "vijitha@example.com",
    fullName: "Vijitha",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "Sujitha@example.com",
    fullName: "Sujitha",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "varshedhaa@example.com",
    fullName: "Varshedhaa",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "vyshali@example.com",
    fullName: "Vyshali",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "sania@example.com",
    fullName: "Sania",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "vaishnupriya@example.com",
    fullName: "Vaishnu Priya",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "sabishree@example.com",
    fullName: "Sabishree",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "shreenithi@example.com",
    fullName: "Shreenithi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "sakthi@example.com",
    fullName: "Sakthi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "sithesh@example.com",
    fullName: "Sithesh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "ruban@example.com",
    fullName: "Ruban Raj",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "suganth@example.com",
    fullName: "Suganth",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "sudhakar@example.com",
    fullName: "Sudhakar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "saveen@example.com",
    fullName: "Saveen Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "sujan@example.com",
    fullName: "Sujan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
