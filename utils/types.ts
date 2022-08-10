import { atom } from 'recoil'
import { BiHash, BiHomeCircle } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import {IoMailOutline, IoNotificationsOutline, IoPersonOutline} from 'react-icons/io5'
import { AiOutlineProfile } from 'react-icons/ai'

// const rules = atom([])


export const ruleData = [
  'Entertainment', 'Sports', 'Anime', 'Technology','Space', 'Travel', 'Automobiles', 'Electronics'
]
export const sideNav = [
  {
    title: 'Home',
    route: '/home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    route: '/explore',
    icon: BiHash,
  },
  {
    title: 'Notifications',
    route: '/notifications',
    icon: IoNotificationsOutline,
  },
  {
    title: 'Messages',
    route: '/messages',
    icon: IoMailOutline,
  },
  {
    title: 'Bookmarks',
    route: '/bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Lists',
    route: '/lists',
    icon: AiOutlineProfile,
  },
  {
    title: 'Profile',
    route: '/profile',
    icon: IoPersonOutline,
  }
]