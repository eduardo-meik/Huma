import { UserRole } from "../utils/auth.roles";

export const defaultMenuType = 'menu-default' // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = '/app';
export const searchPath = `${adminRoot}/pages/miscellaneous/search`
export const buyUrl = 'https://1.envato.market/nEyZa'
export const apiUrl = 'https://api.coloredstrategies.com';

export const subHiddenBreakpoint = 1440
export const menuHiddenBreakpoint = 768

export const defaultLocale = 'en'
export const defaultDirection = 'ltr'
export const localeOptions = [
  { id: 'en', name: 'English LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English RTL', direction: 'rtl' }
]

export const firebaseConfig = {
  apiKey: "AIzaSyDEaUsKuLZDhrLhCm1MkLbyxZ6_sqUvg1w",
  authDomain: "huma-7db50.firebaseapp.com",
  projectId: "huma-7db50",
  storageBucket: "huma-7db50.appspot.com",
  messagingSenderId: "747048673740",
  appId: "1:747048673740:web:650011ffe0fa3f3fe8fd69",
  measurementId: "G-8E01MGDJLD"
};




export const currentUser = {
  id: 1,
  title: 'Sarah Kortney',
  img: '/assets/img/profiles/l-1.jpg',
  date: 'Last seen today 15:24',
  role: UserRole.Admin
}

export const isAuthGuardActive = false
export const themeRadiusStorageKey = 'theme_radius'
export const themeSelectedColorStorageKey = 'theme_selected_color'
export const defaultColor = 'light.blueolympic'
export const colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel']
