export interface SystemStats {
  cpuLoad: number;
  cpuCount: number;
  ramUsage: number;
  totalRam: number;
  storage: number;
  totalStorage: number;
  videoSchedule: number;
  activeChannels: number;
  queueSize: number;
}

export interface Asset {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video';
  category: 'visual';
  size: string;
  blob?: Blob;
}

export interface VideoJob {
  id: string;
  data: {
    title: string;
    description: string;
    tags: string[];
    videoPath: string;
    thumbnailPath?: string;
    privacy: 'public' | 'private' | 'unlisted';
    playlistId?: string;
    scheduledAt: string | null;
    channelId: string;
    categoryId?: string;
    madeForKids?: boolean;
    aiLabel?: boolean;
    privacyAfterLive?: 'public' | 'private' | 'unlisted' | 'tetap';
    monetization?: boolean;
  };
  status: 'queued' | 'processing' | 'completed' | 'failed';
  progress: number;
  videoUrl?: string;
  error?: string;
  createdAt: string;
}

export interface YouTubeChannel {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: 'Connected' | 'Disconnected' | 'Error';
  accessToken: string;
  refreshToken: string;
  expiryDate: number;
}

export interface APIConfig {
  id: string;
  name: string;
  clientId: string;
  clientSecret: string;
  status: 'Active' | 'Error' | 'Quota Exceeded';
  quotaUsed: number;
  lastUsed: number;
}

export interface MediaAsset {
  id: string;
  filename: string;
  path: string;
  size: number;
  duration: number;
  thumbnail: string;
  source: 'drive' | 'youtube' | 'local' | 'direct';
  status: 'processing' | 'ready' | 'failed' | 'uploading';
  progress: number;
  error?: string;
  createdAt: string;
}
