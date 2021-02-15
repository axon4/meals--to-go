import { Platform } from 'react-native';

export const isMock = false;

export const isDevelopment = process.env.NODE_ENV === 'development';

const isAndroid = Platform.OS === 'android';

const localHost = 'https://localhost:5001/meals-to-go-b9f20/us-central1';
const liveHost = 'https://us-central1-meals-to-go-b9f20.cloudfunctions.net';

export const host = isDevelopment && !isAndroid ? localHost : liveHost;