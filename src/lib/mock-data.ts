import type { User, Task, Quiz, Submission, Badge, LeaderboardEntry } from './types';
import { Sprout, Shield, Star, Award, Leaf } from 'lucide-react';

export const mockStudent: User = {
  id: 'student-1',
  name: 'Alex Green',
  role: 'student',
  school: 'Oakwood High',
  class: 'Grade 8 - Section B',
  totalPoints: 285,
  badges: [
    { name: 'Starter', threshold: 50, icon: Sprout, description: 'Earn 50 points' },
    { name: 'Green Warrior', threshold: 150, icon: Shield, description: 'Earn 150 points' },
  ],
  avatarUrl: 'https://i.pravatar.cc/150?u=alexgreen',
};

export const mockTeacher: User = {
  id: 'teacher-1',
  name: 'Ms. Diane Woods',
  role: 'teacher',
  school: 'Oakwood High',
  class: 'Grade 8 - Section B',
  totalPoints: 0,
  badges: [],
  avatarUrl: 'https://i.pravatar.cc/150?u=dianewoods',
};

export const mockTasks: Task[] = [
  { id: 'task-1', title: 'Plant a Sapling', description: 'Plant a tree in your community and upload a photo.', points: 20, type: 'individual', proofRequired: true },
  { id: 'task-2', title: 'Plastic-Free Day', description: 'Go a full day without using any single-use plastics. Write a note about your experience.', points: 30, type: 'individual', proofRequired: true },
  { id: 'task-3', title: 'Community Cleanup', description: 'Organize or join a cleanup event in a local park or beach.', points: 40, type: 'group', proofRequired: true },
  { id: 'task-4', title: 'Energy Saver', description: 'Reduce your home electricity usage for a week. Submit a before/after utility bill.', points: 50, type: 'individual', proofRequired: true },
];

export const mockQuizzes: Quiz[] = [
  { id: 'quiz-1', title: 'Recycling 101', questionCount: 10, pointsPerAnswer: 5 },
  { id: 'quiz-2', title: 'Water Conservation', questionCount: 8, pointsPerAnswer: 5 },
  { id: 'quiz-3', title: 'Climate Change Facts', questionCount: 15, pointsPerAnswer: 5 },
];

export const mockSubmissions: Submission[] = [
  {
    id: 'sub-1',
    student: { id: 'student-2', name: 'Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?u=bencarter' },
    task: { id: 'task-1', title: 'Plant a Sapling' },
    proofUrl: 'https://picsum.photos/400/300',
    note: 'Planted this oak sapling in my backyard!',
    status: 'pending',
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: 'sub-2',
    student: { id: 'student-3', name: 'Chloe Davis', avatarUrl: 'https://i.pravatar.cc/150?u=chloedavis' },
    task: { id: 'task-2', title: 'Plastic-Free Day' },
    note: 'It was challenging but I avoided all single-use plastics for 24 hours. I used my reusable water bottle and brought my own containers for lunch.',
    status: 'pending',
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    id: 'sub-3',
    student: { id: 'student-4', name: 'David Evans', avatarUrl: 'https://i.pravatar.cc/150?u=davidevans' },
    task: { id: 'task-3', title: 'Community Cleanup' },
    proofUrl: 'https://picsum.photos/400/300?grayscale',
    note: 'Our group cleaned up the local park. We collected 5 bags of trash!',
    status: 'pending',
    submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
];

export const allBadges: Badge[] = [
  { name: 'Starter', threshold: 50, icon: Sprout, description: 'Earn 50 points' },
  { name: 'Green Warrior', threshold: 150, icon: Shield, description: 'Earn 150 points' },
  { name: 'Zero-Waste Champion', threshold: 300, icon: Star, description: 'Earn 300 points' },
  { name: 'Eco-Legend', threshold: 500, icon: Award, description: 'Earn 500 points' },
  { name: 'Planet Guardian', threshold: 1000, icon: Leaf, description: 'Earn 1000 points' },
];

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, student: { id: 'student-5', name: 'Fiona Garcia', avatarUrl: 'https://i.pravatar.cc/150?u=fiona' }, totalPoints: 310, class: 'Grade 8 - Section A' },
  { rank: 2, student: { id: 'student-1', name: 'Alex Green', avatarUrl: 'https://i.pravatar.cc/150?u=alexgreen' }, totalPoints: 285, class: 'Grade 8 - Section B' },
  { rank: 3, student: { id: 'student-2', name: 'Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?u=bencarter' }, totalPoints: 250, class: 'Grade 8 - Section B' },
  { rank: 4, student: { id: 'student-6', name: 'George Hill', avatarUrl: 'https://i.pravatar.cc/150?u=george' }, totalPoints: 220, class: 'Grade 8 - Section A' },
  { rank: 5, student: { id: 'student-3', name: 'Chloe Davis', avatarUrl: 'https://i.pravatar.cc/150?u=chloedavis' }, totalPoints: 195, class: 'Grade 8 - Section B' },
];
