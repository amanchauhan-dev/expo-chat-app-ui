import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView className='p-4 mt-4'>
      <ThemedText>Hello home</ThemedText>
    </ThemedView>
  );
}
