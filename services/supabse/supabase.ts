import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
// dev

// const supabaseUrl = "https://ctxvsrfwmbfxsodwuvxv.supabase.co";
// const supabaseAnonKey =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0eHZzcmZ3bWJmeHNvZHd1dnh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzQwMTc2OCwiZXhwIjoxOTgyOTc3NzY4fQ.ILlCsy7X1bBf5DQ2ccj4eHR3sK-cvStCnDEHLMtFOA0";
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/*** Production ***/
const supabaseUrl = 'https://ghukjxfokoeacobbajae.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodWtqeGZva29lYWNvYmJhamFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NDc3MjcsImV4cCI6MTk3OTUyMzcyN30.LndnChFvtsHpCcF9WZTCP67SsaYzfmDEDJQAmlWgnWc';

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
