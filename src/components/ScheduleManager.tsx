import React from "react";
import { Card, CardContent } from "./ui/card";

export interface ScheduleManagerProps {
  title?: string;
}

const ScheduleManager: React.FC<ScheduleManagerProps> = ({
  title = "Schedule Manager",
}) => {
  return (
    <div className="p-6">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="text-muted-foreground">
            Your scheduling module is live and ready!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleManager;
