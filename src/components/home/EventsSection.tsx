"use client";

import { EventCard } from "../global/EventCard"; // Adjusted the path to locate the EventCard component

export const EventsSection = () => {
  const events = [
    {
      title: "TechCon 2025",
      organizer: { name: "Innovate Inc.", logo: "/logo.svg" },
      timeUntil: "2 days left",
      categories: ["Tech", "Conference"],
      entryFee: "₹499",
      mode: "offline",
      location: "Bangalore",
      date: "April 20, 2025",
      time: "10:00 AM",
    },
    {
      title: "AI Hackathon",
      organizer: { name: "CodeHub" },
      timeUntil: "5 days left",
      categories: ["Hackathon", "AI"],
      entryFee: "Free Entry",
      mode: "online",
      date: "April 25, 2025",
      time: "12:00 PM",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-background text-foreground ">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};
