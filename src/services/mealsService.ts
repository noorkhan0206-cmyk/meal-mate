import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase.config';

export interface Meal {
  id?: string;
  title: string;
  ingredients: string;
  imageBase64?: string;
  dayOfWeek: string;
  userId: string;
  createdAt: number;
}

// Convert image URI to base64 using fetch
export const convertImageToBase64 = async (uri: string): Promise<string> => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          // Remove the data:image/xxx;base64, prefix
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else {
          reject(new Error('Failed to convert to base64'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error converting image to base64:', error);
    throw error;
  }
};

// Add a new meal
export const addMeal = async (
  meal: Omit<Meal, 'id' | 'createdAt'>,
): Promise<void> => {
  try {
    await addDoc(collection(db, 'meals'), {
      ...meal,
      createdAt: Date.now(),
    });
  } catch (error) {
    console.error('Error adding meal:', error);
    throw error;
  }
};

// Get meals for a specific user and day
export const getMealsByDay = async (
  userId: string,
  dayOfWeek: string,
): Promise<Meal[]> => {
  try {
    const q = query(
      collection(db, 'meals'),
      where('userId', '==', userId),
      where('dayOfWeek', '==', dayOfWeek),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Meal[];
  } catch (error) {
    console.error('Error getting meals:', error);
    return [];
  }
};

// Get all meals for a user (for all days)
export const getAllUserMeals = async (userId: string): Promise<Meal[]> => {
  try {
    const q = query(collection(db, 'meals'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Meal[];
  } catch (error) {
    console.error('Error getting all meals:', error);
    return [];
  }
};

// Delete a meal
export const deleteMeal = async (mealId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'meals', mealId));
  } catch (error) {
    console.error('Error deleting meal:', error);
    throw error;
  }
};
