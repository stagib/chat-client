import { io } from 'socket.io-client';

const ORIGIN = import.meta.env.VITE_ORIGIN;
export const socket = io(ORIGIN);
