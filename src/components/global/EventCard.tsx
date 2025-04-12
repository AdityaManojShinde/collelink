"use client";

import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface EventCardProps {
  title: string;
  organizer: {
    name: string;
    logo?: string;
  };
  timeUntil?: string;
  categories?: string[];
  entryFee?: string;
  mode?: string;
  location?: string;
  date?: string;
  time?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EventCard = ({
  title,
  organizer,
  timeUntil,
  categories = [],
  entryFee = "Free Entry",
  mode = "online",
  location,
  date,
  time,
  actionLabel = "Apply",
  onAction,
  className,
}: EventCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground flex flex-col h-[400px]",
        className
      )}
    >
      {/* Organizer and countdown */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={organizer.logo} />
            <AvatarFallback>{organizer.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <span className="font-semibold text-lg">{organizer.name}</span>
        </div>
        {timeUntil && (
          <div className="text-primary font-medium">{timeUntil}</div>
        )}
      </div>

      {/* Event details */}
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 rounded-full"
              >
                {category}
              </Badge>
            ))}
          </div>
        )}

        {(date || location) && (
          <div className="space-y-2 mb-4 text-muted-foreground">
            {date && (
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>
                  {date} {time && `• ${time}`}
                </span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                <span>{location}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex-grow" />
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between border-t border-border mt-auto">
        <div>
          <div className="font-semibold">{entryFee}</div>
          <div className="text-sm text-muted-foreground">Mode • {mode}</div>
        </div>
        <Button onClick={onAction} className="px-8">
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};
