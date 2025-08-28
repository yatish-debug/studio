import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EcoChampionIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <EcoChampionIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary tracking-tight font-headline">
            EcoChampion
          </h1>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="#features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button asChild>
            <Link href="/student/dashboard">Login</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tighter">
              Become an EcoChampion.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Join a community of students making a real difference. Complete fun eco-tasks, ace quizzes, and climb the leaderboard to save our planet!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/student/dashboard">Start as a Student</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                 <Link href="/teacher/dashboard">I'm a Teacher</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
             <Image
                src="https://picsum.photos/800/600"
                alt="Happy students participating in an eco-friendly activity"
                data-ai-hint="students planting"
                fill
                className="object-cover"
              />
          </div>
        </section>
        
        <section id="features" className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <h3 className="text-3xl font-bold font-headline text-primary">How It Works</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Engage in a simple, gamified loop to learn and contribute to a healthier planet.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Leaf className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Complete Eco-Tasks</h4>
                <p className="text-muted-foreground">
                  From planting trees to reducing waste, choose tasks that inspire you. Upload proof and earn points.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Earn Points & Badges</h4>
                <p className="text-muted-foreground">
                  Watch your points grow and unlock cool badges as you become a true Green Warrior.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Climb the Leaderboard</h4>
                <p className="text-muted-foreground">
                  Compete with friends, classmates, and other schools. See who can make the biggest impact!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="login" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
             <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-headline">Join EcoChampion Today!</CardTitle>
                  <CardDescription>Sign up or log in to start your journey.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@school.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                   <div className="flex flex-col gap-2">
                      <Button className="w-full" asChild><Link href="/student/dashboard">Login / Sign Up</Link></Button>
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 64.5C308.6 102.3 279.2 88 248 88c-73.2 0-132.3 59.2-132.3 132S174.8 352 248 352c78.8 0 117.3-56.8 122.4-87.5h-122.4v-83.3h235.2c2.1 12.3 3.2 24.9 3.2 37.8z"></path></svg>
                        Sign in with Google
                      </Button>
                    </div>
                </CardContent>
              </Card>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} EcoChampion. All rights reserved.
         </div>
      </footer>
    </div>
  );
}
