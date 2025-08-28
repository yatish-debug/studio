import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EcoChampionIcon } from '@/components/icons';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4">
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <EcoChampionIcon className="h-6 w-6" />
          <span className="text-xl font-bold tracking-tight font-headline">
            EcoChampion
          </span>
        </Link>
      </div>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Welcome Back!</CardTitle>
          <CardDescription>
            Log in to continue your journey.
          </CardDescription>
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
            <Button className="w-full" asChild>
              <Link href="/student">Login</Link>
            </Button>
            <Button variant="outline" className="w-full">
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 64.5C308.6 102.3 279.2 88 248 88c-73.2 0-132.3 59.2-132.3 132S174.8 352 248 352c78.8 0 117.3-56.8 122.4-87.5h-122.4v-83.3h235.2c2.1 12.3 3.2 24.9 3.2 37.8z"
                ></path>
              </svg>
              Sign in with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
