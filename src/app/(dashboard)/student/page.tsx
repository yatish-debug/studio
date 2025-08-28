import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  CheckSquare,
  Leaf,
  Sprout,
  Star,
  Trophy,
  BookOpen,
} from "lucide-react";
import {
  allBadges,
  mockLeaderboard,
  mockQuizzes,
  mockStudent,
  mockTasks,
} from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export default function StudentDashboard() {
  const currentBadge = mockStudent.badges[mockStudent.badges.length - 1];
  const nextBadge = allBadges[mockStudent.badges.length];
  const progressToNextBadge = nextBadge ? Math.round(((mockStudent.totalPoints - currentBadge.threshold) / (nextBadge.threshold - currentBadge.threshold)) * 100) : 100;
  
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 xl:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStudent.totalPoints}</div>
              <p className="text-xs text-muted-foreground">+20 points from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStudent.badges.length}</div>
              <p className="text-xs text-muted-foreground">New 'Green Warrior' badge!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#2</div>
              <p className="text-xs text-muted-foreground">Up from #5 last week</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 days</div>
              <p className="text-xs text-muted-foreground">Complete a task to keep it!</p>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="tasks">
          <TabsList>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          </TabsList>
          <TabsContent value="tasks">
            <Card>
              <CardHeader>
                <CardTitle>Available Tasks</CardTitle>
                <CardDescription>Complete these tasks to earn points and make a difference.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockTasks.map(task => (
                  <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg"><Leaf className="h-6 w-6 text-primary"/></div>
                      <div>
                        <p className="font-semibold">{task.title}</p>
                        <p className="text-sm text-muted-foreground">{task.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg text-primary">+{task.points}</p>
                        <Button size="sm" className="mt-1">Submit</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="quizzes">
              <Card>
              <CardHeader>
                <CardTitle>Available Quizzes</CardTitle>
                <CardDescription>Test your knowledge and earn points for correct answers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockQuizzes.map(quiz => (
                  <div key={quiz.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg"><BookOpen className="h-6 w-6 text-primary"/></div>
                      <div>
                        <p className="font-semibold">{quiz.title}</p>
                        <p className="text-sm text-muted-foreground">{quiz.questionCount} questions</p>
                      </div>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg text-primary">+{quiz.pointsPerAnswer * quiz.questionCount} pts</p>
                        <Button size="sm" className="mt-1">Start Quiz</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <Card>
            <CardHeader>
              <CardTitle>Next Badge Progress</CardTitle>
              <CardDescription>You're on your way to unlocking the <span className="font-semibold text-primary">{nextBadge.name}</span> badge!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <currentBadge.icon className="h-6 w-6 text-primary" />
                    <span>{currentBadge.name}</span>
                  </div>
                   <div className="flex items-center gap-2 text-muted-foreground">
                    <nextBadge.icon className="h-6 w-6" />
                    <span>{nextBadge.name}</span>
                  </div>
              </div>
              <Progress value={progressToNextBadge} aria-label={`${progressToNextBadge}% to next badge`} />
              <p className="text-center text-sm text-muted-foreground">
                <span className="font-bold text-foreground">{nextBadge.threshold - mockStudent.totalPoints}</span> points to go!
              </p>
            </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Class Leaderboard</CardTitle>
              <CardDescription>
                See how you stack up against your classmates.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeaderboard.map((entry) => (
                  <TableRow key={entry.rank} className={entry.student.id === mockStudent.id ? 'bg-secondary' : ''}>
                    <TableCell>
                      <div className="font-medium">{entry.rank}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="hidden h-8 w-8 sm:flex">
                          <AvatarImage src={entry.student.avatarUrl} alt={entry.student.name} />
                          <AvatarFallback>
                            {entry.student.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {entry.student.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{entry.totalPoints}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
