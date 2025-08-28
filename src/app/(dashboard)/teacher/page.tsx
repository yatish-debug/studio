"use client";

import Image from "next/image";
import { Check, X, Clock, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockSubmissions, mockTeacher } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function TeacherDashboard() {
  const { toast } = useToast();
  const pendingSubmissions = mockSubmissions.filter(s => s.status === 'pending');

  const handleApproval = (submissionId: string, studentName: string, approved: boolean) => {
     toast({
      title: `Submission ${approved ? "Approved" : "Rejected"}`,
      description: `You have ${approved ? "approved" : "rejected"} the submission from ${studentName}.`,
    });
    // Here you would typically update the state or call an API
  }

  return (
    <div className="grid gap-4 md:gap-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {mockTeacher.name}. Here's what's pending for you.</p>
      </div>
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">Pending Submissions</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingSubmissions.length}</div>
              <p className="text-xs text-muted-foreground">submissions require your review.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">Total Approvals Today</CardTitle>
               <Check className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+5 from yesterday</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">Class Average Points</CardTitle>
               <FileText className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">189</div>
              <p className="text-xs text-muted-foreground">Trending upwards this week</p>
            </CardContent>
          </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Review Submissions</CardTitle>
          <CardDescription>
            Approve or reject student submissions to award points.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {pendingSubmissions.map((submission) => (
            <div key={submission.id} className="flex flex-col sm:flex-row items-start gap-4 p-4 border rounded-lg">
                <div className="flex items-center gap-4 flex-shrink-0">
                    <Avatar>
                        <AvatarImage src={submission.student.avatarUrl} />
                        <AvatarFallback>{submission.student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{submission.student.name}</p>
                        <p className="text-sm text-muted-foreground">{submission.task.title}</p>
                    </div>
                </div>

                <Separator orientation="vertical" className="h-auto hidden sm:block"/>
                <Separator className="sm:hidden"/>
                
                <div className="flex-grow">
                    <p className="text-sm text-muted-foreground font-medium mb-2">Submission Details:</p>
                    {submission.proofUrl && (
                        <div className="relative w-full h-40 sm:w-48 sm:h-32 rounded-md overflow-hidden mb-2">
                        <Image
                            src={submission.proofUrl}
                            alt={`Proof for ${submission.task.title}`}
                            fill
                            className="object-cover"
                            data-ai-hint="student submission"
                        />
                        </div>
                    )}
                    <p className="text-sm bg-secondary/50 p-2 rounded-md italic">"{submission.note}"</p>
                    <p className="text-xs text-muted-foreground mt-2">Submitted {submission.submittedAt.toLocaleDateString()}</p>
                </div>
                <div className="flex w-full sm:w-auto sm:flex-col gap-2 justify-end flex-shrink-0">
                    <Button size="sm" className="w-full" onClick={() => handleApproval(submission.id, submission.student.name, true)}>
                        <Check className="mr-2 h-4 w-4" />
                        Approve
                    </Button>
                    <Button size="sm" variant="outline" className="w-full" onClick={() => handleApproval(submission.id, submission.student.name, false)}>
                        <X className="mr-2 h-4 w-4" />
                        Reject
                    </Button>
                </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
