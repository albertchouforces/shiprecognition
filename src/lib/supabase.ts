import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lgtijobontcybeqobomh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxndGlqb2JvbnRjeWJlcW9ib21oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjQ1MDk4MiwiZXhwIjoyMDUyMDI2OTgyfQ.TIlDrifOlgutH-kt7Zsu5ab-0iCqS_E6LPZixxbTNLw';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface GlobalScoreEntry {
  user_name: string;
  score: number;
  accuracy: number;
  time: number;
  date: string;
  service: string;
}

export async function saveGlobalScore(
  scoreData: Omit<GlobalScoreEntry, 'service'>, 
  quizName: string
): Promise<boolean> {
  try {
    // Validate data before sending
    if (!scoreData.user_name || 
        typeof scoreData.score !== 'number' || 
        typeof scoreData.accuracy !== 'number' || 
        typeof scoreData.time !== 'number') {
      console.error('Invalid score data:', scoreData);
      return false;
    }

    const { error } = await supabase
      .from('global_scores')
      .insert([{
        ...scoreData,
        service: quizName
      }]);

    if (error) {
      console.error('Error saving global score:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Error in saveGlobalScore:', err);
    return false;
  }
}

export async function getGlobalScores(quizName: string): Promise<GlobalScoreEntry[]> {
  try {
    if (!quizName) {
      console.error('Quiz name is required');
      return [];
    }

    // Log the query parameters for debugging
    console.log('Fetching global scores for quiz:', quizName);

    const { data, error } = await supabase
      .from('global_scores')
      .select('*')
      .eq('service', quizName)
      .order('score', { ascending: false })
      .order('time', { ascending: true })
      .limit(100);

    if (error) {
      console.error('Error fetching global scores:', error);
      return [];
    }

    console.log('Received global scores:', data?.length || 0, 'entries');
    return data || [];
  } catch (err) {
    console.error('Error in getGlobalScores:', err);
    return [];
  }
}
