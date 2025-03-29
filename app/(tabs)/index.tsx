import { ScreenView } from '@/components/ScreenView';
import { Search } from '@/components/search';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, ScrollView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScreenView>
      <ChatList />
    </ScreenView>
  );
}




const Filter = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className=' mt-4 flex flex-row gap-3'>
        <ThemedView className='px-4 py-[2px]  rounded-lg'><ThemedText className='text-sm' style={{ fontSize: 15 }}>All</ThemedText></ThemedView>
        <ThemedView className='px-4 py-[2px] rounded-lg'><ThemedText className='text-sm' style={{ fontSize: 15 }}>Unread</ThemedText></ThemedView>
        <ThemedView className='px-4 py-[2px] rounded-lg'><ThemedText className='text-sm' style={{ fontSize: 15 }}>Groups</ThemedText></ThemedView>
      </View>
    </ScrollView>
  )
}

type ChatItemProps = {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  lastMessageDate: string;
  avatar: string;
  isGroup: boolean;
}

const data: ChatItemProps[] = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hello, how are you?',
    lastMessageTime: '10:30 AM',
    unreadCount: 2,
    lastMessageDate: '2023-10-01',
    avatar: '',
    isGroup: false,
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    lastMessageTime: '9:15 PM',
    unreadCount: 0,
    lastMessageDate: '2023-09-30',
    avatar: '',
    isGroup: false,
  },
  {
    id: 3,
    name: 'Group Chat',
    lastMessage: 'New message in group chat',
    lastMessageTime: 'Yesterday',
    unreadCount: 5,
    lastMessageDate: '2023-09-29',
    avatar: '',
    isGroup: true,
  },
  {
    id: 4,
    name: 'Alice Johnson',
    lastMessage: 'Can you send me the file?',
    lastMessageTime: '2 days ago',
    unreadCount: 1,
    lastMessageDate: '2023-09-28',
    avatar: '',
    isGroup: false,
  }
]

const ChatList = () => {
  return (
    <View className='p-2 mt-2'>
      <FlatList
        style={{ elevation: 0 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className='mb-5'>
            <Search />
            <Filter />
          </View>
        }
        data={data}
        renderItem={({ item }) => <ChatItem {...item} />}
      />
    </View>
  );
};


const ChatItem = ({ name, avatar, lastMessage, lastMessageDate, lastMessageTime, unreadCount, isGroup }: ChatItemProps) => {
  return (
    <View className='py-3 px-0 border-b border-zinc-800 flex flex-row' style={{ elevation: 0 }}>
      {/* Avatar */}
      <View className='w-14 h-14 rounded-full bg-zinc-800' />
      {/* Details */}
      <View className='flex-1 ml-3'>
        <ThemedText className='text-lg font-semibold'>{name}</ThemedText>
        <ThemedText className='!text-sm text-zinc-400'>{lastMessage}</ThemedText>
        <ThemedText className='!text-sm text-zinc-400'>{lastMessageDate}</ThemedText>
      </View>
      {/* Count and Date */}
      <View className='flex flex-col justify-center items-center'>
        {unreadCount > 0 && (
          <View className='bg-green-800 w-7 h-7 rounded-full flex justify-center items-center'>
            <ThemedText className='!text-sm text-center'>{unreadCount}</ThemedText>
          </View>
        )}
        <ThemedText className='!text-sm text-zinc-400'>{lastMessageTime}</ThemedText>
      </View>
    </View>
  );
};