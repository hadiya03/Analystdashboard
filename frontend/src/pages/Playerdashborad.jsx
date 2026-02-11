import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Activity, HeartPulse, Moon, Timer } from "lucide-react";

export default function PlayerDashboard() {
  const [form, setForm] = useState({
    rpe: "",
    duration: "",
    sleep: "",
    soreness: "",
  });

  const readinessScore = 72; // sample calculated value

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Player Dashboard</h1>

      {/* Readiness Overview */}
      <Card className="bg-zinc-900 border-zinc-800 mb-6">
        <CardHeader>
          <CardTitle>Today's Readiness</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={readinessScore} className="mb-2" />
          <p className="text-sm text-zinc-400">Readiness Score: {readinessScore}%</p>
        </CardContent>
      </Card>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="flex items-center gap-3 p-4">
            <Activity />
            <div>
              <p className="text-sm text-zinc-400">Fatigue</p>
              <p className="text-lg font-semibold">Moderate</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="flex items-center gap-3 p-4">
            <HeartPulse />
            <div>
              <p className="text-sm text-zinc-400">Injury Risk</p>
              <p className="text-lg font-semibold text-yellow-400">Medium</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="flex items-center gap-3 p-4">
            <Timer />
            <div>
              <p className="text-sm text-zinc-400">Last Session</p>
              <p className="text-lg font-semibold">60 min</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="flex items-center gap-3 p-4">
            <Moon />
            <div>
              <p className="text-sm text-zinc-400">Sleep</p>
              <p className="text-lg font-semibold">7 hrs</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Data Input */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Post-Training Input</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="RPE (1–10)"
            className="bg-black border-zinc-700"
            value={form.rpe}
            onChange={(e) => setForm({ ...form, rpe: e.target.value })}
          />
          <Input
            placeholder="Duration (minutes)"
            className="bg-black border-zinc-700"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
          />
          <Input
            placeholder="Sleep Hours"
            className="bg-black border-zinc-700"
            value={form.sleep}
            onChange={(e) => setForm({ ...form, sleep: e.target.value })}
          />
          <Input
            placeholder="Muscle Soreness (1–10)"
            className="bg-black border-zinc-700"
            value={form.soreness}
            onChange={(e) => setForm({ ...form, soreness: e.target.value })}
          />
          <Button className="md:col-span-2 bg-white text-black hover:bg-zinc-200">
            Submit Training Data (Send to Trainer)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
