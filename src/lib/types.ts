export interface User {
  id: string;
  name: string;
  role: 'student' | 'teacher';
  school: string;
  class: string;
  totalPoints: number;
  badges: Badge[];
  avatarUrl: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  type: 'individual' | 'group';
  proofRequired: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  questionCount: number;
  pointsPerAnswer: number;
}

export interface Submission {
  id: string;
  student: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  task: {
    id: string;
    title: string;
  };
  proofUrl?: string;
  note: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

export interface Badge {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  threshold: number;
}

export interface LeaderboardEntry {
  rank: number;
  student: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  totalPoints: number;
  class: string;
}
